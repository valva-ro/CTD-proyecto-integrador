package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import com.grupo4.hostingbook.persistence.entites.Producto;
import com.grupo4.hostingbook.persistence.entites.Usuario;
import com.grupo4.hostingbook.persistence.repository.IUsuarioRepository;
import com.grupo4.hostingbook.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("UsuarioService")
public class UsuarioService implements CRUDService<UsuarioDTO> {

    private final IUsuarioRepository usuarioRepository;
    private final ObjectMapper mapper;

    @Autowired
    public UsuarioService(IUsuarioRepository usuarioRepository, ObjectMapper mapper) {
        this.usuarioRepository = usuarioRepository;
        this.mapper = mapper;
    }

    @Override
    public UsuarioDTO crear(UsuarioDTO usuarioDTO) throws BadRequestException {
        validarCamposRequeridosCreacion(usuarioDTO);
        Usuario entidadUsuario = mapper.convertValue(usuarioDTO, Usuario.class);
        if (entidadUsuario.getProductosFavoritos() == null)
            entidadUsuario.setProductosFavoritos(new HashSet<>());
        entidadUsuario.setCuentaValidada(false);
        Usuario guardada = usuarioRepository.save(entidadUsuario);
        return mapper.convertValue(guardada, UsuarioDTO.class);
    }

    @Override
    public UsuarioDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        if (!usuarioRepository.existsById(id)) {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "La 'usuario'", id));
        }
        return mapper.convertValue(usuarioRepository.findById(id).get(), UsuarioDTO.class);
    }

    @Override
    public List<UsuarioDTO> consultarTodos() {
        List<Usuario> entidades = usuarioRepository.findAll();
        List<UsuarioDTO> dtos = new ArrayList<>();
        for (Usuario entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, UsuarioDTO.class));
        }
        return dtos;
    }

    @Override
    public UsuarioDTO actualizar(UsuarioDTO usuarioDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(usuarioDTO);
        UsuarioDTO usuarioActualizado;
        Optional<Usuario> u = usuarioRepository.findById(usuarioDTO.getId());
        if (u.isPresent()) {
            Usuario entidad = u.get();
            usuarioActualizado = actualizar(usuarioDTO, entidad);
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El usuario", usuarioDTO.getId()));
        }
        return usuarioActualizado;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        validarId(id);
        usuarioRepository.deleteById(id);
    }

    private void validarCamposRequeridosCreacion(UsuarioDTO usuarioDTO) throws BadRequestException {
        if (usuarioDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Usuario"));
        } else {
            if (usuarioDTO.getNombre() == null || usuarioDTO.getNombre().isEmpty() || usuarioDTO.getNombre().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "usuario", "nombre"));
            if (usuarioDTO.getApellido() == null || usuarioDTO.getApellido().isEmpty() || usuarioDTO.getApellido().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "usuario", "apellido"));
            if (usuarioDTO.getMail() == null || usuarioDTO.getMail().isEmpty() || usuarioDTO.getMail().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "usuario", "mail"));
            if (usuarioDTO.getContrasenia() == null || usuarioDTO.getContrasenia().isEmpty() || usuarioDTO.getContrasenia().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "usuario", "contraseña"));
        }
    }


    private void validarCamposRequeridosActualizacion(UsuarioDTO usuarioDTO) throws BadRequestException, ResourceNotFoundException {
        if (usuarioDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Usuario"));
        } else {
            validarId(usuarioDTO.getId());
        }
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!usuarioRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'usuario'", id));
    }

    private UsuarioDTO actualizar(UsuarioDTO usuarioDTO, Usuario entidad) {
        if (usuarioDTO.getNombre() != null && !usuarioDTO.getNombre().isEmpty() && !usuarioDTO.getNombre().isBlank())
            entidad.setNombre(usuarioDTO.getNombre());
        if (usuarioDTO.getApellido() != null && !usuarioDTO.getApellido().isEmpty() && !usuarioDTO.getApellido().isBlank())
            entidad.setApellido(usuarioDTO.getApellido());
        if (usuarioDTO.getMail() != null && !usuarioDTO.getMail().isEmpty() && !usuarioDTO.getMail().isBlank())
            entidad.setMail(usuarioDTO.getMail());
        if (usuarioDTO.getContrasenia() != null && !usuarioDTO.getContrasenia().isEmpty() && !usuarioDTO.getContrasenia().isBlank())
            entidad.setContrasenia(usuarioDTO.getContrasenia());
        if (entidad.getProductosFavoritos() != null) {
            if (entidad.getProductosFavoritos().size() > 0)  {
                Set<Producto> favoritos = entidad.getProductosFavoritos();
                for (ProductoDTO p : usuarioDTO.getProductosFavoritos()) {
                    favoritos.add(mapper.convertValue(p, Producto.class));
                }
                entidad.setProductosFavoritos(favoritos);
            }
        }
        Usuario entidadActualizada = usuarioRepository.save(entidad);
        return mapper.convertValue(entidadActualizada, UsuarioDTO.class);
    }
}
