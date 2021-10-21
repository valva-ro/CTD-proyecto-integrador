package com.grupo4.categorias.service;

import com.grupo4.categorias.exceptions.BadRequestException;
import com.grupo4.categorias.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CRUDService<T> {
     T crear(T t) throws BadRequestException;
     List<T> consultarTodos();
     T actualizar(T t) throws BadRequestException, ResourceNotFoundException;
     void eliminar(Long id) throws ResourceNotFoundException, BadRequestException;
}