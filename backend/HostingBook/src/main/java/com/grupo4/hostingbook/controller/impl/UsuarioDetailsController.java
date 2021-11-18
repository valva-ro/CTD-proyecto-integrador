package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.auth.AuthenticationRequest;
import com.grupo4.hostingbook.auth.AuthenticationResponse;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.service.impl.UsuarioDetailsService;
import com.grupo4.hostingbook.utils.JWTUtil;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;

@RestController
public class UsuarioDetailsController {

    private final UsuarioDetailsService usuarioDetailsService;
    private final AuthenticationManager authenticationManager;
    private final JWTUtil jwtTokenUtil;
    private final Logger logger = Logger.getLogger(UsuarioController.class);

    @Autowired
    public UsuarioDetailsController(UsuarioDetailsService usuarioDetailsService, AuthenticationManager authenticationManager, JWTUtil jwtTokenUtil) {
        this.usuarioDetailsService = usuarioDetailsService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @ApiOperation(value = "Inicio de sesión de un usuario")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 401, message = "Unauthorized: bad credentials")
    })
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws BadCredentialsException {
        try {
            Authentication authentication = new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getMail(),
                    authenticationRequest.getContrasenia(),
                    new ArrayList<>()
            );
            logger.debug("UsernamePasswordAuthenticationToken: " + authentication);
            Authentication auth = authenticationManager.authenticate(authentication); // acá se lanza la excepcion
            logger.debug("Authentication: " + auth);
        } catch(BadCredentialsException e) {
            logger.debug("Bad Credentials: " + Arrays.toString(e.getStackTrace()));
            throw new BadCredentialsException(Mensajes.ERROR_CREDENCIALES_INVALIDAS);
        }
        final UserDetails userDetails = usuarioDetailsService.loadUserByUsername(authenticationRequest.getMail());
        logger.debug("Usuario Details: " + userDetails);
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        logger.debug("JWT: " + jwt);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
