package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.model.CategoriaDTO;
import com.grupo4.hostingbook.utils.JsonMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
@AutoConfigureMockMvc
public class CategoriaControllerTests {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private CategoriaController categoriaController;
    private CategoriaDTO categoria;

    @BeforeEach
    public void reset(){
        categoria = new CategoriaDTO("Hoteles", "Esta es la descripcion de hotel", "www.imagenhotel.com/imagen");
    }

    @Test
    public void test01obtenerTodasLasCategorias() throws Exception {
        //Act
        mockMvc.perform(MockMvcRequestBuilders.get("/categorias"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void test02crearCategoria() throws Exception {
        //Arrange
        CategoriaDTO categoriaEsperada = categoria;
        categoriaEsperada.setId(1L);
        //Act
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.post("/categorias")
                    .contentType(MediaType.APPLICATION_JSON)
                    .characterEncoding("utf-8")
                    .content(JsonMapper.mapObjectToJson(categoria)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        //Assert
        assertEquals(JsonMapper.mapObjectToJson(categoriaEsperada), response.getResponse().getContentAsString());
    }

    @Test
    public void test03crearCategoriaConDatosInvalidos() throws Exception {
        //Arrange
        categoria.setTitulo(" ");
        //Act
        mockMvc.perform(MockMvcRequestBuilders.post("/categorias")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(categoria)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test04actualizarCategoria() throws Exception{
        //Arrange
        categoriaController.crear(categoria);
        CategoriaDTO categoriaActualizada = categoria;
        categoriaActualizada.setId(1L);
        categoriaActualizada.setTitulo("Nuevo titulo");
        //Act
        MvcResult response =mockMvc.perform(MockMvcRequestBuilders
                        .put("/categorias")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(categoria)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        //Assert
        assertEquals(JsonMapper.mapObjectToJson(categoriaActualizada), response.getResponse().getContentAsString());
    }

    @Test
    public void test06actualizarCategoriaSinId() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/categorias")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(categoria)))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test07actualizarCategoriaConIdInvalido() throws Exception{
        categoria.setId(-1L);
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/categorias")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(categoria)))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test08actualizarCategoriaConIdInexistente() throws Exception{
        categoria.setId(1L);
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/categorias")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(categoria)))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void test09actualizarConStringVacio() throws Exception{
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/categorias")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson("")))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test10actualizarConStringLlenoDeEspacios() throws Exception{
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/categorias")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson("    ")))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test11eliminarConIdExistente() throws Exception{
        categoriaController.crear(categoria);
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/categorias/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void test12eliminarConIdInvalido() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/categorias/-1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test13eliminarConIdInexistente() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/categorias/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void test14buscarPorIdInexistente() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/categorias/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void test14buscarPorIdInvalido() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/categorias/-1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    @Transactional
    public void test14buscarPorIdExistente() throws Exception {
        categoriaController.crear(categoria);
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders
                        .get("/categorias/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        CategoriaDTO respuesta = JsonMapper.mapJsonToObject(response.getResponse().getContentAsString(), CategoriaDTO.class);
        assertNotNull(respuesta);
    }
}