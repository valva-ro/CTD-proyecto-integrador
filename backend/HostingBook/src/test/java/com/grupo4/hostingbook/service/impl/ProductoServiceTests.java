package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.*;
import com.grupo4.hostingbook.service.IProductoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class ProductoServiceTests {

    @Autowired
    private IProductoService productoService;
    @Autowired
    private CategoriaService categoriaService;
    @Autowired
    private CiudadService ciudadService;
    @Autowired
    private ImagenService imagenService;
    @Autowired
    private CaracteristicaService caracteristicaService;

    private ProductoDTO productoPorCrear;
    private ProductoDTO productoCreado;
    private ProductoDTO productoPorActualizar;
    private ProductoDTO productoActualizado;

    @BeforeEach
    public void setUp() throws BadRequestException {
        CategoriaDTO categoria;
        CategoriaDTO categoriaCreada;
        CiudadDTO ciudad;
        CiudadDTO ciudadCreada;
        ImagenDTO imagen1 = new ImagenDTO("Habitación doble", "https://via.placeholder.com/300");
        ImagenDTO imagen2 = new ImagenDTO("Baño", "https://via.placeholder.com/300");
        CaracteristicaDTO caracteristica1 = new CaracteristicaDTO("WiFi","<i class='bx bx-wifi'></i>");
        CaracteristicaDTO caracteristica2 = new CaracteristicaDTO("Parking","<i class='bx bxs-car'></i>");
        Set<ImagenDTO> imagenesCreadas;
        Set<ImagenDTO> imagenes;
        Set<CaracteristicaDTO> caracteristicasCreadas;
        Set<CaracteristicaDTO> caracteristicas;

        categoria = new CategoriaDTO("Hotel", "807.105 hoteles", "https://via.placeholder.com/300");
        categoriaCreada = categoriaService.crear(categoria);
        ciudad = new CiudadDTO("Manizales", "Colombia");
        ciudadCreada = ciudadService.crear(ciudad);
        imagenes = Set.of(imagen1, imagen2);
        imagenesCreadas = Set.of(imagenService.crear(imagen1), imagenService.crear(imagen2));
        caracteristicas = Set.of(caracteristica1, caracteristica2);
        caracteristicasCreadas = Set.of(caracteristicaService.crear(caracteristica1), caracteristicaService.crear(caracteristica2));

        productoPorCrear = new ProductoDTO("Hotel Melia", "Servicio all inclusive con vista al mar", categoria, ciudad, imagenes, caracteristicas);
        productoCreado = new ProductoDTO(1L,"Hotel Melia", "Servicio all inclusive con vista al mar", categoriaCreada, ciudadCreada, imagenesCreadas, caracteristicasCreadas);
        productoPorActualizar = new ProductoDTO(1L,"Hotel Grand Meliá", "", null, null, null, null);
        productoActualizado = new ProductoDTO(1L, "Hotel Grand Meliá", "Servicio all inclusive con vista al mar", categoriaCreada, ciudadCreada, imagenesCreadas, caracteristicasCreadas);
    }

    @Test
    public void test01ObtenerTodosLosProductosEstaVacio() {
        assertEquals(0, productoService.consultarTodos().size());
    }

    @Test
    public void test02AgregarProducto() throws BadRequestException, ResourceNotFoundException {
        ProductoDTO p = productoService.crear(productoPorCrear);
        assertNotEquals( null, p);
    }

    @Test
    public void test03ObtenerTodosLosProductos() throws BadRequestException, ResourceNotFoundException {
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
    void test14ConsultarPorCategoriaInexistente() throws BadRequestException, ResourceNotFoundException {
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
    void test16ConsultarPorCiudadInexistente() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        assertThrows(ResourceNotFoundException.class, () -> productoService.consultarPorCiudad("Mendoza"));
    }
}