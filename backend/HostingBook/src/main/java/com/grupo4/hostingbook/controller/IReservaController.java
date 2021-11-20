package com.grupo4.hostingbook.controller;


import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ReservaDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public interface IReservaController extends CRUDController<ReservaDTO> {

    ResponseEntity<?> obtenerPorIdProducto(@RequestBody Long idProducto) throws BadRequestException, ResourceNotFoundException;

}
