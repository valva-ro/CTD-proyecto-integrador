package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.NotImplementedException;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.*;
import com.grupo4.hostingbook.persistence.entites.*;
import com.grupo4.hostingbook.persistence.repository.IProductoRepository;
import com.grupo4.hostingbook.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.*;

@Service
public class ProductoService implements IProductoService {

    private final IProductoRepository productoRepository;
    private final ObjectMapper mapper;
    private final CategoriaService categoriaService;
    private final CiudadService ciudadService;
    private final ImagenService imagenService;
    private final CaracteristicaService caracteristicaService;
    private final PuntuacionService puntuacionService;
    private final UsuarioService usuarioService;

    @Autowired
    public ProductoService(IProductoRepository productoRepository, ObjectMapper mapper, CategoriaService categoriaService, CiudadService ciudadService, ImagenService imagenService, CaracteristicaService caracteristicaService, PuntuacionService puntuacionService, UsuarioService usuarioService) {
        this.productoRepository = productoRepository;
        this.mapper = mapper;
        this.categoriaService = categoriaService;
        this.ciudadService = ciudadService;
        this.imagenService = imagenService;
        this.caracteristicaService = caracteristicaService;
        this.puntuacionService = puntuacionService;
        this.usuarioService = usuarioService;
    }

    @Override
    public ProductoDTO crear(ProductoDTO productoDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosCreacion(productoDTO);
        Producto guardado = productoRepository.save(mapper.convertValue(productoDTO, Producto.class));
        return setearEntidadesDeLaBaseDeDatos(guardado);
    }

    @Override
    public ProductoDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        if (!productoRepository.existsById(id)) {
            throw new ResourceNotFoundException(
                    String.format(Mensajes.ERROR_NO_EXISTE, "El 'producto'", id));
        }
        Producto entidad = productoRepository.findById(id).get();
        List<PuntuacionDTO> puntuacionesDTO = puntuacionService.consultarTodos();
        ProductoDTO dto = mapper.convertValue(entidad, ProductoDTO.class);
        for (PuntuacionDTO puntuacion : puntuacionesDTO) {
            if (puntuacion.getProducto().getId().equals(entidad.getId())) {
                puntuacion.setProducto(new ProductoDTO(puntuacion.getProducto().getId()));
                puntuacion.setUsuario(new UsuarioDTO(puntuacion.getUsuario().getId()));
                dto.agregarPuntuacion(puntuacion);
            }
        }
        return dto;
    }

    @Override
    public List<ProductoDTO> consultarTodos() {
        List<Producto> entidades = productoRepository.findAll();
        List<ProductoDTO> dtos = new ArrayList<>();
        List<PuntuacionDTO> puntuacionesDTO = puntuacionService.consultarTodos();
        for (Producto entidad : entidades) {
            ProductoDTO dto = mapper.convertValue(entidad, ProductoDTO.class);
            for (PuntuacionDTO puntuacion : puntuacionesDTO) {
                if (puntuacion.getProducto().getId().equals(entidad.getId())) {
                    puntuacion.setProducto(new ProductoDTO(puntuacion.getProducto().getId()));
                    puntuacion.setUsuario(new UsuarioDTO(puntuacion.getUsuario().getId()));
                    dto.agregarPuntuacion(puntuacion);
                }
            }
            dtos.add(dto);
        }
        return dtos;
    }

    @Override
    public ProductoDTO actualizar(ProductoDTO productoDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(productoDTO);
        ProductoDTO productoActualizada;
        Optional<Producto> c = productoRepository.findById(productoDTO.getId());
        if (c.isPresent()) {
            Producto entidad = c.get();
            productoActualizada = actualizar(productoDTO, entidad);
        } else {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'producto'", productoDTO.getId()));
        }
        return productoActualizada;
    }

    @Override
    public void eliminar(Long id) throws ResourceNotFoundException, BadRequestException {
        validarId(id);
        productoRepository.deleteById(id);
    }

    @Override
    public Set<ProductoDTO> consultarPorCategoria(String tituloCategoria) throws ResourceNotFoundException {
        Set<Producto> entidades = productoRepository.buscarProductosPorCategoria(tituloCategoria);
        Set<ProductoDTO> dtos = new HashSet<>();
        for (Producto entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, ProductoDTO.class));
        }
        if (dtos.size() == 0) {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_CRITERIO_DE_BUSQUEDA_NO_EXISTE, "La categoría", tituloCategoria));
        }
        return dtos;
    }


    @Override
    public Set<ProductoDTO> consultarPorCiudad(String nombreCiudad) throws ResourceNotFoundException {
        Set<Producto> entidades = productoRepository.buscarProductosPorCiudad(nombreCiudad);
        Set<ProductoDTO> dtos = new HashSet<>();
        for (Producto entidad : entidades) {
            dtos.add(mapper.convertValue(entidad, ProductoDTO.class));
        }
        if (dtos.size() == 0) {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_CRITERIO_DE_BUSQUEDA_NO_EXISTE, "La ciudad", nombreCiudad));
        }
        return dtos;
    }

    @Override
    public UsuarioDTO agregarAFavoritos(Long idProducto, Long idUsuario) throws ResourceNotFoundException, BadRequestException {
        ProductoDTO producto = buscarPorId(idProducto);
        UsuarioDTO usuario = usuarioService.buscarPorId(idUsuario);
        Set<ProductoDTO> productosFavoritos = usuario.getProductosFavoritos();
        productosFavoritos.add(producto);
        usuario.setProductosFavoritos(productosFavoritos);
        usuarioService.actualizar(usuario);
        return usuario;
    }

    private void validarCamposRequeridosCreacion(ProductoDTO productoDTO) throws BadRequestException {
        if (productoDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Producto"));
        } else {
            if (productoDTO.getNombre() == null || productoDTO.getNombre().isEmpty() || productoDTO.getNombre().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "nombre"));
            if (productoDTO.getDescripcion() == null || productoDTO.getDescripcion().isEmpty() || productoDTO.getDescripcion().isBlank())
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "descripción"));
            if (productoDTO.getCategoria() == null || productoDTO.getCategoria().getId() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "categoría"));
            if (productoDTO.getCiudad() == null || productoDTO.getCiudad().getId() == null)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "ciudad"));
            if (productoDTO.getCaracteristicas() == null || productoDTO.getCaracteristicas().size() == 0)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "características"));
            if (productoDTO.getImagenes() == null || productoDTO.getImagenes().size() == 0)
                throw new BadRequestException(String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "imágenes"));
        }
    }

    private void validarCamposRequeridosActualizacion(ProductoDTO productoDTO) throws BadRequestException {
        if (productoDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Producto"));
        } else {
            if (productoDTO.getId() == null)
                throw new BadRequestException(Mensajes.ERROR_ID_ES_NULL);
            if (productoDTO.getId() < 1)
                throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        }
    }

    private ProductoDTO actualizar(ProductoDTO productoDTO, Producto entidad) {
        if (productoDTO.getNombre() != null && !productoDTO.getNombre().isEmpty() && !productoDTO.getNombre().isBlank())
            entidad.setNombre(productoDTO.getNombre());
        if (productoDTO.getDescripcion() != null && !productoDTO.getDescripcion().isEmpty() && !productoDTO.getDescripcion().isBlank())
            entidad.setDescripcion(productoDTO.getDescripcion());
        if (productoDTO.getCategoria() != null)
            entidad.setCategoria(mapper.convertValue(productoDTO.getCategoria(), Categoria.class));
        if (productoDTO.getCiudad() != null)
            entidad.setCiudad(mapper.convertValue(productoDTO.getCiudad(), Ciudad.class));
        Producto entidadActualizada = productoRepository.save(entidad);
        return mapper.convertValue(entidadActualizada, ProductoDTO.class);
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!productoRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'producto'", id));
    }

    private ProductoDTO setearEntidadesDeLaBaseDeDatos(Producto producto) throws BadRequestException, ResourceNotFoundException {
        ProductoDTO productoDTO = new ProductoDTO();
        productoDTO.setId(producto.getId());
        productoDTO.setNombre(producto.getNombre());
        productoDTO.setDescripcion(producto.getDescripcion());
        productoDTO.setCategoria(categoriaService.buscarPorId(producto.getCategoria().getId()));
        productoDTO.setCiudad(ciudadService.buscarPorId(producto.getCiudad().getId()));
        productoDTO.setImagenes(obtenerImagenesRelacionadas(producto));
        productoDTO.setCaracteristicas(caracteristicaService.consultarPorProductoID(producto.getId()));
        productoDTO.setPuntuaciones(puntuacionService.consultarPorProductoID(producto.getId()));
        return productoDTO;
    }

    private Set<ImagenDTO> obtenerImagenesRelacionadas(Producto producto) {
        Set<ImagenDTO> imagenes = new HashSet<>();
        for (ImagenDTO imagenEnBD : imagenService.consultarTodos()) {
            for (Imagen imagenEnProducto : producto.getImagenes()) {
                if (Objects.equals(imagenEnBD.getId(), imagenEnProducto.getId())) {
                    imagenes.add(imagenEnBD);
                }
            }
        }
        return imagenes;
    }
}