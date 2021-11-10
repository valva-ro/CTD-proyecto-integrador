package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.CRUDController;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.CiudadDTO;
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
@RequestMapping("/ciudades")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
public class CiudadController implements CRUDController<CiudadDTO> {

    @Qualifier("CiudadService")
    private final CRUDService<CiudadDTO> ciudadService;

    @Autowired
    public CiudadController(CRUDService<CiudadDTO> ciudadService) {
        this.ciudadService = ciudadService;
    }

    @Override
    @ApiOperation(value = "Lista todas las ciudads")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success")
    })
    @GetMapping
    public ResponseEntity<List<CiudadDTO>> obtenerTodos() {
        List<CiudadDTO> ciudades = ciudadService.consultarTodos();
        return ResponseEntity.ok(ciudades);
    }

    @Override
    @ApiOperation(value = "Crea una nueva ciudad")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @PostMapping
    public ResponseEntity<CiudadDTO> crear(@RequestBody CiudadDTO ciudad) throws BadRequestException, ResourceNotFoundException {
        CiudadDTO ciudadNueva = ciudadService.crear(ciudad);
        return ResponseEntity.ok(ciudadNueva);
    }

    @Override
    @ApiOperation(value = "Busca una ciudad por ID")
    @ApiResponses(value = {
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @GetMapping("/{id}")
    public ResponseEntity<CiudadDTO> buscarPorId(@PathVariable Long id) throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }

    @Override
    @ApiOperation(value = "Actualiza una ciudad")
    @ApiResponses(value = {
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @PutMapping
    public ResponseEntity<CiudadDTO> actualizar(@RequestBody CiudadDTO ciudad) throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }

    @Override
    @ApiOperation(value = "Elimina una ciudad")
    @ApiResponses(value = {
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id) throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }
}
