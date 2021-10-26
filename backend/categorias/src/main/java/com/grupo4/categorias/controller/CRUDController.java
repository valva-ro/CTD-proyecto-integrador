package com.grupo4.categorias.controller;

import com.grupo4.categorias.exceptions.BadRequestException;
import com.grupo4.categorias.exceptions.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.lang.module.ResolutionException;
import java.util.List;

@Controller
public interface CRUDController<T> {

    ResponseEntity<?> obtenerTodasLasCategorias() throws BadRequestException, ResourceNotFoundException;
    ResponseEntity<?> crearNuevaCategoria(@RequestBody T t) throws BadRequestException, ResourceNotFoundException;
    ResponseEntity<?> actualizarCategoria(@RequestBody T t) throws BadRequestException, ResourceNotFoundException;
    ResponseEntity<?> eliminarCategoria(@PathVariable Long t) throws BadRequestException, ResourceNotFoundException;
}
