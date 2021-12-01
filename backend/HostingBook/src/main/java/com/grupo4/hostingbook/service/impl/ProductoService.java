package com.grupo4.hostingbook.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo4.hostingbook.exceptions.BadRequestException;
import com.grupo4.hostingbook.exceptions.Mensajes;
import com.grupo4.hostingbook.exceptions.ResourceNotFoundException;
import com.grupo4.hostingbook.model.ImagenDTO;
import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.model.PuntuacionDTO;
import com.grupo4.hostingbook.model.UsuarioDTO;
import com.grupo4.hostingbook.persistence.entites.Categoria;
import com.grupo4.hostingbook.persistence.entites.Ciudad;
import com.grupo4.hostingbook.persistence.entites.Imagen;
import com.grupo4.hostingbook.persistence.entites.Producto;
import com.grupo4.hostingbook.persistence.repository.IProductoRepository;
import com.grupo4.hostingbook.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.*;

@Service("ProductoService")
public class ProductoService implements IProductoService {

    private final IProductoRepository productoRepository;
    private final ObjectMapper mapper;
    private final CategoriaService categoriaService;
    private final CiudadService ciudadService;
    private final ImagenService imagenService;
    private final CaracteristicaService caracteristicaService;
    private final PoliticaService politicaService;
    private final PuntuacionService puntuacionService;
    private final UsuarioService usuarioService;

    @Autowired
    public ProductoService(IProductoRepository productoRepository, ObjectMapper mapper,
                           CategoriaService categoriaService, CiudadService ciudadService, ImagenService imagenService,
                           CaracteristicaService caracteristicaService, PuntuacionService puntuacionService,
                           UsuarioService usuarioService, PoliticaService politicaService) {
        this.productoRepository = productoRepository;
        this.mapper = mapper;
        this.categoriaService = categoriaService;
        this.ciudadService = ciudadService;
        this.imagenService = imagenService;
        this.caracteristicaService = caracteristicaService;
        this.politicaService = politicaService;
        this.puntuacionService = puntuacionService;
        this.usuarioService = usuarioService;
    }

    @Override
    public ProductoDTO crear(ProductoDTO productoDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosCreacion(productoDTO);
        if (productoDTO.getHorarioCheckIn() == null) {
            productoDTO.setHorarioCheckIn(14);
        }
        Producto guardado = productoRepository.save(mapper.convertValue(productoDTO, Producto.class));
        return setearEntidadesDeLaBaseDeDatos(guardado);
    }

    @Override
    public ProductoDTO buscarPorId(Long id) throws BadRequestException, ResourceNotFoundException {
        validarId(id);
        if (!productoRepository.existsById(id)) {
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'producto'", id));
        }
        Producto entidad = productoRepository.findById(id).get();
        return setearPuntuaciones(entidad);
    }

    @Override
    public List<ProductoDTO> consultarTodos() {
        List<Producto> entidades = productoRepository.findAll();
        List<ProductoDTO> dtos = new ArrayList<>();
        for (Producto entidad : entidades) {
            ProductoDTO dto = setearPuntuaciones(entidad);
            dtos.add(dto);
        }
        return dtos;
    }

    @Override
    public ProductoDTO actualizar(ProductoDTO productoDTO) throws BadRequestException, ResourceNotFoundException {
        validarCamposRequeridosActualizacion(productoDTO);
        ProductoDTO productoActualizado;
        Optional<Producto> p = productoRepository.findById(productoDTO.getId());
        if (p.isPresent()) {
            Producto entidad = p.get();
            System.out.println("QUINTO ---> "+productoDTO.getId());
            productoActualizado = actualizar(productoDTO, entidad);
            System.out.println("SEXTO ---> "+productoDTO.getId());
        } else {
            throw new ResourceNotFoundException(
                    String.format(Mensajes.ERROR_NO_EXISTE, "El 'producto'", productoDTO.getId()));
        }
        return productoActualizado;
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
            throw new ResourceNotFoundException(
                    String.format(Mensajes.ERROR_CRITERIO_DE_BUSQUEDA_NO_EXISTE, "La categoría", tituloCategoria));
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
            throw new ResourceNotFoundException(
                    String.format(Mensajes.ERROR_CRITERIO_DE_BUSQUEDA_NO_EXISTE, "La ciudad", nombreCiudad));
        }
        return dtos;
    }

    @Override
    public Set<Long> consultarProductosReservadosEntreFechas(LocalDate fechaIngreso, LocalDate fechaEgreso) {
        Set <Long> idProductos = productoRepository.buscarProductosReservadosEntreFechas(fechaIngreso, fechaEgreso);
        System.out.println(idProductos);
        return idProductos;
    }

    @Override
    public Set<ProductoDTO> consultarPorFechas(LocalDate fechaIngreso, LocalDate fechaEgreso)
            throws ResourceNotFoundException {
        Set<Long> ids = consultarProductosReservadosEntreFechas(fechaIngreso, fechaEgreso);
        List<ProductoDTO> dtos = consultarTodos();
        Iterator<ProductoDTO> itr = dtos.iterator();
        Set<ProductoDTO> aux = new HashSet<>(); ;
        for (Long id:ids){
            for (ProductoDTO dto:dtos){
                if (dto.getId().equals(id) && itr.hasNext()){
                    aux.add(dto);
                }
            }
        }
        for (ProductoDTO a:aux){
            if (dtos.contains(a)){
                dtos.remove(a);
            }
        }
        Set<ProductoDTO> dtosParseados = new HashSet<>();
        for(ProductoDTO dto:dtos) {
            dtosParseados.add(dto);
        }
        return dtosParseados;
    }

    @Override
    public Set<ProductoDTO> consultarPorCiudadYFechas(String nombreCiudad, LocalDate fechaIngreso, LocalDate fechaEgreso)
            throws ResourceNotFoundException {
        Set<Long> ids = consultarProductosReservadosEntreFechas(fechaIngreso, fechaEgreso); //productos ocupados en las fechas ingresadas
        Set<ProductoDTO> dtos = consultarPorCiudad(nombreCiudad);   //productos que se encuentran en la ciudad ingresada
        Iterator<ProductoDTO> itr = dtos.iterator();
        Set<ProductoDTO> aux = new HashSet<>(); ;
        for (Long id:ids){
            for (ProductoDTO dto:dtos){
                if (dto.getId().equals(id) && itr.hasNext()){
                    aux.add(dto);
                }
            }
        }
        for (ProductoDTO a:aux){
            if (dtos.contains(a)){
                dtos.remove(a);
            }
        }
        return dtos; //productos libres en la ciudad y fechas elegidas
    }

    public UsuarioDTO agregarAFavoritos(Long idProducto, Long idUsuario)
            throws ResourceNotFoundException, BadRequestException {
        ProductoDTO producto = buscarPorId(idProducto);
        UsuarioDTO usuario = usuarioService.buscarPorId(idUsuario);
        Set<ProductoDTO> productosFavoritos = usuario.getProductosFavoritos();
        productosFavoritos.add(producto);
        usuario.setProductosFavoritos(productosFavoritos);
        UsuarioDTO actualizado = mapper.convertValue(usuarioService.save(usuario), UsuarioDTO.class);
        return actualizado;
    }

    @Override
    @Transactional
    public UsuarioDTO quitarDeFavoritos(Long idProducto, Long idUsuario)
            throws ResourceNotFoundException, BadRequestException {
        ProductoDTO producto = buscarPorId(idProducto);
        UsuarioDTO usuario = usuarioService.buscarPorId(idUsuario);
        Set<ProductoDTO> productosFavoritos = usuario.getProductosFavoritos();
        Set<ProductoDTO> productosActualizados = new HashSet<>();
        for (ProductoDTO p : productosFavoritos) {
            if (!p.getId().equals(idProducto)) {
                productosActualizados.add(p);
            }
        }
        usuario.setProductosFavoritos(productosActualizados);
        UsuarioDTO actualizado = mapper.convertValue(usuarioService.save(usuario), UsuarioDTO.class);
        return actualizado;
    }

    private void validarCamposRequeridosCreacion(ProductoDTO productoDTO) throws BadRequestException {
        if (productoDTO == null) {
            throw new BadRequestException(String.format(Mensajes.ERROR_DTO_NO_EXISTE, "Producto"));
        } else {
            if (productoDTO.getNombre() == null || productoDTO.getNombre().isEmpty()
                    || productoDTO.getNombre().isBlank())
                throw new BadRequestException(
                        String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "nombre"));
            if (productoDTO.getDescripcion() == null || productoDTO.getDescripcion().isEmpty()
                    || productoDTO.getDescripcion().isBlank())
                throw new BadRequestException(
                        String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "descripción"));
            if (productoDTO.getCategoria() == null || productoDTO.getCategoria().getId() == null)
                throw new BadRequestException(
                        String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "categoría"));
            if (productoDTO.getCiudad() == null || productoDTO.getCiudad().getId() == null)
                throw new BadRequestException(
                        String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "ciudad"));
            if (productoDTO.getCaracteristicas() == null || productoDTO.getCaracteristicas().size() == 0)
                throw new BadRequestException(
                        String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "características"));
            if (productoDTO.getImagenes() == null || productoDTO.getImagenes().size() == 0)
                throw new BadRequestException(
                        String.format(Mensajes.ERROR_CREACION_CAMPO_REQUERIDO, "producto", "imágenes"));
            if (productoDTO.getHorarioCheckIn() < 0 || productoDTO.getHorarioCheckIn() > 23)
                throw new BadRequestException(
                        String.format(Mensajes.ERROR_CAMPO_FUERA_DE_RANGO, "horario de check-in", "0", "23"));
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
        if (productoDTO.getDescripcion() != null && !productoDTO.getDescripcion().isEmpty()
                && !productoDTO.getDescripcion().isBlank())
            entidad.setDescripcion(productoDTO.getDescripcion());
        if (productoDTO.getDireccion() != null && !productoDTO.getDireccion().isEmpty()
                && !productoDTO.getDireccion().isBlank())
            entidad.setDireccion(productoDTO.getDireccion());
        if (productoDTO.getHorarioCheckIn() != null)
            entidad.setHorarioCheckIn(productoDTO.getHorarioCheckIn());
        if (productoDTO.getCategoria() != null)
            entidad.setCategoria(mapper.convertValue(productoDTO.getCategoria(), Categoria.class));
        if (productoDTO.getCiudad() != null)
            entidad.setCiudad(mapper.convertValue(productoDTO.getCiudad(), Ciudad.class));

        System.out.println("DESCrIPCION ----> "+entidad.getDescripcion());

        Producto entidadActualizada = productoRepository.save(entidad);

        System.out.println("DESCrIPCION PARA MAPPEAR ----> "+entidadActualizada.getDescripcion());

        return mapper.convertValue(entidadActualizada, ProductoDTO.class);
    }

    private void validarId(Long id) throws BadRequestException, ResourceNotFoundException {
        if (id < 1)
            throw new BadRequestException(Mensajes.ERROR_ID_FUERA_DE_RANGO);
        if (!productoRepository.existsById(id))
            throw new ResourceNotFoundException(String.format(Mensajes.ERROR_NO_EXISTE, "El 'producto'", id));
    }

    private ProductoDTO setearEntidadesDeLaBaseDeDatos(Producto producto)
            throws BadRequestException, ResourceNotFoundException {
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

    private ProductoDTO setearPuntuaciones(Producto entidad) {
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