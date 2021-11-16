package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface IProductoService extends CRUDService<ProductoDTO> {

     Set<ProductoDTO> consultarPorCategoria(String titulo) throws ResourceNotFoundException;

     Set<ProductoDTO> consultarPorCiudad(String nombreCiudad) throws ResourceNotFoundException;

     UsuarioDTO agregarAFavoritos(Long idProducto, Long idUsuario) throws ResourceNotFoundException, BadRequestException, NotImplementedException;
}