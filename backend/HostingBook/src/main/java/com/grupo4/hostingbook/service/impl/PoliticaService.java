package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.PoliticaDTO;
import com.grupo4.hostingbook.persistence.entites.Politica;
import com.grupo4.hostingbook.persistence.entites.TipoPolitica;
import com.grupo4.hostingbook.persistence.repository.IPoliticaRepository;
import com.grupo4.hostingbook.persistence.repository.ITipoPoliticaRepository;
import com.grupo4.hostingbook.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("PoliticaService")
public class PoliticaService implements CRUDService<PoliticaDTO> {


    private final ITipoPoliticaRepository tipoPoliticaRepository;
    private final IPoliticaRepository politicaRepository;
    private final ObjectMapper mapper;

    @Autowired
    public PoliticaService(ITipoPoliticaRepository tipoPoliticaRepository, IPoliticaRepository politicaRepository, ObjectMapper mapper) {
        this.tipoPoliticaRepository = tipoPoliticaRepository;
        this.politicaRepository = politicaRepository;
        this.mapper = mapper;
    }

    @Override
    public PoliticaDTO crear(PoliticaDTO politicaDTO) throws BadRequestException, ResourceNotFoundException {
        politicaDTO.setTipoPolitica(tipoPoliticaRepository.save(mapper.convertValue(politicaDTO.getTipoPolitica(), TipoPolitica.class)));
        Politica entidadPolitica = mapper.convertValue(politicaDTO, Politica.class);

        Politica guardada = politicaRepository.save(entidadPolitica);
        return mapper.convertValue(guardada, PoliticaDTO.class);
    }

    @Override
    public PoliticaDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        return null;
    }

    @Override
    public List<PoliticaDTO> consultarTodos() {
        return null;
    }

    @Override
    public PoliticaDTO actualizar(PoliticaDTO politicaDTO) throws BadRequestException, ResourceNotFoundException {
        return null;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {

    }
}
