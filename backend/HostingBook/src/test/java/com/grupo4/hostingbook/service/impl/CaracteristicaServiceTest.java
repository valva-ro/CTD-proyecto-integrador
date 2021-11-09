package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.CaracteristicaDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class CaracteristicaServiceTest {

    @Autowired
    private CaracteristicaService caracteristicaService;

    private final CaracteristicaDTO caracteristicaPorCrear = new CaracteristicaDTO("Wifi", "https://www.google.com/");
    private final CaracteristicaDTO caracteristicaCreada = new CaracteristicaDTO(1L, "Wifi", "https://www.google.com/");
    private final CaracteristicaDTO caracteristicaPorActualizar = new CaracteristicaDTO(1L, "Guaifai","");
    private final CaracteristicaDTO caracteristicaActualizada = new CaracteristicaDTO(1L, "Guaifai","https://www.google.com/");

    @Test
    public void test01ConsultarListaVacia() {
        assertEquals(0, caracteristicaService.consultarTodos().size());
    }

    @Test
    public void test02SAgregarCaracteristica() throws BadRequestException {
        assertEquals(caracteristicaService.crear(caracteristicaPorCrear), caracteristicaCreada);
    }

    @Test
    public void test03ObtenerTodasLasCaracteristicas() throws BadRequestException {
        caracteristicaService.crear(caracteristicaPorCrear);
        assertEquals(1, caracteristicaService.consultarTodos().size());
    }

    @Test
    public void test04EliminarCaracteristicaPorId() throws BadRequestException, ResourceNotFoundException {
        caracteristicaService.crear(caracteristicaPorCrear);
        assertEquals(1, caracteristicaService.consultarTodos().size());

        caracteristicaService.eliminar(1L);
        assertEquals(0, caracteristicaService.consultarTodos().size());
    }

    @Test
    public void test05NoSePuedeEliminarCaracteristicaPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> caracteristicaService.eliminar(1L));
    }

    @Test
    public void test06NoSePuedeEliminarCaracteristicaPorIdSiEsMenorA1() {
        assertThrows(BadRequestException.class, () -> caracteristicaService.eliminar(-2L));
    }

    @Test
    public void test07ActualizarCaracteristicaExistente() throws BadRequestException, ResourceNotFoundException {
        caracteristicaService.crear(caracteristicaPorCrear);
        CaracteristicaDTO caracteristicaDTO = caracteristicaService.actualizar(caracteristicaPorActualizar);
        assertEquals(caracteristicaActualizada, caracteristicaDTO);
    }

    @Test
    public void test08NoSePuedeActualizarCaracteristicaSinId() {
        assertThrows(BadRequestException.class, () -> caracteristicaService.actualizar(caracteristicaPorCrear));
    }

    @Test
    public void test09NoSePuedeActualizarCaracteristicaInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> caracteristicaService.actualizar(caracteristicaPorActualizar));
    }

    @Test
    @Transactional
    public void test10BuscarCaracteristicaPorIdExistente() throws BadRequestException, ResourceNotFoundException {
        caracteristicaService.crear(caracteristicaPorCrear);
        CaracteristicaDTO caracteristicaEncontrada = caracteristicaService.buscarPorId(1L);
        assertEquals(caracteristicaCreada, caracteristicaEncontrada);
    }

    @Test
    public void test11BuscarCaracteristicaPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> caracteristicaService.buscarPorId(1L));
    }

    @Test
    public void test12BuscarCaracteristicaPorIdInvalido() {
        assertThrows(BadRequestException.class, () -> caracteristicaService.buscarPorId(-1L));
    }
}