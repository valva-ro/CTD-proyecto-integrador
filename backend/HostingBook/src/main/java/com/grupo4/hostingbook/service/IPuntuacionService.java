package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.model.PuntuacionDTO;

import java.util.Set;

public interface IPuntuacionService extends CRUDService<PuntuacionDTO> {
    Set<PuntuacionDTO> consultarPorProductoID(Long id);
}
