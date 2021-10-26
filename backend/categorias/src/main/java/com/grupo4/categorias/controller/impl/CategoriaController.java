package com.grupo4.categorias.controller.impl;

import com.grupo4.categorias.controller.CRUDController;
import com.grupo4.categorias.exceptions.BadRequestException;
import com.grupo4.categorias.exceptions.Mensajes;
import com.grupo4.categorias.exceptions.ResourceNotFoundException;
import com.grupo4.categorias.model.CategoriaDTO;
import com.grupo4.categorias.service.CRUDService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController implements CRUDController<CategoriaDTO> {

    //TODO realizar documentación en Swagger, se dejan listas notations de operación y respuestas

    @Qualifier("categoriaService")
    private final CRUDService<CategoriaDTO> categoriaService;

    @Autowired
    public CategoriaController(CRUDService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @Override
    @ApiOperation(value = "Lista todas las categorias")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @GetMapping("/todas")
    public ResponseEntity<List<CategoriaDTO>> obtenerTodasLasCategorias() {
        List<CategoriaDTO> categoria = categoriaService.consultarTodos();
        return ResponseEntity.ok(categoria);
    }

    @Override
    @ApiOperation(value = "Crea una nueva categoria")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @PostMapping("/crear")
    public ResponseEntity<CategoriaDTO> crearNuevaCategoria(@RequestBody CategoriaDTO categoria) throws BadRequestException {
        CategoriaDTO categoriaNueva = categoriaService.crear(categoria);
        return ResponseEntity.ok(categoriaNueva);
    }

    @Override
    @ApiOperation(value = "Actualiza una categoría")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @PutMapping("/actualizar")
    public ResponseEntity<CategoriaDTO> actualizarCategoria(@RequestBody CategoriaDTO categoria) throws BadRequestException, ResourceNotFoundException {
        CategoriaDTO categoriaActualizada = categoriaService.actualizar(categoria);
        return ResponseEntity.ok(categoriaActualizada);
    }

    @Override
    @ApiOperation(value = "Elimina una categoría")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        categoriaService.eliminar(id);
        return ResponseEntity.ok(String.format(Mensajes.ELIMINADO_CON_EXITO,"Categoria", id));
    }

}
