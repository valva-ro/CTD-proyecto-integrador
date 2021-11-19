package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.model.CiudadDTO;
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

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(properties = "spring.profiles.active:test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
@AutoConfigureMockMvc
public class CiudadControllerTests {

    @Autowired
    private MockMvc mockMvc;
    private CiudadDTO ciudad;

    @BeforeEach
    public void reset(){
        ciudad = new CiudadDTO( "Capital Federal", "Argentina",-34.6131,-58.3772);
    }

    @Test
    public void test01ObtenerTodasLasCiudades() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/ciudades"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void test02CrearCiudad() throws Exception {
        CiudadDTO ciudadEsperada = ciudad;
        ciudadEsperada.setId(1L);

        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.post("/ciudades")
                    .contentType(MediaType.APPLICATION_JSON)
                    .characterEncoding("utf-8")
                    .content(JsonMapper.mapObjectToJson(ciudad)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        assertEquals(JsonMapper.mapObjectToJson(ciudadEsperada), response.getResponse().getContentAsString());
    }

    @Test
    public void test03NoSePuedeCrearCiudadSinNombre() throws Exception {
        ciudad.setNombre(null);
        mockMvc.perform(MockMvcRequestBuilders.post("/ciudades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(ciudad)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test04NoSePuedeCrearCiudadSinNombre() throws Exception {
        ciudad.setNombre(" ");
        mockMvc.perform(MockMvcRequestBuilders.post("/ciudades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(ciudad)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test05NoSePuedeCrearCiudadSinNombre() throws Exception {
        ciudad.setNombre("");
        mockMvc.perform(MockMvcRequestBuilders.post("/ciudades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(ciudad)))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    public void test06ActualizarCiudadNoEstaImplementado() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/ciudades")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(JsonMapper.mapObjectToJson(ciudad)))
                .andExpect(MockMvcResultMatchers.status().isNotImplemented());
    }

    @Test
    public void test07EliminarCiudadNoEstaImplementado() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/ciudades/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isNotImplemented());
    }

    @Test
    public void test08BuscarCiudadPorIDNoEstaImplementado() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/ciudades/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8"))
                .andExpect(MockMvcResultMatchers.status().isNotImplemented());
    }
}