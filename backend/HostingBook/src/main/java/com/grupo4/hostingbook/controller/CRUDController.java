package com.grupo4.hostingbook.controller;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.RepeatedMailException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public interface CRUDController<T> {
    ResponseEntity<?> obtenerTodos() throws BadRequestException, ResourceNotFoundException;

    ResponseEntity<?> crear(@RequestBody T t) throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException;

    ResponseEntity<?> buscarPorId(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException, NotImplementedException;

    ResponseEntity<?> actualizar(@RequestBody T t) throws BadRequestException, ResourceNotFoundException, NotImplementedException;

    ResponseEntity<?> eliminar(@PathVariable Long t) throws BadRequestException, ResourceNotFoundException, NotImplementedException;
}
