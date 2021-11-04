package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.CategoriaDTO;
import com.grupo4.hostingbook.persistence.entites.Categoria;
import com.grupo4.hostingbook.persistence.repository.ICategoriaRepository;
import com.grupo4.hostingbook.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService implements CRUDService<CategoriaDTO> {

    private final ICategoriaRepository categoriaRepository;
    private final ObjectMapper mapper;

    @Autowired
    public CategoriaService(ICategoriaRepository categoriaRepository, ObjectMapper mapper) {
        this.categoriaRepository = categoriaRepository;
        this.mapper = mapper;
    }

    @Override
    public CategoriaDTO crear(CategoriaDTO categoriaDTO) throws BadRequestException {
        validarCamposRequeridosCreacion(categoriaDTO);
        Categoria entidadCategoria = mapper.convertValue(categoriaDTO, Categoria.class);
        Categoria guardada = categoriaRepository.save(entidadCategoria);
        return mapper.convertValue(guardada, CategoriaDTO.class);
    }

    @Override
    public CategoriaDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        Categoria categoria = categoriaRepository.getById(id);
        return mapper.convertValue(categoria, CategoriaDTO.class);
    }

    @Override
    public List<CategoriaDTO> consultarTodos() {
        List<Categoria> entidades = categoriaRepository.findAll();
        List<CategoriaDTO> dtos = new ArrayList<>();
        for (Categoria entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, CategoriaDTO.class));
        }
        return dtos;
    }

    @Override
    public CategoriaDTO actualizar(CategoriaDTO categoriaDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(categoriaDTO);
        CategoriaDTO categoriaActualizada;
        Optional<Categoria> c = categoriaRepository.findById(categoriaDTO.getId());
        if (c.isPresent()) {
            Categoria entidad = c.get();
            categoriaActualizada = actualizar(categoriaDTO, entidad);
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'categoría'", categoriaDTO.getId()));
        }
        return categoriaActualizada;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        validarId(id);
        categoriaRepository.deleteById(id);
    }

    private void validarCamposRequeridosCreacion(CategoriaDTO categoriaDTO) throws BadRequestException {
        if (categoriaDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Categoría"));
        } else {
            if (categoriaDTO.getTitulo() == null || categoriaDTO.getTitulo().isEmpty() || categoriaDTO.getTitulo().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "categoría", "título"));
            if (categoriaDTO.getDescripcion() == null || categoriaDTO.getDescripcion().isEmpty() || categoriaDTO.getDescripcion().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "categoría", "descripción"));
            if (categoriaDTO.getUrlImagen() == null || categoriaDTO.getUrlImagen().isEmpty() || categoriaDTO.getUrlImagen().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "categoría", "URL de la imagen"));
        }
    }

    private void validarCamposRequeridosActualizacion(CategoriaDTO categoriaDTO) throws BadRequestException {
        if (categoriaDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Categoría"));
        } else {
            if (categoriaDTO.getId() == null)
                throw new BadRequestException(Mensajes.ERROR_ID_ES_NULL);
            if (categoriaDTO.getId() < 1)
                throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        }
    }

    private CategoriaDTO actualizar(CategoriaDTO categoriaDTO, Categoria entidad) {
        if (categoriaDTO.getTitulo() != null && !categoriaDTO.getTitulo().isEmpty() && !categoriaDTO.getTitulo().isBlank())
            entidad.setTitulo(categoriaDTO.getTitulo());
        if (categoriaDTO.getDescripcion() != null && !categoriaDTO.getDescripcion().isEmpty() && !categoriaDTO.getDescripcion().isBlank())
            entidad.setDescripcion(categoriaDTO.getDescripcion());
        if (categoriaDTO.getUrlImagen() != null && !categoriaDTO.getUrlImagen().isEmpty() && !categoriaDTO.getUrlImagen().isBlank())
            entidad.setUrlImagen(categoriaDTO.getUrlImagen());
        Categoria entidadActualizada = categoriaRepository.save(entidad);
        return mapper.convertValue(entidadActualizada, CategoriaDTO.class);
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!categoriaRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'categoría'", id));
    }
}
