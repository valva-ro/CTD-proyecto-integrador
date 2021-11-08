package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.*;
import com.grupo4.hostingbook.service.CRUDService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
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
    private CRUDService<ProductoDTO> productoService;
    private ProductoDTO productoPorCrear;
    private ProductoDTO productoCreado;
    private ProductoDTO productoPorActualizar;
    private ProductoDTO productoActualizado;

    @BeforeEach
    public void setUp(){

        CategoriaDTO categoriaEjemplo = new CategoriaDTO("Hotel", "807.105 hoteles", "https://via.placeholder.com/300");
        CategoriaDTO categoriaCreadaEjemplo = new CategoriaDTO(1L,"Hotel", "807.105 hoteles", "https://via.placeholder.com/300");

        CiudadDTO ciudadEjemplo = new CiudadDTO("Manizales", "Colombia");
        CiudadDTO ciudadCreadaEjemplo = new CiudadDTO(1L,"Manizales", "Colombia");

        ImagenDTO imagenEjemplo1 = new ImagenDTO("Habitación doble", "https://via.placeholder.com/300");
        ImagenDTO imagenEjemplo2 = new ImagenDTO("Baño", "https://via.placeholder.com/300");
        Set<ImagenDTO> imagenesEjemplo = new HashSet<>();
        imagenesEjemplo.add(imagenEjemplo1);
        imagenesEjemplo.add(imagenEjemplo2);

        ImagenDTO imagenCreadaEjemplo1 = new ImagenDTO(1L,"Habitación doble", "https://via.placeholder.com/300");
        ImagenDTO imagenCreadaEjemplo2 = new ImagenDTO(2L,"Baño", "https://via.placeholder.com/300");
        Set<ImagenDTO> imagenesCreadasEjemplo = new HashSet<>();
        imagenesCreadasEjemplo.add(imagenCreadaEjemplo1);
        imagenesCreadasEjemplo.add(imagenCreadaEjemplo2);

        CaracteristicaDTO carateristicaEjemplo1 = new CaracteristicaDTO("WiFi", "<i class='bx bx-wifi' ></i>");
        CaracteristicaDTO carateristicaEjemplo2 = new CaracteristicaDTO("Parking","<i class='bx bxs-car'></i>");
        CaracteristicaDTO carateristicaEjemplo3 = new CaracteristicaDTO("Pool", "<i class='bx bx-swim'></i>");
        Set<CaracteristicaDTO> caracteristicasEjemplo = new HashSet<>();
        caracteristicasEjemplo.add(carateristicaEjemplo1);
        caracteristicasEjemplo.add(carateristicaEjemplo2);
        caracteristicasEjemplo.add(carateristicaEjemplo3);

        CaracteristicaDTO carateristicaCreadaEjemplo1 = new CaracteristicaDTO(1L,"WiFi", "<i class='bx bx-wifi' ></i>");
        CaracteristicaDTO carateristicaCreadaEjemplo2 = new CaracteristicaDTO(2L,"Parking","<i class='bx bxs-car'></i>");
        CaracteristicaDTO carateristicaCreadaEjemplo3 = new CaracteristicaDTO(3L,"Pool", "<i class='bx bx-swim'></i>");
        Set<CaracteristicaDTO> caracteristicasCreadasEjemplo = new HashSet<>();
        caracteristicasCreadasEjemplo.add(carateristicaCreadaEjemplo1);
        caracteristicasCreadasEjemplo.add(carateristicaCreadaEjemplo2);
        caracteristicasCreadasEjemplo.add(carateristicaCreadaEjemplo3);

        productoPorCrear = new ProductoDTO("Hotel Melia", "Servicio all inclusive con vista al mar", categoriaEjemplo, ciudadEjemplo, imagenesEjemplo, caracteristicasEjemplo);
        productoCreado = new ProductoDTO(1L,"Hotel Melia", "Servicio all inclusive con vista al mar", categoriaCreadaEjemplo, ciudadCreadaEjemplo, imagenesCreadasEjemplo, caracteristicasCreadasEjemplo);
        productoPorActualizar = new ProductoDTO(1l,"Hotel Grand Meliá", "", null, null, null, null);
        productoActualizado = new ProductoDTO(1L, "Hotel Grand Meliá", "Servicio all inclusive con vista al mar", categoriaCreadaEjemplo, ciudadCreadaEjemplo, imagenesCreadasEjemplo, caracteristicasCreadasEjemplo);
    }

    @Test
    public void test01ObtenerTodosLosProductosEstaVacio() {
        assertEquals(0, productoService.consultarTodos().size());
    }

    @Test
    public void test02AgregarProducto() throws BadRequestException {
        ProductoDTO p = productoService.crear(productoPorCrear);
        assertEquals(productoCreado, p);
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
        productoService.crear(productoPorCrear);
        ProductoDTO dtoActualizado = productoService.actualizar(productoPorActualizar);
        assertEquals(productoActualizado, dtoActualizado);
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
        assertEquals(productoCreado, productoEncontrado);
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
    void consultarPorProducto() {
    }

    @Test
    void consultarPorCiudad() {
    }
}