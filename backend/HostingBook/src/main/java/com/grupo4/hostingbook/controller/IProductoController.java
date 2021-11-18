package com.grupo4.hostingbook.controller;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;

@Controller
public interface IProductoController extends CRUDController<ProductoDTO> {

    ResponseEntity<?> obtenerPorCategoria(@RequestBody String tituloCategoria) throws BadRequestException, ResourceNotFoundException;

    ResponseEntity<?> obtenerPorCiudad(@RequestBody String nombreCiudad) throws BadRequestException, ResourceNotFoundException;

    ResponseEntity<?> obtenerPorCiudadYFechas(@RequestParam String nombre, @RequestParam Date fechaIngreso, @RequestParam Date fechaEgreso) throws ResourceNotFoundException;

    ResponseEntity<?> agregarAFavoritos(@PathVariable Long idProducto, @PathVariable Long idUsuario) throws NotImplementedException, BadRequestException, ResourceNotFoundException;
}
