package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.PoliticaDTO;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.TipoPoliticaDTO;

import java.util.Set;

public interface IPoliticaService extends CRUDService<PoliticaDTO> {

    Set<PoliticaDTO> buscarPorTipoPolitica(Long politicaId) throws BadRequestException, ResourceNotFoundException;

    Set<PoliticaDTO> buscarPorProducto(ProductoDTO productoDTO);

    TipoPoliticaDTO crearTipoPolitica(TipoPoliticaDTO tipoPoliticaDTO) throws BadRequestException;
}