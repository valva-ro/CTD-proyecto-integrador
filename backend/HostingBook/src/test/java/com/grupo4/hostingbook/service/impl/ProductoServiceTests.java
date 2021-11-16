package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
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
    private ProductoDTO productoPorActualizar;

    @BeforeEach
    public void setUp() throws BadRequestException {
        CategoriaDTO categoriaID = new CategoriaDTO(1L);
        CiudadDTO ciudadID = new CiudadDTO(1L);
        ImagenDTO imagen1ID = new ImagenDTO(1L);
        ImagenDTO imagen2ID = new ImagenDTO(2L);
        CaracteristicaDTO caracteristica1ID = new CaracteristicaDTO(1L);
        CaracteristicaDTO caracteristica2ID = new CaracteristicaDTO(2L);
        Set<ImagenDTO> imagenesIDs = Set.of(imagen1ID, imagen2ID);
        Set<CaracteristicaDTO> caracteristicasIDs = Set.of(caracteristica1ID, caracteristica2ID);

        categoriaService.crear(new CategoriaDTO("Hotel", "807.105 hoteles", "https://via.placeholder.com/300"));
        ciudadService.crear(new CiudadDTO("Manizales", "Colombia",5.067, -75.517));
        imagenService.crear(new ImagenDTO("Habitación doble", "https://via.placeholder.com/300"));
        imagenService.crear(new ImagenDTO("Baño", "https://via.placeholder.com/300"));
        caracteristicaService.crear(new CaracteristicaDTO("WiFi","<i class='bx bx-wifi'></i>"));
        caracteristicaService.crear(new CaracteristicaDTO("Parking","<i class='bx bxs-car'></i>"));

        productoPorCrear = new ProductoDTO("Hotel Melia", "Servicio all inclusive con vista al mar", categoriaID, ciudadID, imagenesIDs, caracteristicasIDs);
        productoPorActualizar = new ProductoDTO(1L,"Hotel Grand Meliá", "", null, null, null, null);
    }

    @Test
    public void test01ObtenerTodosLosProductosEstaVacio() {
        assertEquals(0, productoService.consultarTodos().size());
    }

    @Test
    @Transactional
    public void test02AgregarProducto() throws BadRequestException, ResourceNotFoundException {
        ProductoDTO p = productoService.crear(productoPorCrear);
        assertNotEquals( null, p);
    }

    @Test
    @Transactional
    public void test03ObtenerTodosLosProductos() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        assertNotEquals(0, productoService.consultarTodos().size());
    }

    @Test
    @Transactional
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
    @Transactional
    public void test07ActualizarProductoExistente() throws BadRequestException, ResourceNotFoundException, NotImplementedException {
        ProductoDTO dtoCreadoBBDD = productoService.crear(productoPorCrear);
        ProductoDTO dtoActualizado = productoService.actualizar(productoPorActualizar);
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
    @Transactional
    void test13ConsultarPorCategoriaExistente() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        Set<ProductoDTO> productoFiltradoPorCategoria = productoService.consultarPorCategoria("Hotel");
        assertEquals(1, productoFiltradoPorCategoria.size());
    }

    @Test
    @Transactional
    void test14ConsultarPorCategoriaInexistente() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        assertThrows(ResourceNotFoundException.class, () -> productoService.consultarPorCategoria("Cabañas"));
    }

    @Test
    @Transactional
    void test15ConsultarPorCiudadExistente() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        Set<ProductoDTO> productoFiltradoPorCiudad = productoService.consultarPorCiudad("Manizales");
        assertEquals(1, productoFiltradoPorCiudad.size());
    }

    @Test
    @Transactional
    void test16ConsultarPorCiudadInexistente() throws BadRequestException, ResourceNotFoundException {
        productoService.crear(productoPorCrear);
        assertThrows(ResourceNotFoundException.class, () -> productoService.consultarPorCiudad("Mendoza"));
    }
}