package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.CRUDController;
import com.grupo4.hostingbook.exceptions.*;
import com.grupo4.hostingbook.controller.IPuntuacionController;
import com.grupo4.hostingbook.model.PuntuacionDTO;
import com.grupo4.hostingbook.service.IPuntuacionService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/puntuaciones")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST }, allowedHeaders = "*")
public class PuntuacionController implements IPuntuacionController {

    @Qualifier("PuntuacionService")
    private final IPuntuacionService puntuacionService;

    @Autowired
    public PuntuacionController(IPuntuacionService puntuacionService) {
        this.puntuacionService = puntuacionService;
    }

    @Override
    @ApiOperation(value = "Lista todas las puntuacions")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success") })
    @GetMapping
    public ResponseEntity<List<PuntuacionDTO>> obtenerTodos() {
        List<PuntuacionDTO> puntuaciones = puntuacionService.consultarTodos();
        return ResponseEntity.ok(puntuaciones);
    }

    @Override
    @ApiOperation(value = "Crea una nueva puntuacion")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping
    public ResponseEntity<PuntuacionDTO> crear(@RequestBody PuntuacionDTO puntuacion) throws BadRequestException, ResourceNotFoundException, RepeatedMailException {
        PuntuacionDTO puntuacionNueva = puntuacionService.crear(puntuacion);
        return ResponseEntity.ok(puntuacionNueva);
    }

    @Override
    @ApiOperation(value = "Busca una puntuación por ID")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/{id}")
    public ResponseEntity<PuntuacionDTO> buscarPorId(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        PuntuacionDTO puntuacion = puntuacionService.buscarPorId(id);
        return ResponseEntity.ok(puntuacion);
    }

    @Override
    @ApiOperation(value = "Actualiza una puntuación")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @PutMapping
    public ResponseEntity<PuntuacionDTO> actualizar(@RequestBody PuntuacionDTO puntuacion)
            throws BadRequestException, ResourceNotFoundException, NotImplementedException {
        PuntuacionDTO puntuacionActualizada = puntuacionService.actualizar(puntuacion);
        return ResponseEntity.ok(puntuacionActualizada);
    }

    @Override
    @ApiOperation(value = "Elimina una puntuación")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        puntuacionService.eliminar(id);
        return ResponseEntity.ok(String.format(Mensajes.ELIMINADO_CON_EXITO, "Puntuacion", id));
    }

    @Override
    @GetMapping("/producto/{id}")
    public ResponseEntity<Set<PuntuacionDTO>> consultarPorProductoID(@PathVariable Long id) {
        return ResponseEntity.ok(puntuacionService.consultarPorProductoID(id));
    }
}