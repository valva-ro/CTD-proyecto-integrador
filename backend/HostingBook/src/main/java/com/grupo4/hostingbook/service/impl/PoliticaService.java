package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.PoliticaDTO;
import com.grupo4.hostingbook.model.TipoPoliticaDTO;
import com.grupo4.hostingbook.persistence.entites.Politica;
import com.grupo4.hostingbook.persistence.entites.TipoPolitica;
import com.grupo4.hostingbook.persistence.repository.IPoliticaRepository;
import com.grupo4.hostingbook.persistence.repository.ITipoPoliticaRepository;
import com.grupo4.hostingbook.service.IPoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("PoliticaService")
public class PoliticaService implements IPoliticaService {


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
        validarCamposRequeridosCreacion(politicaDTO);
        Politica guardada;
        Politica entidadPolitica = mapper.convertValue(politicaDTO, Politica.class);
        Optional<TipoPolitica> tipoPolitica = tipoPoliticaRepository.findById(politicaDTO.getTipoPolitica().getId());
        if (tipoPolitica.isPresent()) {
            guardada = politicaRepository.save(entidadPolitica);
            guardada.setTipoPolitica(tipoPolitica.get());
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'tipo política'", politicaDTO.getTipoPolitica().getId()));
        }
        return mapper.convertValue(guardada, PoliticaDTO.class);
    }

    @Override
    public PoliticaDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        return mapper.convertValue(politicaRepository.findById(id).get(), PoliticaDTO.class);

    }

    @Override
    public List<PoliticaDTO> consultarTodos() {
        List<Politica> entidades = politicaRepository.findAll();
        List<PoliticaDTO> dtos = new ArrayList<>();
        for (Politica entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, PoliticaDTO.class));
        }
        return dtos;
    }

    @Override
    public PoliticaDTO actualizar(PoliticaDTO politicaDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(politicaDTO);
        PoliticaDTO politicaActualizada;
        Optional<Politica> c = politicaRepository.findById(politicaDTO.getId());
        if (c.isPresent()) {
            Politica entidad = c.get();
            politicaActualizada = actualizar(politicaDTO, entidad);
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'política'", politicaDTO.getId()));
        }
        return politicaActualizada;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        validarId(id);
        politicaRepository.deleteById(id);
    }

    @Override
    public Set<PoliticaDTO> buscarPorTipoPolitica(Long tipopoliticaId) throws BadRequestException, ResourceNotFoundException {
        validartipoPoliticaId(tipopoliticaId);
        Set<PoliticaDTO> politicasEncontradas = new HashSet<>();
        List<Politica> politicas = politicaRepository.findAll();
        for (Politica politica : politicas) {
            if (politica.getTipoPolitica().getId() == tipopoliticaId) {
                politicasEncontradas.add(mapper.convertValue(politica, PoliticaDTO.class));
            }

        }
        return politicasEncontradas;
    }


    @Override
    public TipoPoliticaDTO crearTipoPolitica(TipoPoliticaDTO tipoPoliticaDTO) throws BadRequestException {
        validarCamposRequeridosCreacionTipoPolitica(tipoPoliticaDTO);
        TipoPolitica entidadTipoPolitica = mapper.convertValue(tipoPoliticaDTO, TipoPolitica.class);
        TipoPolitica guardada = tipoPoliticaRepository.save(entidadTipoPolitica);
        return mapper.convertValue(guardada, TipoPoliticaDTO.class);
    }

    private void validarCamposRequeridosCreacion(PoliticaDTO politicaDTO) throws BadRequestException {
        if (politicaDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "política"));
        } else {
            if (politicaDTO.getTipoPolitica() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "política", "tipo política"));
            if (politicaDTO.getNombre() == null || politicaDTO.getNombre().isEmpty() || politicaDTO.getNombre().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "política", "nombre"));

        }
    }

    private void validarCamposRequeridosCreacionTipoPolitica(TipoPoliticaDTO tipoPoliticaDTO) throws BadRequestException {
        if (tipoPoliticaDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Tipo política"));
        } else {
            if (tipoPoliticaDTO.getNombre() == null || tipoPoliticaDTO.getNombre().isEmpty() || tipoPoliticaDTO.getNombre().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "tipo política", "nombre"));
        }
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!politicaRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'política'", id));
    }

    private void validarCamposRequeridosActualizacion(PoliticaDTO politicaDTO) throws BadRequestException {
        if (politicaDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "política"));
        } else {
            if (politicaDTO.getId() == null)
                throw new BadRequestException(Mensajes.ERROR_ID_ES_NULL);
            if (politicaDTO.getId() < 1)
                throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        }
    }

    private PoliticaDTO actualizar(PoliticaDTO politicaDTO, Politica entidad) {
        if (politicaDTO.getNombre() != null && !politicaDTO.getNombre().isEmpty() && !politicaDTO.getNombre().isBlank())
            entidad.setNombre(politicaDTO.getNombre());
        Politica entidadActualizada = politicaRepository.save(entidad);
        return mapper.convertValue(entidadActualizada, PoliticaDTO.class);
    }

    private void validartipoPoliticaId(Long tipopoliticaId) throws BadRequestException, ResourceNotFoundException {
        if (tipopoliticaId < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!politicaRepository.existsById(tipopoliticaId))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'tipo de política'", tipopoliticaId));
    }
}



