package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CRUDService<T> {
     T crear(T t) throws BadRequestException, ResourceNotFoundException;
     T buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException;
     List<T> consultarTodos();
     T actualizar(T t) throws BadRequestException, ResourceNotFoundException, NotImplementedException;
     void eliminar(Long id) throws ResourceNotFoundException, BadRequestException;

}