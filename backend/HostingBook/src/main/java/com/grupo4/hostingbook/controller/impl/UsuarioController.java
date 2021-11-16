package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.CRUDController;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.UsuarioDTO;
import com.grupo4.hostingbook.service.CRUDService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
public class UsuarioController implements CRUDController<UsuarioDTO> {

    @Qualifier("UsuarioService")
    private final CRUDService<UsuarioDTO> usuarioService;

    @Autowired
    public UsuarioController(CRUDService<UsuarioDTO> usuarioService) {
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
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping
    public ResponseEntity<UsuarioDTO> crear(@RequestBody UsuarioDTO usuario) throws BadRequestException, ResourceNotFoundException {
        UsuarioDTO usuarioNueva = usuarioService.crear(usuario);
        return ResponseEntity.ok(usuarioNueva);
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
    @ApiOperation(value = "Actualiza un puntuación")
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
    @ApiOperation(value = "Elimina un puntuación")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        usuarioService.eliminar(id);
        return ResponseEntity.ok(String.format(Mensajes.ELIMINADO_CON_EXITO, "Usuario", id));
    }

}