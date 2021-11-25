package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.model.*;
import com.grupo4.hostingbook.service.impl.CaracteristicaService;
import com.grupo4.hostingbook.service.impl.CategoriaService;
import com.grupo4.hostingbook.service.impl.CiudadService;
import com.grupo4.hostingbook.service.impl.ImagenService;
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

import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
@AutoConfigureMockMvc
public class ProductoControllerTests {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ProductoController productoController;
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
    public void reset() throws BadRequestException {
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

        productoPorCrear = new ProductoDTO("Hotel Melia", "Servicio all inclusive con vista al mar", 12, categoriaID, ciudadID, imagenesIDs, caracteristicasIDs);
        productoPorActualizar = new ProductoDTO(1L,"Hotel Grand Melia", "", 10, null, null, null, null, null);
    }

    @Test
    public void test01obtenerTodosLosProductos() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/productos"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    @Transactional
    public void test02crearProducto() throws Exception {
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.post("/productos")
                    .contentType(MediaType.APPLICATION_JSON)
                    .characterEncoding("utf-8")
                    .content(JsonMapper.mapObjectToJson(productoPorCrear)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        ProductoDTO respuesta = JsonMapper.mapJsonToObject(response.getResponse().getContentAsString(), ProductoDTO.class);
        assertNotNull(respuesta.getId());
    }

    @Test
    public void test03crearProductoConDatosInvalidos() throws Exception {
        productoPorCrear.setNombre(" ");

        mockMvc.perform(MockMvcRequestBuilders.post("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(productoPorCrear)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    @Transactional
    public void test04actualizarProducto() throws Exception{
        productoController.crear(productoPorCrear);

        MvcResult response = mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(productoPorActualizar)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();

        ProductoDTO respuesta = JsonMapper.mapJsonToObject(response.getResponse().getContentAsString(), ProductoDTO.class);
        assertEquals(productoPorActualizar.getNombre(), respuesta.getNombre());
    }

    @Test
    public void test06actualizarProductoSinId() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(productoPorCrear)))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test07actualizarProductoConIdInvalido() throws Exception{
        ProductoDTO productoActualizado = productoPorCrear;
        productoActualizado.setId(-1L);

        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(productoPorCrear)))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test08actualizarProductoConIdInexistente() throws Exception{
        ProductoDTO productoActualizado = productoPorCrear;
        productoActualizado.setId(1L);

        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(productoPorCrear)))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void test09actualizarConStringVacio() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson("")))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test10actualizarConStringLlenoDeEspacios() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/productos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson("    ")))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    @Transactional
    public void test11eliminarConIdExistente() throws Exception{
        productoController.crear(productoPorCrear);

        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/productos/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void test12eliminarConIdInvalido() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/productos/-1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test13eliminarConIdInexistente() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/productos/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    @Transactional
    public void test14obtenerProductosPorCategoria() throws Exception {
        productoController.crear(productoPorCrear);

        mockMvc.perform(MockMvcRequestBuilders.get("/productos/categoria")
                .param("titulo", "Hotel")
                .contentType(MediaType.APPLICATION_JSON)
                .characterEncoding("utf-8"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    @Transactional
    public void test15obtenerProductosPorCategoriaInexistente() throws Exception {
        productoController.crear(productoPorCrear);

        mockMvc.perform(MockMvcRequestBuilders.get("/productos/categoria")
                        .param("titulo", "Cabaña")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    @Transactional
    public void test16obtenerProductosPorCiudad() throws Exception {
        productoController.crear(productoPorCrear);

        mockMvc.perform(MockMvcRequestBuilders.get("/productos/ciudad")
                        .param("nombre", "Manizales")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    @Transactional
    public void test17obtenerProductosPorCiudadInexistente() throws Exception {
        productoController.crear(productoPorCrear);

        mockMvc.perform(MockMvcRequestBuilders.get("/productos/ciudad")
                        .param("nombre", "Buenos Aires")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    @Transactional
    public void test18buscarPorIdExistente() throws Exception {
        productoController.crear(productoPorCrear);

        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.get("/productos/1")
                        .param("nombre", "Buenos Aires")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        ProductoDTO respuesta = JsonMapper.mapJsonToObject(response.getResponse().getContentAsString(), ProductoDTO.class);
        assertNotNull(respuesta);
    }

    @Test
    public void test19buscarPorIdInexistente() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/productos/1")
                        .param("nombre", "Buenos Aires")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void test20buscarPorIdInvalido() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/productos/-1")
                        .param("nombre", "Buenos Aires")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

}