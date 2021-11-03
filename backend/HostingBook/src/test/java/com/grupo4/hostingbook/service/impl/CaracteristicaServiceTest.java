package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.CaracteristicaDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(properties = "spring.profiles.active:test")
class CaracteristicaServiceTest {

    @Autowired
    private  CaracteristicaService caracteristicaService;

    private final CaracteristicaDTO caracteristicaPorCrear= new CaracteristicaDTO("Wifi","https://www.google.com/");
    private final CaracteristicaDTO caracteristicaCreada= new CaracteristicaDTO(1L,"Wifi","https://www.google.com/");

    @Test
    public void test01ConsultarListaVacia() throws BadRequestException {
        assertEquals(caracteristicaService.consultarTodos().size(),0);
    }

    @Test
    public void test02SAgregarCaracteristica() throws BadRequestException {
        assertEquals(caracteristicaService.crear(caracteristicaPorCrear),caracteristicaCreada);
        }
    @Test
    public void test03ObtenerTodasLasCaracteristicas() throws BadRequestException {
        caracteristicaService.crear(caracteristicaPorCrear);
        assertEquals(1,caracteristicaService.consultarTodos().size());
    }
    @Test
    public void test04EliminarCaracteristicaPorId() throws BadRequestException, ResourceNotFoundException {
        caracteristicaService.crear(caracteristicaPorCrear);
        assertEquals(1,caracteristicaService.consultarTodos().size());

        caracteristicaService.eliminar(1L);
        assertEquals(0,caracteristicaService.consultarTodos().size());


    }
    @Test
    public void test05NoSePuedeEliminarCaracteristicaPorIdInexistente() throws BadRequestException, ResourceNotFoundException {
        assertThrows(BadRequestException.class,() -> caracteristicaService.eliminar(-2L));
    }
    @Test
    public void test06NoSePuedeEliminarCaracteristicaPorIdInexistente() throws BadRequestException, ResourceNotFoundException {
        assertThrows(ResourceNotFoundException.class,() -> caracteristicaService.eliminar(1L));
    }
    }