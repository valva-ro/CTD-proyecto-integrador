package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.auth.AuthenticationRequest;
import com.grupo4.hostingbook.auth.AuthenticationResponse;
import com.grupo4.hostingbook.exceptions.GlobalExceptionsHandler;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.model.UsuarioDTO;
import com.grupo4.hostingbook.service.impl.UsuarioDetailsService;
import com.grupo4.hostingbook.service.impl.UsuarioService;
import com.grupo4.hostingbook.utils.JWTUtil;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Date;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*")
public class UsuarioDetailsController {

    private final UsuarioDetailsService usuarioDetailsService;
    private final UsuarioService usuarioService;
    private final AuthenticationManager authenticationManager;
    private final JWTUtil jwtTokenUtil;

    @Autowired
    public UsuarioDetailsController(UsuarioDetailsService usuarioDetailsService,
                                    AuthenticationManager authenticationManager, JWTUtil jwtTokenUtil, UsuarioService usuarioService) {
        this.usuarioDetailsService = usuarioDetailsService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.usuarioService = usuarioService;
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
            authenticationManager.authenticate(authentication);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(Mensajes.ERROR_CREDENCIALES_INVALIDAS);
        }
        final UserDetails userDetails = usuarioDetailsService.loadUserByUsername(authenticationRequest.getMail());
        final UsuarioDTO usuario = usuarioService.obtenerPorEmail(authenticationRequest.getMail());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt, usuario));
    }

    @ApiOperation(value = "Verifica token de un usuario")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Current session is valid"),
            @ApiResponse(code = 401, message = "Current session has expired"),
    })
    @GetMapping("/validateCurrentSession")
    public ResponseEntity<?> verificarToken(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        Date expiracion = jwtTokenUtil.extractExpiration(token);
        Date ahora = new Date();
        if (expiracion.after(ahora)) {
            return ResponseEntity.status(HttpStatus.OK).body("La sesión es válida");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("La sesión expiró");
        }
    }
}
