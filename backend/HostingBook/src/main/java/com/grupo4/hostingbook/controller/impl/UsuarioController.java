package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.auth.AuthenticationRequest;
import com.grupo4.hostingbook.auth.AuthenticationResponse;
import com.grupo4.hostingbook.controller.IUsuarioController;
import com.grupo4.hostingbook.exceptions.*;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import com.grupo4.hostingbook.persistence.entites.Usuario;
import com.grupo4.hostingbook.service.IUsuarioService;
import com.grupo4.hostingbook.utils.JWTUtil;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
public class UsuarioController implements IUsuarioController {

    @Qualifier("UsuarioService")
    private final IUsuarioService usuarioService;
    private final AuthenticationManager authenticationManager;
    private final JWTUtil jwtTokenUtil;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final Logger logger = Logger.getLogger(UsuarioController.class);

    @Autowired
    public UsuarioController(IUsuarioService usuarioService, AuthenticationManager authenticationManager, JWTUtil jwtTokenUtil, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.usuarioService = usuarioService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    @ApiOperation(value = "Lista todas las usuarios")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success") })
    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> obtenerTodos() {
        List<UsuarioDTO> usuarios = usuarioService.consultarTodos();
        return ResponseEntity.ok(usuarios);
    }

    @Override
    @ApiOperation(value = "Crea un nueva usuario")
    @ApiResponses(value = { @ApiResponse(code = 201, message = "Created"),
                            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping("/signup")
    public ResponseEntity<?> crear(@RequestBody UsuarioDTO usuario) throws BadRequestException, ResourceNotFoundException {
        UsuarioDTO u = usuarioService.crear(usuario);
        UserDetails userDetails = new Usuario(u.getId(), u.getNombre(), u.getApellido(), u.getMail(), u.getContrasenia());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.status(HttpStatus.CREATED).body(new AuthenticationResponse(jwt));
    }

    @Override
    @ApiOperation(value = "Busca un usuario por ID")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> buscarPorId(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        UsuarioDTO usuario = usuarioService.buscarPorId(id);
        return ResponseEntity.ok(usuario);
    }

    @Override
    @ApiOperation(value = "Actualiza un usuario")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @PutMapping
    public ResponseEntity<UsuarioDTO> actualizar(@RequestBody UsuarioDTO usuario)
            throws BadRequestException, ResourceNotFoundException, NotImplementedException {
        UsuarioDTO usuarioActualizada = usuarioService.actualizar(usuario);
        return ResponseEntity.ok(usuarioActualizada);
    }

    @Override
    @ApiOperation(value = "Elimina un usuario")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        usuarioService.eliminar(id);
        return ResponseEntity.ok(String.format(Mensajes.ELIMINADO_CON_EXITO, "Usuario", id));
    }

    @Override
    @ApiOperation(value = "Busca los productos favoritos de un usuario por su ID")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/{id}/favoritos")
    public ResponseEntity<Set<ProductoDTO>> buscarFavoritosPorId(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        UsuarioDTO usuario = usuarioService.buscarPorId(id);
        return ResponseEntity.ok(usuario.getProductosFavoritos());
    }

    @Override
    @ApiOperation(value = "Inicio de sesión de un usuario")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 401, message = "Unauthorized: bad credentials")
    })
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws BadCredentialsException {
        logger.debug("------------ LOGIN ------------");
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
        final UserDetails userDetails = usuarioService.loadUserByUsername(authenticationRequest.getMail());
        logger.debug("Usuario Details: " + userDetails);
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        logger.debug("JWT: " + jwt);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}