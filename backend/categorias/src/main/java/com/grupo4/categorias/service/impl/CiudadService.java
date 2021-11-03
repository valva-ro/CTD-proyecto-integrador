package com.grupo4.categorias.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.categorias.exceptions.BadRequestException;
import com.grupo4.categorias.exceptions.Mensajes;
import com.grupo4.categorias.exceptions.ResourceNotFoundException;
import com.grupo4.categorias.model.CiudadDTO;
import com.grupo4.categorias.persistence.entites.Ciudad;
import com.grupo4.categorias.persistence.repository.ICiudadRepository;
import com.grupo4.categorias.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CiudadService implements CRUDService<CiudadDTO> {

    private final ICiudadRepository ciudadRepository;
    private final ObjectMapper mapper;

    @Autowired
    public CiudadService(ICiudadRepository ciudadRepository, ObjectMapper mapper){
        this.ciudadRepository = ciudadRepository;
        this.mapper = mapper;
    }

    @Override
    public CiudadDTO crear(CiudadDTO ciudadDTO) throws BadRequestException{
        validarCamposRequeridosCreacion(ciudadDTO);
        Ciudad entidadCiudad = mapper.convertValue(ciudadDTO, Ciudad.class);
        Ciudad guardada = ciudadRepository.save(entidadCiudad);
        return mapper.convertValue(guardada, CiudadDTO.class);
    }

    @Override
    public CiudadDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!ciudadRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'ciudad'", id));
        Ciudad ciudad = ciudadRepository.getById(id);
        return mapper.convertValue(ciudad, CiudadDTO.class);
    }

    @Override
    public List<CiudadDTO> consultarTodos() {
        List<Ciudad> entidades = ciudadRepository.findAll();
        List<CiudadDTO> dtos = new ArrayList<>();
        for (Ciudad entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, CiudadDTO.class));
        }
        return dtos;
    }

    @Override
    public CiudadDTO actualizar(CiudadDTO ciudadDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(ciudadDTO);
        CiudadDTO categoriaActualizada;
        Optional<Ciudad> c = ciudadRepository.findById(ciudadDTO.getId());
        if (c.isPresent()) {
            Ciudad entidad = c.get();
            categoriaActualizada = actualizar(ciudadDTO, entidad);
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'ciudad'", ciudadDTO.getId()));
        }
        return categoriaActualizada;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!ciudadRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'ciudad'", id));
        ciudadRepository.deleteById(id);
    }

    private void validarCamposRequeridosCreacion(CiudadDTO ciudadDTO) throws BadRequestException {
        if (ciudadDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Ciudad"));
        } else {
            if (ciudadDTO.getNombre() == null || ciudadDTO.getNombre().isEmpty() || ciudadDTO.getNombre().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "ciudad", "nombre"));
            if (ciudadDTO.getPais() == null ||ciudadDTO.getPais().isEmpty() || ciudadDTO.getPais().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "ciudad", "pais"));
        }
    }

    private void validarCamposRequeridosActualizacion(CiudadDTO ciudadDTO) throws BadRequestException {
        if (ciudadDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Ciudad"));
        } else {
            if (ciudadDTO.getId() == null)
                throw new BadRequestException(Mensajes.ERROR_ID_ES_NULL);
            if (ciudadDTO.getId() < 1)
                throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        }
    }

    private CiudadDTO actualizar(CiudadDTO ciudadDTO, Ciudad entidad) {
        if (ciudadDTO.getNombre() != null && !ciudadDTO.getNombre().isEmpty() && !ciudadDTO.getNombre().isBlank())
            entidad.setNombre(ciudadDTO.getNombre());
        if (ciudadDTO.getPais() != null && !ciudadDTO.getPais().isEmpty() && !ciudadDTO.getPais().isBlank())
            entidad.setPais(ciudadDTO.getPais());
        Ciudad entidadActualizada = ciudadRepository.save(entidad);
        return mapper.convertValue(entidadActualizada, CiudadDTO.class);
    }
}
