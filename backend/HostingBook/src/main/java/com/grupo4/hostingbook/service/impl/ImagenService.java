package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ImagenDTO;
import com.grupo4.hostingbook.persistence.entites.Imagen;
import com.grupo4.hostingbook.persistence.repository.IImagenRepository;
import com.grupo4.hostingbook.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ImagenService  implements CRUDService<ImagenDTO> {

    private final IImagenRepository imagenRepository;
    private final ObjectMapper mapper;

    @Autowired
    public ImagenService(IImagenRepository imagenRepository, ObjectMapper mapper) {
        this.imagenRepository = imagenRepository;
        this.mapper = mapper;
    }

    @Override
    public ImagenDTO crear(ImagenDTO imagenDTO) throws BadRequestException {
        validarCamposRequeridosCreacion(imagenDTO);
        Imagen entidadImagen = mapper.convertValue(imagenDTO, Imagen.class);
        Imagen guardada = imagenRepository.save(entidadImagen);
        ImagenDTO guardadaDTO = mapper.convertValue(guardada, ImagenDTO.class);
        System.out.println("Guardada " + guardada.getId());
        System.out.println("Guardada DTO " + guardadaDTO.getId());
        return guardadaDTO;
    }

    @Override
    public ImagenDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        Imagen imagen = imagenRepository.getById(id);
        return mapper.convertValue(imagen, ImagenDTO.class);
    }

    @Override
    public List<ImagenDTO> consultarTodos() {
        List<Imagen> entidades = imagenRepository.findAll();
        List<ImagenDTO> dtos = new ArrayList<>();
        for (Imagen entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, ImagenDTO.class));
        }
        return dtos;
    }

    @Override
    public ImagenDTO actualizar(ImagenDTO imagenDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(imagenDTO);
        ImagenDTO imagenActualizada;
        Optional<Imagen> i = imagenRepository.findById(imagenDTO.getId());
        if (i.isPresent()) {
            Imagen entidad = i.get();
            imagenActualizada = actualizar(imagenDTO,entidad);
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'imagen'", imagenDTO.getId()));
        }
        return imagenActualizada;
    }
    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        validarId(id);
        imagenRepository.deleteById(id);
    }

    private void validarCamposRequeridosCreacion(ImagenDTO imagenDTO) throws BadRequestException {
        if (imagenDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Imagen"));
        } else {
            if (imagenDTO.getImagenTitulo() == null || imagenDTO.getImagenTitulo().isEmpty() || imagenDTO.getImagenTitulo().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "imagen", "título"));
            if (imagenDTO.getImagenUrl() == null || imagenDTO.getImagenUrl().isEmpty() || imagenDTO.getImagenUrl().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "imagen", "URL de la imagen"));
        }
    }

    private void validarCamposRequeridosActualizacion(ImagenDTO imagenDTO) throws BadRequestException {
        if (imagenDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Imagen"));
        } else {
            if (imagenDTO.getId() == null)
                throw new BadRequestException(Mensajes.ERROR_ID_ES_NULL);
            if (imagenDTO.getId() < 1)
                throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        }
    }

    private ImagenDTO actualizar(ImagenDTO imagenDTO, Imagen entidad) {
        if (imagenDTO.getImagenTitulo() != null && !imagenDTO.getImagenTitulo().isEmpty() && !imagenDTO.getImagenTitulo().isBlank())
            entidad.setImagenTitulo(imagenDTO.getImagenTitulo());
        if (imagenDTO.getImagenUrl() != null && !imagenDTO.getImagenUrl().isEmpty() && !imagenDTO.getImagenUrl().isBlank())
            entidad.setImagenUrl(imagenDTO.getImagenUrl());
        Imagen entidadActualizada = imagenRepository.save(entidad);
        return mapper.convertValue(entidadActualizada, ImagenDTO.class);
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!imagenRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'imagen'", id));
    }
}