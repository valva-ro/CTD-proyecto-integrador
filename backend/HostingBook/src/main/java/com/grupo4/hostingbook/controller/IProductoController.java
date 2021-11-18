package com.grupo4.hostingbook.controller;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public interface IProductoController extends CRUDController<ProductoDTO> {

    ResponseEntity<?> obtenerPorCategoria(@RequestBody String tituloCategoria) throws BadRequestException, ResourceNotFoundException;

    ResponseEntity<?> obtenerPorCiudad(@RequestBody String nombreCiudad) throws BadRequestException, ResourceNotFoundException;

    ResponseEntity<?> agregarAFavoritos(@PathVariable Long idProducto, @PathVariable Long idUsuario) throws NotImplementedException, BadRequestException, ResourceNotFoundException;
}
