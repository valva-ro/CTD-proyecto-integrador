package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.RepeatedMailException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.CiudadDTO;
import com.grupo4.hostingbook.service.CRUDService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class CiudadServiceTests {

    @Autowired
    private CRUDService<CiudadDTO> ciudadService;

    private final CiudadDTO ciudadPorCrear = new CiudadDTO("Manizales", "Colombia",5.067, -75.517);
    private final CiudadDTO ciudadCreada = new CiudadDTO(1L, "Manizales", "Colombia",5.067, -75.517);
    private final CiudadDTO ciudadPorActualizar = new CiudadDTO(1L,"Pereira", "",4.8132, -75.6946);
    private final CiudadDTO ciudadActualizada = new CiudadDTO(1L, "Pereira", "Colombia", 4.8132,-75.6946);

    @Test
    public void test01ObtenerTodasLasCiudadesEstaVacio() {
        assertEquals(0, ciudadService.consultarTodos().size());
    }

    @Test
    public void test02AgregarCiudad() throws BadRequestException, ResourceNotFoundException, RepeatedMailException {
        CiudadDTO c = ciudadService.crear(ciudadPorCrear);
        assertEquals(ciudadCreada, c);
    }

    @Test
    public void test03ObtenerTodasLasCiudades() throws BadRequestException, ResourceNotFoundException, RepeatedMailException {
        ciudadService.crear(ciudadPorCrear);
        assertNotEquals(0, ciudadService.consultarTodos().size());
    }

    @Test
    public void test04EliminarCiudadPorId() throws BadRequestException, ResourceNotFoundException, RepeatedMailException {
        ciudadService.crear(ciudadPorCrear);
        assertNotEquals(0, ciudadService.consultarTodos().size());

        ciudadService.eliminar(1L);
        assertEquals(0, ciudadService.consultarTodos().size());
    }

    @Test
    public void test05NoSePuedeEliminarCiudadPorIdSiEsMenorA1() {
        assertThrows(BadRequestException.class, () -> ciudadService.eliminar(0L));
    }

    @Test
    public void test06NoSePuedeEliminarCiudadPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> ciudadService.eliminar(1L));
    }

    @Test
    public void test07ActualizarCiudadExistente() throws BadRequestException, ResourceNotFoundException, NotImplementedException, RepeatedMailException {
        ciudadService.crear(ciudadPorCrear);
        CiudadDTO dtoActualizado = ciudadService.actualizar(ciudadPorActualizar);
        assertEquals(ciudadActualizada, dtoActualizado);
    }

    @Test
    public void test08NoSePuedeActualizarCiudadSinId() {
        assertThrows(BadRequestException.class, () -> ciudadService.actualizar(ciudadPorCrear));
    }

    @Test
    public void test09NoSePuedeActualizarCiudadInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> ciudadService.actualizar(ciudadPorActualizar));
    }

    @Test
    @Transactional
    public void test10BuscarCiudadPorIdExistente() throws BadRequestException, ResourceNotFoundException, RepeatedMailException {
        ciudadService.crear(ciudadPorCrear);
        CiudadDTO ciudadEncontrada = ciudadService.buscarPorId(1L);
        assertEquals(ciudadCreada, ciudadEncontrada);
    }

    @Test
    public void test11BuscarCiudadPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> ciudadService.buscarPorId(1L));
    }

    @Test
    public void test12BuscarCiudadPorIdInvalido() {
        assertThrows(BadRequestException.class, () -> ciudadService.buscarPorId(-1L));
    }
}
