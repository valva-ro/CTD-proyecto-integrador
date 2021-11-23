package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.RolDTO;
import com.grupo4.hostingbook.persistence.entites.Rol;
import com.grupo4.hostingbook.persistence.repository.IRolRepository;
import com.grupo4.hostingbook.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service("RolService")
public class RolService implements CRUDService<RolDTO> {

    private final IRolRepository rolRepository;
    private final ObjectMapper mapper;

    @Autowired
    public RolService(IRolRepository rolRepository, ObjectMapper mapper) {
        this.rolRepository = rolRepository;
        this.mapper = mapper;
    }

    @Override
    public RolDTO crear(RolDTO rolDTO) throws BadRequestException {
        validarCamposRequeridosCreacion(rolDTO);
        Rol entidadRol = mapper.convertValue(rolDTO, Rol.class);
        Rol guardado = rolRepository.save(entidadRol);
        return mapper.convertValue(guardado, RolDTO.class);
    }

    @Override
    public RolDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        if (!rolRepository.existsById(id)) {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'rol'", id));
        }
        return mapper.convertValue(rolRepository.findById(id).get(), RolDTO.class);
    }

    @Override
    public List<RolDTO> consultarTodos() {
        List<Rol> entidades = rolRepository.findAll();
        List<RolDTO> dtos = new ArrayList<>();
        for (Rol entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, RolDTO.class));
        }
        return dtos;
    }

    @Override
    public RolDTO actualizar(RolDTO rolDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(rolDTO);
        RolDTO rolActualizado;
        Optional<Rol> r = rolRepository.findById(rolDTO.getId());
        if (r.isPresent()) {
            Rol entidad = r.get();
            rolActualizado = actualizar(rolDTO, entidad);
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'rol'", rolDTO.getId()));
        }
        return rolActualizado;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        validarId(id);
        rolRepository.deleteById(id);
    }

    private void validarCamposRequeridosCreacion(RolDTO rolDTO) throws BadRequestException {
        if (rolDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Rol"));
        } else {
            if (rolDTO.getNombre() == null || rolDTO.getNombre().isEmpty() || rolDTO.getNombre().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "rol", "nombre"));
        }
    }

    private void validarCamposRequeridosActualizacion(RolDTO rolDTO) throws BadRequestException {
        if (rolDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Rol"));
        } else {
            if (rolDTO.getId() == null)
                throw new BadRequestException(Mensajes.ERROR_ID_ES_NULL);
            if (rolDTO.getId() < 1)
                throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        }
    }

    private RolDTO actualizar(RolDTO rolDTO, Rol entidad) {
        if (rolDTO.getNombre() != null && !rolDTO.getNombre().isEmpty() && !rolDTO.getNombre().isBlank())
            entidad.setNombre(rolDTO.getNombre());
        Rol entidadActualizada = rolRepository.save(entidad);
        return mapper.convertValue(entidadActualizada, RolDTO.class);
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!rolRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'rol'", id));
    }
}