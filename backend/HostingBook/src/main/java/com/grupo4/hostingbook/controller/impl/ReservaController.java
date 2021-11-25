package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.IReservaController;
import com.grupo4.hostingbook.exceptions.*;
import com.grupo4.hostingbook.model.ReservaDTO;
import com.grupo4.hostingbook.service.IReservaService;
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
@RequestMapping("/reservas")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST }, allowedHeaders = "*")
public class ReservaController implements IReservaController {

    @Qualifier("ReservaService")
    private final IReservaService reservaService;

    @Autowired
    public ReservaController(IReservaService reservaService) {
        this.reservaService = reservaService;
    }

    @Override
    @ApiOperation(value = "Lista todas las reservas")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @GetMapping
    public ResponseEntity<List<ReservaDTO>> obtenerTodos() {
        List<ReservaDTO> reservas = reservaService.consultarTodos();
        return ResponseEntity.ok(reservas);
    }

    @Override
    @ApiOperation(value = "Crea una nueva reserva")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Created"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @PostMapping
    public ResponseEntity<ReservaDTO> crear(@RequestBody ReservaDTO reserva) throws BadRequestException, ResourceNotFoundException, RepeatedMailException {
        ReservaDTO reservaNueva = reservaService.crear(reserva);
        return ResponseEntity.status(HttpStatus.CREATED).body(reservaNueva);
    }

    //metodos aun sin implementar -  NO los pedia
    @Override
    @ApiOperation(value = "Busca una reserva por ID")
    @ApiResponses(value = {
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @GetMapping("/{id}")
    public ResponseEntity<ReservaDTO> buscarPorId(@PathVariable Long id) throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }

    @Override
    @ApiOperation(value = "Actualiza una reserva")
    @ApiResponses(value = {
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @PutMapping
    public ResponseEntity<ReservaDTO> actualizar(@RequestBody ReservaDTO reserva) throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }

    @Override
    @ApiOperation(value = "Elimina una reserva")
    @ApiResponses(value = {
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id) throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }
    /*hasta acá*/

    @Override
    @ApiOperation(value = "Lista todas las reservas según id de producto especificado")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @GetMapping("/producto/{id}")
    public ResponseEntity<?> obtenerPorIdProducto(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        Set<ReservaDTO> reservas = reservaService.consultarPorIdProducto(id);
        return ResponseEntity.ok(reservas);
    }
}