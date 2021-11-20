package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ReservaDTO;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface IReservaService extends CRUDService<ReservaDTO>{

    Set<ReservaDTO> consultarPorIdProducto(Long idProducto) throws ResourceNotFoundException;
}
