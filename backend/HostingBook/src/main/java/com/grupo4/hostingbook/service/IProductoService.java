package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.persistence.entites.Producto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface IProductoService extends CRUDService<ProductoDTO> {

     Set<ProductoDTO> consultarPorCategoria(String titulo);

     Set<ProductoDTO> consultarPorCiudad(String nombreCiudad);
}