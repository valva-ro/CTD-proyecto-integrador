package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.PoliticaDTO;
import com.grupo4.hostingbook.model.TipoPoliticaDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)

public class PoliticaServiceTests {
    @Autowired
    private PoliticaService politicaService;
    TipoPoliticaDTO tipoPoliticaCreada = new TipoPoliticaDTO(1L,"Politica prueba");
    PoliticaDTO politicaPorCrear= new PoliticaDTO("sasd",tipoPoliticaCreada);
    PoliticaDTO politicaCreada= new PoliticaDTO(1l,"sasd",tipoPoliticaCreada);
    PoliticaDTO politicaPorActualizar= new PoliticaDTO(1L,"dsa");
    PoliticaDTO politicaActualizada= new PoliticaDTO(1L,"dsa",tipoPoliticaCreada);
    TipoPoliticaDTO tipoPoliticaPorCrear= new TipoPoliticaDTO("Politica prueba");
    @Test
    public void test01ObtenerTodasLasCiudadesEstaVacio() {
        assertEquals(0, politicaService.consultarTodos().size());
    }
    @Test
    public void test02AgregarPolitica() throws BadRequestException, ResourceNotFoundException {
        politicaService.crearTipoPolitica(tipoPoliticaCreada);
        PoliticaDTO p = politicaService.crear(politicaPorCrear);
        assertEquals(politicaCreada, p);
    }

    @Test
    public void test03ObtenerTodasLasPoliticas() throws BadRequestException, ResourceNotFoundException {
        politicaService.crearTipoPolitica(tipoPoliticaCreada);
        politicaService.crear(politicaPorCrear);
        assertNotEquals(0, politicaService.consultarTodos().size());
    }

    @Test
    public void test04EliminarPoliticaPorId() throws BadRequestException, ResourceNotFoundException {
        politicaService.crearTipoPolitica(tipoPoliticaCreada);
        politicaService.crear(politicaPorCrear);
        assertNotEquals(0, politicaService.consultarTodos().size());

        politicaService.eliminar(1L);
        assertEquals(0, politicaService.consultarTodos().size());
    }

    @Test
    public void test05NoSePuedeEliminarPoliticaPorIdSiEsMenorA1() {
        assertThrows(BadRequestException.class, () -> politicaService.eliminar(0L));
    }

    @Test
    public void test06NoSePuedeEliminarPolitivaPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> politicaService.eliminar(1L));
    }

    @Test
    public void test07ActualizarPoliticaExistente() throws BadRequestException, ResourceNotFoundException {
        politicaService.crearTipoPolitica(tipoPoliticaCreada);
        politicaService.crear(politicaPorCrear);
        PoliticaDTO dtoActualizado = politicaService.actualizar(politicaPorActualizar);
        assertEquals(politicaActualizada, dtoActualizado);
    }

    @Test
    public void test08NoSePuedeActualizarPoliticaSinId() {
        assertThrows(BadRequestException.class, () -> politicaService.actualizar(politicaPorCrear));
    }

    @Test
    public void test09NoSePuedeActualizarPoliticaInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> politicaService.actualizar(politicaPorActualizar));
    }

    @Test
    @Transactional
    public void test10BuscarPoliticaPorIdExistente() throws BadRequestException, ResourceNotFoundException {
        politicaService.crearTipoPolitica(tipoPoliticaCreada);
        politicaService.crear(politicaPorCrear);
        PoliticaDTO politicaEncontrada = politicaService.buscarPorId(1L);
        assertEquals(politicaCreada, politicaEncontrada);
    }

    @Test
    public void test11BuscarPoliticaPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> politicaService.buscarPorId(1L));
    }

    @Test
    public void test12BuscarPoliticaPorIdInvalido() {
        assertThrows(BadRequestException.class, () -> politicaService.buscarPorId(-1L));
    }

}
