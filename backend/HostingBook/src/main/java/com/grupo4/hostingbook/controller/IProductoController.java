package com.grupo4.hostingbook.controller;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;

@Controller
public interface IProductoController extends CRUDController<ProductoDTO> {

    ResponseEntity<?> obtenerPorCategoria(@RequestBody String tituloCategoria) throws BadRequestException, ResourceNotFoundException;

    ResponseEntity<?> obtenerPorCiudad(@RequestBody String nombreCiudad) throws BadRequestException, ResourceNotFoundException;

    ResponseEntity<?> obtenerPorCiudadYFechas(@RequestParam String nombre, @RequestParam LocalDate fechaIngreso, @RequestParam LocalDate fechaEgreso) throws ResourceNotFoundException;

    ResponseEntity<?> obtenerPorFechas(@RequestParam LocalDate fechaIngreso, @RequestParam LocalDate fechaEgreso) throws ResourceNotFoundException;

    ResponseEntity<?> agregarAFavoritos(@PathVariable Long idProducto, @PathVariable Long idUsuario) throws NotImplementedException, BadRequestException, ResourceNotFoundException;

    ResponseEntity<?> quitarDeFavoritos(Long idProducto, Long idUsuario) throws ResourceNotFoundException, BadRequestException, NotImplementedException;
}
