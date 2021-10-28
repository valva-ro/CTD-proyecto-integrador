package com.grupo4.categorias.controller;

import com.grupo4.categorias.exceptions.BadRequestException;
import com.grupo4.categorias.exceptions.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public interface CRUDController<T> {
    ResponseEntity<?> obtenerTodos() throws BadRequestException, ResourceNotFoundException;
    ResponseEntity<?> crear(@RequestBody T t) throws BadRequestException, ResourceNotFoundException;
    ResponseEntity<?> actualizar(@RequestBody T t) throws BadRequestException, ResourceNotFoundException;
    ResponseEntity<?> eliminar(@PathVariable Long t) throws BadRequestException, ResourceNotFoundException;
}
