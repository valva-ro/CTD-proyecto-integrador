package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.CRUDController;
import com.grupo4.hostingbook.exceptions.*;
import com.grupo4.hostingbook.model.CaracteristicaDTO;
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
@RequestMapping("/caracteristicas")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST }, allowedHeaders = "*")
public class CaracteristicaController implements CRUDController<CaracteristicaDTO> {

    @Qualifier("CaracteristicaService")
    private final CRUDService<CaracteristicaDTO> caracteristicaService;

    @Autowired
    public CaracteristicaController(CRUDService<CaracteristicaDTO> caracteristicaService) {
        this.caracteristicaService = caracteristicaService;
    }

    @Override
    @ApiOperation(value = "Lista todas las caracteristicas")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success") })
    @GetMapping
    public ResponseEntity<List<CaracteristicaDTO>> obtenerTodos() {
        List<CaracteristicaDTO> caracteristicas = caracteristicaService.consultarTodos();
        return ResponseEntity.ok(caracteristicas);
    }

    @Override
    @ApiOperation(value = "Crea una nueva característica")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 400, message = "Bad Request") })
    @PostMapping
    public ResponseEntity<CaracteristicaDTO> crear(@RequestBody CaracteristicaDTO caracteristica) throws BadRequestException, ResourceNotFoundException, RepeatedMailException {
        CaracteristicaDTO caracteristicaNueva = caracteristicaService.crear(caracteristica);
        return ResponseEntity.ok(caracteristicaNueva);
    }

    @Override
    @ApiOperation(value = "Busca una característica por ID")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @GetMapping("/{id}")
    public ResponseEntity<CaracteristicaDTO> buscarPorId(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        CaracteristicaDTO caracteristica = caracteristicaService.buscarPorId(id);
        return ResponseEntity.ok(caracteristica);
    }

    @Override
    @ApiOperation(value = "Actualiza una característica")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @PutMapping
    public ResponseEntity<CaracteristicaDTO> actualizar(@RequestBody CaracteristicaDTO caracteristica)
            throws BadRequestException, ResourceNotFoundException, NotImplementedException {
        CaracteristicaDTO caracteristicaActualizada = caracteristicaService.actualizar(caracteristica);
        return ResponseEntity.ok(caracteristicaActualizada);
    }

    @Override
    @ApiOperation(value = "Elimina una característica")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
                            @ApiResponse(code = 404, message = "Not found"), 
                            @ApiResponse(code = 400, message = "Bad Request") })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id)
            throws BadRequestException, ResourceNotFoundException {
        caracteristicaService.eliminar(id);
        return ResponseEntity.ok(String.format(Mensajes.ELIMINADO_CON_EXITO, "Caracteristica", id));
    }

}