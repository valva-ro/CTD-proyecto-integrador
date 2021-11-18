package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.IUsuarioController;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import com.grupo4.hostingbook.service.IUsuarioService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
public class UsuarioController implements IUsuarioController {

    @Qualifier("UsuarioService")
    private final IUsuarioService usuarioService;

    @Autowired
    public UsuarioController(IUsuarioService usuarioService) {
        this.usuarioService = usuarioService;
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
        return ResponseEntity.status(HttpStatus.CREATED).body(u);
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
}