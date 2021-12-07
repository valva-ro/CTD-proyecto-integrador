package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.CRUDController;
import com.grupo4.hostingbook.exceptions.*;
import com.grupo4.hostingbook.model.PoliticaDTO;
import com.grupo4.hostingbook.service.CRUDService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/politicas")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*")
public class PoliticaController implements CRUDController<PoliticaDTO> {

    @Qualifier
    private final CRUDService<PoliticaDTO> politicaService;

    public PoliticaController(CRUDService<PoliticaDTO> politicaService) {
        this.politicaService = politicaService;
    }

    @Override
    @ApiOperation(value = "Lista todas las politicas")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success")
    })
    @GetMapping
    public ResponseEntity<?> obtenerTodos() throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }

    @Override
    @ApiOperation(value = "Crea una nueva política")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @PostMapping
    public ResponseEntity<?> crear(PoliticaDTO politica) throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        PoliticaDTO politicaNueva = politicaService.crear(politica);
        return ResponseEntity.ok(politicaNueva);
    }

    @Override
    @ApiOperation(value = "Busca una política por ID")
    @ApiResponses(value = {
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(Long id) throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }

    @Override
    @ApiOperation(value = "Actualiza una política")
    @ApiResponses(value = {
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @PutMapping
    public ResponseEntity<?> actualizar(PoliticaDTO politicaDTO) throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }


    @Override
    @ApiOperation(value = "Elimina una política")
    @ApiResponses(value = {
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar(Long t) throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }
}
