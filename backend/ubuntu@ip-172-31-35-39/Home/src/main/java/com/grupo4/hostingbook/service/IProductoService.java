package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface IProductoService extends CRUDService<ProductoDTO> {

     Set<ProductoDTO> consultarPorCategoria(String titulo) throws ResourceNotFoundException;

     Set<ProductoDTO> consultarPorCiudad(String nombreCiudad) throws ResourceNotFoundException;
}