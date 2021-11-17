package com.grupo4.hostingbook.controller;

import com.grupo4.hostingbook.auth.AuthenticationRequest;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Set;

public interface IUsuarioController extends CRUDController<UsuarioDTO> {
    ResponseEntity<Set<ProductoDTO>> buscarFavoritosPorId(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException;
    ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws BadCredentialsException;
}
