package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.CRUDController;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.PuntuacionDTO;
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
@RequestMapping("/puntuaciones")
public class PuntuacionController implements CRUDController<PuntuacionDTO> {

    @Qualifier("PuntuacionService")
    private final CRUDService<PuntuacionDTO> puntuacionService;

    @Autowired
    public PuntuacionController(CRUDService<PuntuacionDTO> puntuacionService) {
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
    public ResponseEntity<PuntuacionDTO> crear(@RequestBody PuntuacionDTO puntuacion) throws BadRequestException, ResourceNotFoundException {
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

}