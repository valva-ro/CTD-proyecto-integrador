package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.CaracteristicaDTO;
import com.grupo4.hostingbook.persistence.entites.Caracteristica;
import com.grupo4.hostingbook.persistence.repository.ICaracteristicaRepository;
import com.grupo4.hostingbook.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CaracteristicaService implements CRUDService<CaracteristicaDTO> {

    private final ICaracteristicaRepository caracteristicaRepository;
    private final ObjectMapper mapper;

    @Autowired
    public CaracteristicaService(ICaracteristicaRepository caracteristicaRepository, ObjectMapper mapper) {
        this.caracteristicaRepository = caracteristicaRepository;
        this.mapper = mapper;
    }

    @Override
    public CaracteristicaDTO crear(CaracteristicaDTO caracteristicaDTO) throws BadRequestException {
        validarCamposRequeridosCreacion(caracteristicaDTO);
        Caracteristica entidadCaracteristica = mapper.convertValue(caracteristicaDTO, Caracteristica.class);
        Caracteristica guardada = caracteristicaRepository.save(entidadCaracteristica);
        return mapper.convertValue(guardada, CaracteristicaDTO.class);
    }

    @Override
    public CaracteristicaDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        if (!caracteristicaRepository.existsById(id)) {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'característica'", id));
        }
        return mapper.convertValue(caracteristicaRepository.findById(id).get(), CaracteristicaDTO.class);
    }

    @Override
    public List<CaracteristicaDTO> consultarTodos() {
        List<Caracteristica> entidades = caracteristicaRepository.findAll();
        List<CaracteristicaDTO> dtos = new ArrayList<>();
        for (Caracteristica entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, CaracteristicaDTO.class));
        }
        return dtos;
    }

    @Override
    public CaracteristicaDTO actualizar(CaracteristicaDTO caracteristicaDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(caracteristicaDTO);
        CaracteristicaDTO caracteristicaActualizada;
        Optional<Caracteristica> c = caracteristicaRepository.findById(caracteristicaDTO.getId());
        if (c.isPresent()) {
            Caracteristica entidad = c.get();
            caracteristicaActualizada = actualizar(caracteristicaDTO, entidad);
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'característica'", caracteristicaDTO.getId()));
        }
        return caracteristicaActualizada;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        validarId(id);
        caracteristicaRepository.deleteById(id);
    }

    private void validarCamposRequeridosCreacion(CaracteristicaDTO caracteristicaDTO) throws BadRequestException {
        if (caracteristicaDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Característica"));
        } else {
            if (caracteristicaDTO.getNombre() == null || caracteristicaDTO.getNombre().isEmpty() || caracteristicaDTO.getNombre().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "característica", "nombre"));
            if (caracteristicaDTO.getIcono() == null || caracteristicaDTO.getIcono().isEmpty() || caracteristicaDTO.getIcono().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "característica", "ícono"));
        }
    }

    private void validarCamposRequeridosActualizacion(CaracteristicaDTO caracteristicaDTO) throws BadRequestException {
        if (caracteristicaDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Característica"));
        } else {
            if (caracteristicaDTO.getId() == null)
                throw new BadRequestException(Mensajes.ERROR_ID_ES_NULL);
            if (caracteristicaDTO.getId() < 1)
                throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        }
    }

    private CaracteristicaDTO actualizar(CaracteristicaDTO caracteristicaDTO, Caracteristica entidad) {
        if (caracteristicaDTO.getNombre() != null && !caracteristicaDTO.getNombre().isEmpty() && !caracteristicaDTO.getNombre().isBlank())
            entidad.setNombre(caracteristicaDTO.getNombre());
        if (caracteristicaDTO.getIcono() != null && !caracteristicaDTO.getIcono().isEmpty() && !caracteristicaDTO.getIcono().isBlank())
            entidad.setIcono(caracteristicaDTO.getIcono());
        Caracteristica entidadActualizada = caracteristicaRepository.save(entidad);
        return mapper.convertValue(entidadActualizada, CaracteristicaDTO.class);
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!caracteristicaRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'característica'", id));
    }

}
