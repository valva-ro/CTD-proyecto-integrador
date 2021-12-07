package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.CRUDController;
import com.grupo4.hostingbook.exceptions.*;
import com.grupo4.hostingbook.model.ImagenDTO;
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
@RequestMapping("/imagenes")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*")
public class ImagenController implements CRUDController<ImagenDTO> {

    @Qualifier("ImagenService")
    private final CRUDService<ImagenDTO> imagenService;

    @Autowired
    public ImagenController(CRUDService<ImagenDTO> imagenService) {
        this.imagenService = imagenService;
    }

    @Override
    @ApiOperation(value = "Lista todas las imagenes")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @GetMapping
    public ResponseEntity<List<ImagenDTO>> obtenerTodos() throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }

    @Override
    @ApiOperation(value = "Crea una nueva imágen")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 400, message = "Bad Request")})
    @PostMapping
    public ResponseEntity<ImagenDTO> crear(@RequestBody ImagenDTO imagen) throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        ImagenDTO imagenNueva = imagenService.crear(imagen);
        return ResponseEntity.ok(imagenNueva);
    }

    @Override
    @ApiOperation(value = "Busca una imágen por ID")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @GetMapping("/{id}")
    public ResponseEntity<ImagenDTO> buscarPorId(@PathVariable Long id)
            throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }

    @Override
    @ApiOperation(value = "Actualiza una imágen")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 501, message = "Not implemented")})
    @PutMapping
    public ResponseEntity<ImagenDTO> actualizar(@RequestBody ImagenDTO imagen)
            throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }

    @Override
    @ApiOperation(value = "Elimina una imágen")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request"),
            @ApiResponse(code = 501, message = "Not implemented")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id)
            throws NotImplementedException {
        throw new NotImplementedException(Mensajes.ERROR_FUNCIONALIDAD_SIN_DESARROLLAR);
    }
}
