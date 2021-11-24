package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import org.springframework.stereotype.Service;

import java.time.*;
import java.util.Set;

@Service
public interface IProductoService extends CRUDService<ProductoDTO> {

     Set<ProductoDTO> consultarPorCategoria(String titulo) throws ResourceNotFoundException;

     Set<ProductoDTO> consultarPorCiudad(String nombreCiudad) throws ResourceNotFoundException;

     UsuarioDTO agregarAFavoritos(Long idProducto, Long idUsuario)
               throws ResourceNotFoundException, BadRequestException, NotImplementedException;

     Set<ProductoDTO> consultarPorCiudadYFechas(String nombre, LocalDate fechaIngreso, LocalDate fechaEgreso)
               throws ResourceNotFoundException;

     Set<Long> consultarProductosReservadosEntreFechas(LocalDate fechaIngreso, LocalDate fechaEgreso);

     UsuarioDTO quitarDeFavoritos(Long idProducto, Long idUsuario)
               throws ResourceNotFoundException, BadRequestException, NotImplementedException;
}
