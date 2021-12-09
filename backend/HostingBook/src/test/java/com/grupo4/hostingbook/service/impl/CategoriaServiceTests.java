package com.grupo4.hostingbook.service.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.RepeatedMailException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.CategoriaDTO;
import com.grupo4.hostingbook.service.CRUDService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class CategoriaServiceTests {

    @Autowired
    private CRUDService<CategoriaDTO> categoriaService;

    private final CategoriaDTO categoriaPorCrear = new CategoriaDTO("Hotel", "807.105 hoteles", "https://via.placeholder.com/300");
    private final CategoriaDTO categoriaCreada = new CategoriaDTO(1L, "Hotel", "807.105 hoteles", "https://via.placeholder.com/300");
    private final CategoriaDTO categoriaPorActualizar = new CategoriaDTO(1L, "", "900.000 hoteles", "");
    private final CategoriaDTO categoriaActualizada = new CategoriaDTO(1L, "Hotel", "900.000 hoteles", "https://via.placeholder.com/300");

    @Test
    public void test01ObtenerTodasLasCategoriasEstaVacio() {
        assertEquals(0, categoriaService.consultarTodos().size());
    }

    @Test
    public void test02AgregarCategoria() throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        CategoriaDTO c = categoriaService.crear(categoriaPorCrear);
        assertEquals(categoriaCreada, c);
    }

    @Test
    public void test03ObtenerTodasLasCategorias() throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        categoriaService.crear(categoriaPorCrear);
        assertNotEquals(0, categoriaService.consultarTodos().size());
    }

    @Test
    public void test04EliminarCategoriaPorId() throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        categoriaService.crear(categoriaPorCrear);
        assertNotEquals(0, categoriaService.consultarTodos().size());

        categoriaService.eliminar(1L);
        assertEquals(0, categoriaService.consultarTodos().size());
    }

    @Test
    public void test05NoSePuedeEliminarCategoriaPorIdSiEsMenorA1() {
        assertThrows(BadRequestException.class, () -> categoriaService.eliminar(0L));
    }

    @Test
    public void test06NoSePuedeEliminarCategoriaPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> categoriaService.eliminar(1L));
    }

    @Test
    public void test07ActualizarCategoriaExistente() throws BadRequestException, ResourceNotFoundException, NotImplementedException, RepeatedMailException {
        categoriaService.crear(categoriaPorCrear);
        CategoriaDTO dtoActualizado = categoriaService.actualizar(categoriaPorActualizar);
        assertEquals(categoriaActualizada, dtoActualizado);
    }

    @Test
    public void test08NoSePuedeActualizarCategoriaSinId() {
        assertThrows(BadRequestException.class, () -> categoriaService.actualizar(categoriaPorCrear));
    }

    @Test
    public void test09NoSePuedeActualizarCategoriaInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> categoriaService.actualizar(categoriaPorActualizar));
    }

    @Test
    @Transactional
    public void test10BuscarCategoriaPorIdExistente() throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        categoriaService.crear(categoriaPorCrear);
        CategoriaDTO categoriaEncontrada = categoriaService.buscarPorId(1L);
        assertEquals(categoriaCreada, categoriaEncontrada);
    }

    @Test
    public void test11BuscarCategoriaPorIdInexistente() {
        assertThrows(ResourceNotFoundException.class, () -> categoriaService.buscarPorId(1L));
    }

    @Test
    public void test12BuscarCategoriaPorIdInvalido() {
        assertThrows(BadRequestException.class, () -> categoriaService.buscarPorId(-1L));
    }


}
