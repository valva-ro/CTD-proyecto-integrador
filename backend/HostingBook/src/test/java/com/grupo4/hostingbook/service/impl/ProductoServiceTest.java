package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.*;
import com.grupo4.hostingbook.service.CRUDService;
import com.grupo4.hostingbook.service.IProductoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class ProductoServiceTest {

    @Autowired
    private IProductoService productoService;

    @Autowired
    @Qualifier("CiudadService")
    private CiudadService ciudadService;

    @Autowired
    @Qualifier("CategoriaService")
    private CategoriaService categoriaService;

    private CategoriaDTO categoriaEjemplo;
    private CategoriaDTO categoriaCreadaEjemplo;
    private CiudadDTO ciudadEjemplo;
    private CiudadDTO ciudadCreadaEjemplo;
    private Set<ImagenDTO> imagenesEjemplo;
    private Set<ImagenDTO> imagenesCreadasEjemplo;
    private Set<CaracteristicaDTO> caracteristicasEjemplo;
    private Set<CaracteristicaDTO> caracteristicasCreadasEjemplo;

    private ProductoDTO productoPorCrear;
    private ProductoDTO productoCreado;
    private ProductoDTO productoPorActualizar;
    private ProductoDTO productoActualizado;

    @BeforeEach
    public void setUp(){

        categoriaEjemplo = new CategoriaDTO("Hotel", "807.105 hoteles", "https://via.placeholder.com/300");
        categoriaCreadaEjemplo = new CategoriaDTO(1L,"Hotel", "807.105 hoteles", "https://via.placeholder.com/300");

        ciudadEjemplo = new CiudadDTO("Manizales", "Colombia");
        ciudadCreadaEjemplo = new CiudadDTO(1L,"Manizales", "Colombia");

        imagenesEjemplo = Set.of(new ImagenDTO("Habitación doble", "https://via.placeholder.com/300"),new ImagenDTO("Baño", "https://via.placeholder.com/300"));
        imagenesCreadasEjemplo = Set.of(new ImagenDTO(1L,"Habitación doble", "https://via.placeholder.com/300"),new ImagenDTO(2L,"Baño", "https://via.placeholder.com/300"));


        caracteristicasEjemplo = Set.of(new CaracteristicaDTO("WiFi","<i class='bx bx-wifi'></i>"),new CaracteristicaDTO("Parking","<i class='bx bxs-car'></i>"),new CaracteristicaDTO("Pool","<i class='bx bx-swim'></i>"));
        caracteristicasCreadasEjemplo = Set.of(new CaracteristicaDTO(1L,"WiFi", "<i class='bx bx-wifi'></i>"),new CaracteristicaDTO(2L,"Parking","<i class='bx bxs-car'></i>"), new CaracteristicaDTO(3L,"Pool", "<i class='bx bx-swim'></i>"));

        productoPorCrear = new ProductoDTO("Hotel Melia", "Servicio all inclusive con vista al mar", categoriaEjemplo, ciudadEjemplo, imagenesEjemplo, caracteristicasEjemplo);
        productoCreado = new ProductoDTO(1L,"Hotel Melia", "Servicio all inclusive con vista al mar", categoriaCreadaEjemplo, ciudadCreadaEjemplo, imagenesCreadasEjemplo, caracteristicasCreadasEjemplo);
        productoPorActualizar = new ProductoDTO(1L,"Hotel Grand Meliá", "", null, null, null, null);
        productoActualizado = new ProductoDTO(1L, "Hotel Grand Meliá", "Servicio all inclusive con vista al mar", categoriaCreadaEjemplo, ciudadCreadaEjemplo, imagenesCreadasEjemplo, caracteristicasCreadasEjemplo);
    }

    @Test
    public void test01ObtenerTodosLosProductosEstaVacio() {
        assertEquals(0, productoService.consultarTodos().size());
    }

    @Test
    public void test02AgregarProducto() throws BadRequestException {
        ProductoDTO p = productoService.crear(productoPorCrear);
        assertNotEquals( null, p);
    }

    @Test
    public void test03ObtenerTodosLosProductos() throws BadRequestException {
        productoService.crear(productoPorCrear);
        assertNotEquals(0, productoService.consultarTodos().size());
    }

    @Test
    public void test04EliminarProductoPorId() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        assertNotEquals(0, productoService.consultarTodos().size());

        productoService.eliminar(1L);
        assertEquals(0, productoService.consultarTodos().size());
    }

    @Test
    public void test05NoSePuedeEliminarProductoPorIdSiEsMenorA1() {
        assertThrows(BadRequestException.class, () -> productoService.eliminar(0L));
    }

    @Test
    public void test06NoSePuedeEliminarProductoPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> productoService.eliminar(1L));
    }

    @Test
    public void test07ActualizarProductoExistente() throws BadRequestException, ResourceNotFoundException {
        ProductoDTO dtoCreadoBBDD = productoService.crear(productoPorCrear);
        ProductoDTO dtoActualizado = productoService.actualizar(productoPorActualizar);
        assertEquals(productoActualizado.getNombre(), dtoActualizado.getNombre());
        assertNotEquals(dtoCreadoBBDD.getNombre(), dtoActualizado.getNombre());
    }

    @Test
    public void test08NoSePuedeActualizarProductoSinId() {
        assertThrows(BadRequestException.class, () -> productoService.actualizar(productoPorCrear));
    }

    @Test
    public void test09NoSePuedeActualizarProductoInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> productoService.actualizar(productoPorActualizar));
    }

    @Test
    @Transactional
    public void test10BuscarProductoPorIdExistente() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        ProductoDTO productoEncontrado = productoService.buscarPorId(1L);
        assertEquals(productoCreado.getId(), productoEncontrado.getId());
        assertNotEquals(null, productoEncontrado);
    }

    @Test
    public void test11BuscarProductoPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> productoService.buscarPorId(1L));
    }

    @Test
    public void test12BuscarProductoPorIdInvalido() {
        assertThrows(BadRequestException.class, () -> productoService.buscarPorId(-1L));
    }


    @Test
    void test13ConsultarPorCategoriaExistente() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        Set<ProductoDTO> productoFiltradoPorCategoria = productoService.consultarPorCategoria("Hotel");
        assertEquals(1, productoFiltradoPorCategoria.size());
    }

    @Test
    void test14ConsultarPorCategoriaInexistente() throws BadRequestException {
        productoService.crear(productoPorCrear);
        assertThrows(ResourceNotFoundException.class, () -> productoService.consultarPorCategoria("Cabañas"));
    }

    @Test
    void test15ConsultarPorCiudadExistente() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        Set<ProductoDTO> productoFiltradoPorCiudad = productoService.consultarPorCiudad("Manizales");
        assertEquals(1, productoFiltradoPorCiudad.size());
    }

    @Test
    void test16ConsultarPorCiudadInexistente() throws BadRequestException {
        productoService.crear(productoPorCrear);
        assertThrows(ResourceNotFoundException.class, () -> productoService.consultarPorCiudad("Mendoza"));
    }

    /*@Test
    void test17CrearProductoAPartirDeCiudadYCategoriaExistente() throws BadRequestException, ResourceNotFoundException {
        CiudadDTO ciudadCreada = ciudadService.crear(ciudadEjemplo);
        CategoriaDTO categoriaCreada = categoriaService.crear(categoriaEjemplo);
        ProductoDTO producto = new ProductoDTO();
        producto.setNombre("El Hamilton");
        producto.setDescripcion("Hotel para una familia de 4 personas.");
        producto.setCategoria(categoriaCreada);
        producto.setCiudad(ciudadCreada);
        producto.setImagenes(imagenesCreadasEjemplo);
        producto.setCaracteristicas(caracteristicasCreadasEjemplo);

        ProductoDTO productoCreadoBDD = productoService.crear(producto);
        assertNotNull(productoService.buscarPorId(productoCreadoBDD.getId()));
    }*/
}