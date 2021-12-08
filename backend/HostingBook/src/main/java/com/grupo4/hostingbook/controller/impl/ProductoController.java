package com.grupo4.hostingbook.controller.impl;

import com.grupo4.hostingbook.controller.IProductoController;
import com.grupo4.hostingbook.exceptions.*;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.service.IProductoService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*")
public class ProductoController implements IProductoController {

    @Qualifier("ProductoService")
    private final IProductoService productoService;

    @Autowired
    public ProductoController(IProductoService productoService) {
        this.productoService = productoService;
    }

    @Override
    @ApiOperation(value = "Lista todos los productos")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success")
    })
    @GetMapping
    public ResponseEntity<List<ProductoDTO>> obtenerTodos() {
        List<ProductoDTO> productos = productoService.consultarTodos();
        return ResponseEntity.ok(productos);
    }

    @Override
    @ApiOperation(value = "Crea un nuevo producto")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProductoDTO> crear(@RequestBody ProductoDTO producto) throws BadRequestException, ResourceNotFoundException, RepeatedMailException, NotImplementedException {
        ProductoDTO productoNuevo = productoService.crear(producto);
        return ResponseEntity.ok(productoNuevo);
    }

    @Override
    @ApiOperation(value = "Busca un producto por ID")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> buscarPorId(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        ProductoDTO producto = productoService.buscarPorId(id);
        return ResponseEntity.ok(producto);
    }

    @Override
    @ApiOperation(value = "Actualiza un producto")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @PutMapping
    public ResponseEntity<ProductoDTO> actualizar(@RequestBody ProductoDTO producto) throws BadRequestException, ResourceNotFoundException, NotImplementedException {
        ProductoDTO productoActualizado = productoService.actualizar(producto);
        return ResponseEntity.ok(productoActualizado);
    }

    @Override
    @ApiOperation(value = "Elimina un producto")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        productoService.eliminar(id);
        return ResponseEntity.ok(String.format(Mensajes.ELIMINADO_CON_EXITO, "Producto", id));
    }

    @Override
    @ApiOperation(value = "Lista todos los productos según la categoria especificada")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success")
    })
    @GetMapping("/categoria")
    public ResponseEntity<?> obtenerPorCategoria(@RequestParam String titulo) throws ResourceNotFoundException {
        Set<ProductoDTO> productos = productoService.consultarPorCategoria(titulo);
        return ResponseEntity.ok(productos);
    }

    @Override
    @ApiOperation(value = "Lista todos los productos según la ciudad especificada")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success")
    })
    @GetMapping("/ciudad")
    public ResponseEntity<?> obtenerPorCiudad(@RequestParam String nombre) throws ResourceNotFoundException {
        Set<ProductoDTO> productos = productoService.consultarPorCiudad(nombre);
        return ResponseEntity.ok(productos);
    }

    @Override
    @ApiOperation(value = "Lista todos los productos según la ciudad y las fechas especificadas")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success")
    })
    @GetMapping(params = {"ciudad", "fechaIngreso", "fechaEgreso"})
    public ResponseEntity<?> obtenerPorCiudadYFechas(@RequestParam("ciudad") String ciudad,
                                                     @RequestParam("fechaIngreso") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaIngreso,
                                                     @RequestParam("fechaEgreso") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaEgreso) throws ResourceNotFoundException {
        Set<ProductoDTO> productos = productoService.consultarPorCiudadYFechas(ciudad, fechaIngreso, fechaEgreso);
        return ResponseEntity.ok(productos);
    }

    @Override
    @ApiOperation(value = "Lista todos los productos según las fechas especificadas")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success")
    })
    @GetMapping(params = {"fechaIngreso", "fechaEgreso"})
    public ResponseEntity<?> obtenerPorFechas(@RequestParam("fechaIngreso") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaIngreso,
                                              @RequestParam("fechaEgreso") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaEgreso) throws ResourceNotFoundException {
        Set<ProductoDTO> productos = productoService.consultarPorFechas(fechaIngreso, fechaEgreso);
        return ResponseEntity.ok(productos);
    }

    @Override
    @CrossOrigin
    @ApiOperation(value = "Agrega de un usuario un producto favorito")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @PutMapping("/{idProducto}/agregar/usuarios/{idUsuario}")
    public ResponseEntity<?> agregarAFavoritos(@PathVariable Long idProducto, @PathVariable Long idUsuario) throws NotImplementedException, BadRequestException, ResourceNotFoundException {
        return ResponseEntity.ok(productoService.agregarAFavoritos(idProducto, idUsuario));
    }

    @Override
    @ApiOperation(value = "Elimina de un usuario un producto favorito")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 400, message = "Bad Request")
    })
    @PutMapping("/{idProducto}/eliminar/usuarios/{idUsuario}")
    public ResponseEntity<?> quitarDeFavoritos(@PathVariable Long idProducto, @PathVariable Long idUsuario) throws NotImplementedException, BadRequestException, ResourceNotFoundException {
        return ResponseEntity.ok(productoService.quitarDeFavoritos(idProducto, idUsuario));
    }
}
