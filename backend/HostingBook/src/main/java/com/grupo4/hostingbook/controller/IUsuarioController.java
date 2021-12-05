package com.grupo4.hostingbook.controller;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.RepeatedMailException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Set;

public interface IUsuarioController extends CRUDController<UsuarioDTO> {
    ResponseEntity<Set<ProductoDTO>> buscarFavoritosPorId(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException;
    ResponseEntity<?> crear(@RequestBody UsuarioDTO usuario, HttpServletRequest request) throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException;
}
