package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.PuntuacionDTO;
import com.grupo4.hostingbook.persistence.entites.Puntuacion;
import com.grupo4.hostingbook.persistence.repository.IPuntuacionRepository;
import com.grupo4.hostingbook.service.IPuntuacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service("PuntuacionService")
public class PuntuacionService implements IPuntuacionService {

    private final IPuntuacionRepository puntuacionRepository;
    private final UsuarioService usuarioService;
    private final ProductoService productoService;
    private final ObjectMapper mapper;

    @Autowired
    public PuntuacionService(IPuntuacionRepository puntuacionRepository, UsuarioService usuarioService, @Lazy ProductoService productoService, ObjectMapper mapper) {
        this.puntuacionRepository = puntuacionRepository;
        this.usuarioService = usuarioService;
        this.productoService = productoService;
        this.mapper = mapper;
    }

    @Override
    public PuntuacionDTO crear(PuntuacionDTO puntuacionDTO) throws BadRequestException, ResourceNotFoundException, NotImplementedException {
        validarCamposRequeridosCreacion(puntuacionDTO);
        Long idUsuario = puntuacionDTO.getUsuario().getId();
        Long idProducto = puntuacionDTO.getProducto().getId();
        Puntuacion guardada;
        Puntuacion puntuacionEnBD = puntuacionRepository.consultarPorUsuarioYProducto(idUsuario, idProducto);
        if (puntuacionEnBD != null) {
            puntuacionDTO.setId(puntuacionEnBD.getId());
            guardada = actualizar(puntuacionDTO, puntuacionEnBD);
        } else {
            guardarEntidadesAsociadas(puntuacionDTO);
            puntuacionDTO.setFecha(LocalDate.now());
            guardada = puntuacionRepository.save(mapper.convertValue(puntuacionDTO, Puntuacion.class));
        }
        return setearEntidadesDeLaBaseDeDatos(guardada);
    }

    @Override
    public PuntuacionDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        if (!puntuacionRepository.existsById(id)) {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'puntuación'", id));
        }
        return mapper.convertValue(puntuacionRepository.findById(id).get(), PuntuacionDTO.class);
    }

    @Override
    public List<PuntuacionDTO> consultarTodos() {
        List<Puntuacion> entidades = puntuacionRepository.findAll();
        List<PuntuacionDTO> dtos = new ArrayList<>();
        for (Puntuacion entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, PuntuacionDTO.class));
        }
        return dtos;
    }

    @Override
    public PuntuacionDTO actualizar(PuntuacionDTO puntuacionDTO) throws BadRequestException, ResourceNotFoundException {
        PuntuacionDTO puntuacionActualizada;
        Optional<Puntuacion> p = puntuacionRepository.findById(puntuacionDTO.getId());
        if (p.isPresent()) {
            Puntuacion entidad = p.get();
            puntuacionActualizada = mapper.convertValue(actualizar(puntuacionDTO, entidad), PuntuacionDTO.class);
        } else {
            throw new ResourceNotFoundException(
                    String.format(Mensajes.ERROR_NO_EXISTE, "La 'puntuación'", puntuacionDTO.getId()));
        }
        return puntuacionActualizada;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        validarId(id);
        puntuacionRepository.deleteById(id);
    }

    @Override
    public Set<PuntuacionDTO> consultarPorProductoID(Long id) {
        Set<PuntuacionDTO> dtos = new HashSet<>();
        for (Puntuacion p : puntuacionRepository.consultarPorProductoID(id)) {
            dtos.add(mapper.convertValue(p, PuntuacionDTO.class));
        }
        return dtos;
    }

    @Override
    public Set<PuntuacionDTO> consultarPorUsuarioID(Long id) {
        Set<PuntuacionDTO> dtos = new HashSet<>();
        for (Puntuacion p : puntuacionRepository.consultarPorUsuarioID(id)) {
            dtos.add(mapper.convertValue(p, PuntuacionDTO.class));
        }
        return dtos;
    }

    private void validarCamposRequeridosCreacion(PuntuacionDTO puntuacionDTO) throws BadRequestException {
        if (puntuacionDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Puntuación"));
        } else {
            if (puntuacionDTO.getPuntuacion() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "puntuación", "puntuación"));
            else if (puntuacionDTO.getPuntuacion() < 1 || puntuacionDTO.getPuntuacion() > 5)
                throw new BadRequestException(String.format(Mensajes.ERROR_CAMPO_FUERA_DE_RANGO, "La puntuación", "1", "5"));
            if (puntuacionDTO.getProducto() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "puntuación", "producto"));
            else if (puntuacionDTO.getProducto().getId() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "puntuación", "ID de producto"));
            if (puntuacionDTO.getUsuario() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "puntuación", "usuario"));
            else if (puntuacionDTO.getUsuario().getId() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "puntuación", "ID de usuario"));
        }
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!puntuacionRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'puntuación'", id));
    }

    private PuntuacionDTO setearEntidadesDeLaBaseDeDatos(Puntuacion puntuacion) throws BadRequestException, ResourceNotFoundException {
        PuntuacionDTO puntuacionDTO = new PuntuacionDTO();
        puntuacion.setFecha(LocalDate.now());
        puntuacionDTO.setId(puntuacion.getId());
        puntuacionDTO.setComentario(puntuacion.getComentario());
        puntuacionDTO.setPuntuacion(puntuacion.getPuntuacion());
        puntuacionDTO.setProducto(productoService.buscarPorId(puntuacion.getProducto().getId()));
        puntuacionDTO.setUsuario(usuarioService.buscarPorId(puntuacion.getUsuario().getId()));
        return puntuacionDTO;
    }

    private void guardarEntidadesAsociadas(PuntuacionDTO puntuacionDTO) throws BadRequestException, ResourceNotFoundException {
        ProductoDTO productoPorActualizar = productoService.buscarPorId(puntuacionDTO.getProducto().getId());
        Set<PuntuacionDTO> puntuaciones = productoPorActualizar.getPuntuaciones();
        puntuaciones.add(new PuntuacionDTO(puntuacionDTO.getId()));
        productoService.actualizar(productoPorActualizar);
    }

    private Puntuacion actualizar(PuntuacionDTO puntuacionDTO, Puntuacion entidad) {
        if (puntuacionDTO.getPuntuacion() != null) {
            entidad.setPuntuacion(puntuacionDTO.getPuntuacion());
        }
        if (puntuacionDTO.getComentario() != null && !puntuacionDTO.getComentario().isEmpty() && !puntuacionDTO.getComentario().isBlank()) {
            entidad.setComentario(puntuacionDTO.getComentario());
        }
        entidad.setFecha(LocalDate.now());
        return puntuacionRepository.save(entidad);
    }
}
