package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.model.*;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.utils.JsonMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


import java.util.Set;



@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
@AutoConfigureMockMvc
public class ProductoControllerTests {

    @Autowired
    private MockMvc mockMvc;
    private ProductoDTO producto;
    private ProductoDTO productoCreado;

    @BeforeEach
    public void reset(){
        CategoriaDTO categoriaEjemplo = new CategoriaDTO("Hotel", "807.105 hoteles", "https://via.placeholder.com/300");
        CategoriaDTO categoriaCreadaEjemplo = new CategoriaDTO(1L,"Hotel", "807.105 hoteles", "https://via.placeholder.com/300");

        CiudadDTO ciudadEjemplo = new CiudadDTO("Manizales", "Colombia");
        CiudadDTO ciudadCreadaEjemplo = new CiudadDTO(1L,"Manizales", "Colombia");

        Set<ImagenDTO> imagenesEjemplo = Set.of(new ImagenDTO("Habitación doble", "https://via.placeholder.com/300"),new ImagenDTO("Baño", "https://via.placeholder.com/300"));
        Set<ImagenDTO> imagenesCreadasEjemplo = Set.of(new ImagenDTO(1L,"Habitación doble", "https://via.placeholder.com/300"),new ImagenDTO(2L,"Baño", "https://via.placeholder.com/300"));


        Set<CaracteristicaDTO> caracteristicasEjemplo = Set.of(new CaracteristicaDTO("WiFi","<i class='bx bx-wifi'></i>"),new CaracteristicaDTO("Parking","<i class='bx bxs-car'></i>"),new CaracteristicaDTO("Pool","<i class='bx bx-swim'></i>"));
        Set<CaracteristicaDTO> caracteristicasCreadasEjemplo = Set.of(new CaracteristicaDTO(1L,"WiFi", "<i class='bx bx-wifi'></i>"),new CaracteristicaDTO(2L,"Parking","<i class='bx bxs-car'></i>"), new CaracteristicaDTO(3L,"Pool", "<i class='bx bx-swim'></i>"));

        producto = new ProductoDTO("Hotel Melia", "Servicio all inclusive con vista al mar", categoriaEjemplo, ciudadEjemplo, imagenesEjemplo, caracteristicasEjemplo);
        productoCreado = new ProductoDTO(1L,"Hotel Melia", "Servicio all inclusive con vista al mar", categoriaCreadaEjemplo, ciudadCreadaEjemplo, imagenesCreadasEjemplo, caracteristicasCreadasEjemplo);

    }

    @Test
    public void test01obtenerTodosLosProductos() throws Exception {
        //Act
        mockMvc.perform(MockMvcRequestBuilders.get("/productos"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void test02crearProducto() throws Exception {
        //Act
        mockMvc.perform(MockMvcRequestBuilders.post("/productos")
                    .contentType(MediaType.APPLICATION_JSON)
                    .characterEncoding("utf-8")
                    .content(JsonMapper.mapObjectToJson(producto)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
    }

    @Test
    public void test03crearProductoConDatosInvalidos() throws Exception {
        //Arrange
        producto.setNombre(" ");
        //Act
        mockMvc.perform(MockMvcRequestBuilders.post("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(producto)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test04actualizarProducto() throws Exception{
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        ProductoDTO productoActualizado = productoCreado;
        productoActualizado.setNombre("Nuevo nombre");
        //Act
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(productoActualizado)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
    }

    @Test
    public void test06actualizarProductoSinId() throws Exception{
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        ProductoDTO productoActualizado = producto;
        productoActualizado.setNombre("Nuevo nombre");
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(producto)))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test07actualizarProductoConIdInvalido() throws Exception{
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        ProductoDTO productoActualizado = producto;
        productoActualizado.setId(-1L);
        productoActualizado.setNombre("Nuevo nombre");
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(producto)))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test08actualizarProductoConIdInexistente() throws Exception{
        //Arrange
        ProductoDTO productoActualizado = producto;
        productoActualizado.setId(1L);
        productoActualizado.setNombre("Nuevo nombre");
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(producto)))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void test09actualizarConStringVacio() throws Exception{
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson("")))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test10actualizarConStringLlenoDeEspacios() throws Exception{
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson("    ")))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test11eliminarConIdExistente() throws Exception{
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/productos/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void test12eliminarConIdInvalido() throws Exception {
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/productos/-1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test13eliminarConIdInexistente() throws Exception {
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/productos/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void test14obtenerProductosPorCategoria() throws Exception {
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/productos/getByCategoria")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content("Hotel"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void test15obtenerProductosPorCategoriaInexistente() throws Exception {
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/productos/getByCategoria")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content("Cabaña"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }


    @Test
    public void test16obtenerProductosPorCiudad() throws Exception {
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/productos/getByCiudad")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content("Manizales"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void test17obtenerProductosPorCiudadInexistente() throws Exception {
        //Arrange
        mockMvc.perform(MockMvcRequestBuilders
                .post("/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8")
                .content(JsonMapper.mapObjectToJson(producto)));
        //Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/productos/getByCiudad")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content("Mendoza"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }
}