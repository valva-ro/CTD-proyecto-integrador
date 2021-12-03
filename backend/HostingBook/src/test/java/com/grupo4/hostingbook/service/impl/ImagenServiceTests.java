package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.RepeatedMailException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ImagenDTO;
import com.grupo4.hostingbook.service.CRUDService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class ImagenServiceTests {

    @Autowired
    private CRUDService<ImagenDTO> imagenService;

    private final ImagenDTO imagenPorCrear = new ImagenDTO("Cocina", "https://via.placeholder.com/300");
    private final ImagenDTO imagenCreada = new ImagenDTO(1L, "Cocina", "https://via.placeholder.com/300");
    private final ImagenDTO imagenPorActualizar = new ImagenDTO(1L,"", "https://via.placeholder.com/600");
    private final ImagenDTO imagenActualizada = new ImagenDTO(1L,"Cocina","https://via.placeholder.com/600");

    @Test
    public void test01ObtenerTodasLasImagenesEstaVacio() {
        assertEquals(0, imagenService.consultarTodos().size());
    }

    @Test
    public void test02AgregarImagen() throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        ImagenDTO i = imagenService.crear(imagenPorCrear);
        assertEquals(imagenCreada, i);
    }

    @Test
    public void test03ObtenerTodasLasImagenes() throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        imagenService.crear(imagenPorCrear);
        assertNotEquals(0, imagenService.consultarTodos().size());
    }

    @Test
    public void test04EliminarImagenPorId() throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        imagenService.crear(imagenPorCrear);
        assertNotEquals(0, imagenService.consultarTodos().size());

        imagenService.eliminar(1L);
        assertEquals(0, imagenService.consultarTodos().size());
    }

    @Test
    public void test05NoSePuedeEliminarImagenPorIdSiEsMenorA1() {
        assertThrows(BadRequestException.class, () -> imagenService.eliminar(0L));
    }

    @Test
    public void test06NoSePuedeEliminarImagenPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> imagenService.eliminar(5L));
    }

    @Test
    public void test07ActualizarImagenExistente() throws BadRequestException, ResourceNotFoundException, NotImplementedException, RepeatedMailException {
        imagenService.crear(imagenPorCrear);
        ImagenDTO dtoActualizado = imagenService.actualizar(imagenPorActualizar);
        assertEquals(imagenActualizada, dtoActualizado);
    }

    @Test
    public void test08NoSePuedeActualizarImagenSinId() {
        assertThrows(BadRequestException.class, () -> imagenService.actualizar(imagenPorCrear));
    }

    @Test
    public void test09NoSePuedeActualizarImagenInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> imagenService.actualizar(imagenPorActualizar));
    }

    @Test
    @Transactional
    public void test10BuscarImagenPorIdExistente() throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        imagenService.crear(imagenPorCrear);
        ImagenDTO imagenEncontrada = imagenService.buscarPorId(1L);
        assertEquals(imagenCreada, imagenEncontrada);
    }

    @Test
    public void test11BuscarImagenPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> imagenService.buscarPorId(5L));
    }

    @Test
    public void test12BuscarImagenPorIdInvalido() {
        assertThrows(BadRequestException.class, () -> imagenService.buscarPorId(-1L));
    }
}
