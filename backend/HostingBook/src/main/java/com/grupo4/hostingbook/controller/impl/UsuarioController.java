package com.grupo4.hostingbook.controller.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.controller.IUsuarioController;
import com.grupo4.hostingbook.event.OnRegistrationCompleteEvent;
import com.grupo4.hostingbook.exceptions.*;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import com.grupo4.hostingbook.persistence.entites.Usuario;
import com.grupo4.hostingbook.persistence.entites.VerificationToken;
import com.grupo4.hostingbook.service.IUsuarioService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Calendar;
import java.util.List;
import java.util.Locale;
import java.util.Set;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*")
public class UsuarioController implements IUsuarioController {

    @Qualifier("UsuarioService")
    private final IUsuarioService usuarioService;
    private final ApplicationEventPublisher eventPublisher;
    private final ObjectMapper mapper;

    @Autowired
    public UsuarioController(IUsuarioService usuarioService, ApplicationEventPublisher eventPublisher, ObjectMapper mapper) {
        this.usuarioService = usuarioService;
        this.eventPublisher = eventPublisher;
        this.mapper = mapper;
    }

    @Override
    @ApiOperation(value = "Lista todos los usuarios")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success")})
    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> obtenerTodos() {
        List<UsuarioDTO> usuarios = usuarioService.consultarTodos();
        return ResponseEntity.ok(usuarios);
    }

    @Override
    @ApiOperation(value = "Crea un nuevo usuario")
    @ApiResponses(value = { @ApiResponse(code = 201, message = "Created"),
            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping
    public ResponseEntity<?> crear(@RequestBody UsuarioDTO usuario) throws RepeatedMailException, BadRequestException, ResourceNotFoundException, 
            NotImplementedException {
        final UsuarioDTO registrado = usuarioService.crear(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(registrado);
    }

    @Override
    @ApiOperation(value = "Crea un nuevo usuario y envía un mail de confirmación de cuenta")
    @ApiResponses(value = { @ApiResponse(code = 201, message = "Created"),
                            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping("/signup")
    public ResponseEntity<?> crear(@RequestBody UsuarioDTO usuario, HttpServletRequest request) throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        final UsuarioDTO registrado = usuarioService.crear(usuario);
        final Locale locale = request.getLocale();
        final String appUrl = request.getContextPath();
        eventPublisher.publishEvent(new OnRegistrationCompleteEvent(registrado, locale, appUrl));
        return ResponseEntity.status(HttpStatus.CREATED).body(registrado);
    }

    @Override
    @ApiOperation(value = "Busca un usuario por ID")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request")})
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> buscarPorId(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        UsuarioDTO usuario = usuarioService.buscarPorId(id);
        return ResponseEntity.ok(usuario);
    }

    @Override
    @ApiOperation(value = "Actualiza un usuario")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"), @ApiResponse(code = 400, message = "Bad Request")})
    @PutMapping
    public ResponseEntity<UsuarioDTO> actualizar(@RequestBody UsuarioDTO usuario)
            throws BadRequestException, ResourceNotFoundException, NotImplementedException {
        UsuarioDTO usuarioActualizada = usuarioService.actualizar(usuario);
        return ResponseEntity.ok(usuarioActualizada);
    }

    @Override
    @ApiOperation(value = "Elimina un usuario")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"), @ApiResponse(code = 400, message = "Bad Request")})
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        usuarioService.eliminar(id);
        return ResponseEntity.ok(String.format(Mensajes.ELIMINADO_CON_EXITO, "Usuario", id));
    }

    @Override
    @ApiOperation(value = "Busca los productos favoritos de un usuario por su ID")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"), @ApiResponse(code = 400, message = "Bad Request")})
    @GetMapping("/{id}/favoritos")
    public ResponseEntity<Set<ProductoDTO>> buscarFavoritosPorId(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        UsuarioDTO usuario = usuarioService.buscarPorId(id);
        return ResponseEntity.ok(usuario.getProductosFavoritos());
    }

    @GetMapping("/confirmarRegistro")
    public ResponseEntity confirmRegistration(@RequestParam("token") String token) throws NotImplementedException, BadRequestException, ResourceNotFoundException {
        VerificationToken verificationToken = usuarioService.getVerificationToken(token);
        Usuario usuario = verificationToken.getUsuario();
        Calendar cal = Calendar.getInstance();

        if (verificationToken == null) {
            // TODO throw token invalido
        }
        if ((verificationToken.getExpiracion().getTime() - cal.getTime().getTime()) <= 0) {
            // TODO throw token expirado
        }

        usuario.setCuentaValidada(true);
        usuarioService.actualizar(mapper.convertValue(usuario, UsuarioDTO.class));
        return ResponseEntity.ok(usuario);
    }
}