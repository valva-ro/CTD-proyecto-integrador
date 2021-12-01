package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ReservaDTO;
import com.grupo4.hostingbook.persistence.entites.Reserva;
import com.grupo4.hostingbook.persistence.repository.IReservaRepository;
import com.grupo4.hostingbook.service.IReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("ReservaService")
public class ReservaService implements IReservaService {

    private final IReservaRepository reservaRepository;
    private final ObjectMapper mapper;

    @Autowired
    public ReservaService(IReservaRepository reservaRepository, ObjectMapper mapper) {
        this.reservaRepository = reservaRepository;
        this.mapper = mapper;
    }

    @Override
    public ReservaDTO crear(ReservaDTO reservaDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosCreacion(reservaDTO);
        Reserva entidadReserva = mapper.convertValue(reservaDTO, Reserva.class);
        Reserva guardada = reservaRepository.save(entidadReserva);
        return mapper.convertValue(guardada, ReservaDTO.class);
    }

    @Override
    public ReservaDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        return mapper.convertValue(reservaRepository.findById(id).get(), ReservaDTO.class);
    }

    @Override
    public List<ReservaDTO> consultarTodos() {
        List<Reserva> entidades = reservaRepository.findAll();
        List<ReservaDTO> dtos = new ArrayList<>();
        for (Reserva entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, ReservaDTO.class));
        }
        return dtos;
    }

    @Override
    public ReservaDTO actualizar(ReservaDTO reservaDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(reservaDTO);
        ReservaDTO reservaActualizada;
        Optional<Reserva> r = reservaRepository.findById(reservaDTO.getId());
        if (r.isPresent()) {
            Reserva entidad = r.get();
            reservaActualizada = actualizar(reservaDTO, entidad);
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'reserva'", reservaDTO.getId()));
        }
        return reservaActualizada;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        validarId(id);
        reservaRepository.deleteById(id);
    }

    @Override
    public Set<ReservaDTO> consultarPorIdProducto(Long id) throws ResourceNotFoundException {
        Set<Reserva> entidades = reservaRepository.buscarReservasPorIdProducto(id);
        Set<ReservaDTO> dtos = new HashSet<>();
        for (Reserva entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, ReservaDTO.class));
        }
        if (dtos.size() == 0) {
            throw new ResourceNotFoundException(
                    String.format(Mensajes.ERROR_CRITERIO_DE_BUSQUEDA_NO_EXISTE, "El id", id));
        }
        return dtos;
    }


    @Override
    public Set<ReservaDTO> consultarPorIdUsuario(Long id) throws ResourceNotFoundException {
        Set<Reserva> entidades = reservaRepository.buscarReservasPorIdUsuario(id);
        Set<ReservaDTO> dtos = new HashSet<>();
        for (Reserva entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, ReservaDTO.class));
        }
        if (dtos.size() == 0) {
            throw new ResourceNotFoundException(
                    String.format(Mensajes.ERROR_CRITERIO_DE_BUSQUEDA_NO_EXISTE, "El id", id));
        }
        return dtos;
    }


    private void validarCamposRequeridosCreacion(ReservaDTO reservaDTO) throws BadRequestException {
        if (reservaDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "reserva"));
        } else {
            if (reservaDTO.getUsuario() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "usuario"));
            if (reservaDTO.getProducto() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "producto"));
            if (reservaDTO.getHoraEntrada() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "hora de entrada"));
            if (reservaDTO.getNombre() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "nombre"));
            if (reservaDTO.getApellido() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "apellido"));
            if (reservaDTO.getMail() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "mail"));
            if (reservaDTO.getCiudad() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "ciudad"));
            if (reservaDTO.getFechaIngreso() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "fecha de ingreso"));
            if (reservaDTO.getFechaEgreso() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "fecha de egreso"));
            if (reservaDTO.getVacunaCovid() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "reserva", "esta vacunado"));
        }
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!reservaRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'reserva'", id));
    }

    private void validarCamposRequeridosActualizacion(ReservaDTO reservaDTO) throws BadRequestException {
        if (reservaDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "reserva"));
        } else {
            if (reservaDTO.getId() == null)
                throw new BadRequestException(Mensajes.ERROR_ID_ES_NULL);
            if (reservaDTO.getId() < 1)
                throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        }
    }

    private ReservaDTO actualizar(ReservaDTO reservaDTO, Reserva entidad) {
        if (reservaDTO.getFechaIngreso() != null && reservaDTO.getFechaEgreso() != null
                && reservaDTO.getHoraEntrada() != null && reservaDTO.getNombre() != null
                && reservaDTO.getApellido() != null && reservaDTO.getMail() != null
                && reservaDTO.getCiudad() != null && reservaDTO.getProducto() != null
                && reservaDTO.getUsuario() != null && reservaDTO.getVacunaCovid() != null) {
            entidad.setHoraEntrada(reservaDTO.getHoraEntrada());
            entidad.setNombre(reservaDTO.getNombre());
            entidad.setApellido(reservaDTO.getApellido());
            entidad.setMail(reservaDTO.getMail());
            entidad.setCiudad(reservaDTO.getCiudad());
            entidad.setFechaIngreso(reservaDTO.getFechaIngreso());
            entidad.setFechaEgreso(reservaDTO.getFechaEgreso());
            entidad.setVacunaCovid(reservaDTO.getVacunaCovid());
            entidad.setDatos(reservaDTO.getDatos());
        }

        Reserva entidadActualizada = reservaRepository.save(entidad);
        return mapper.convertValue(entidadActualizada, ReservaDTO.class);
    }
}