package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class ProductoDTO implements Serializable {

    private Long id;
    private String nombre;
    private String descripcion;
    private CategoriaDTO categoria;
    private CiudadDTO ciudad;
    private Set<PoliticaDTO> politicas = new HashSet<>();
    private Set<ImagenDTO> imagenes = new HashSet<>();
    private Set<CaracteristicaDTO> caracteristicas = new HashSet<>();
    private Set<PuntuacionDTO> puntuaciones = new HashSet<>();
    private Set<UsuarioDTO> usuarios = new HashSet<>();

    public ProductoDTO() {
    }

    public ProductoDTO(Long id) {
        this.id = id;
    }

    public ProductoDTO(String nombre,
                       String descripcion,
                       CategoriaDTO categoria,
                       CiudadDTO ciudad,
                       Set<ImagenDTO> imagenes,
                       Set<CaracteristicaDTO> caracteristicas) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
    }

    public ProductoDTO(Long id,
                       String nombre,
                       String descripcion,
                       CategoriaDTO categoria,
                       CiudadDTO ciudad,
                       Set<ImagenDTO> imagenes,
                       Set<CaracteristicaDTO> caracteristicas) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
    }

    public ProductoDTO(Long id, String nombre, String descripcion, CategoriaDTO categoria, CiudadDTO ciudad,
            Set<PoliticaDTO> politicas, Set<ImagenDTO> imagenes, Set<CaracteristicaDTO> caracteristicas) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.politicas = politicas;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
    }

    public ProductoDTO(String nombre, String descripcion, CategoriaDTO categoria, CiudadDTO ciudad,
            Set<PoliticaDTO> politicas, Set<ImagenDTO> imagenes, Set<CaracteristicaDTO> caracteristicas) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.politicas = politicas;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
    }

    public ProductoDTO(Long id, String nombre, String descripcion, CategoriaDTO categoria, CiudadDTO ciudad, Set<PoliticaDTO> politicas, Set<ImagenDTO> imagenes, Set<CaracteristicaDTO> caracteristicas, Set<PuntuacionDTO> puntuaciones, Set<UsuarioDTO> usuarios) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.politicas = politicas;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.puntuaciones = puntuaciones;
        this.usuarios = usuarios;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public CategoriaDTO getCategoria() {
        return categoria;
    }

    public void setCategoria(CategoriaDTO categoria) {
        this.categoria = categoria;
    }

    public CiudadDTO getCiudad() {
        return ciudad;
    }

    public void setCiudad(CiudadDTO ciudad) {
        this.ciudad = ciudad;
    }

    public Set<ImagenDTO> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<ImagenDTO> imagenes) {
        this.imagenes = imagenes;
    }

    public Set<CaracteristicaDTO> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<CaracteristicaDTO> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Set<PoliticaDTO> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(Set<PoliticaDTO> politicas) {
        this.politicas = politicas;
    }

    public Set<PuntuacionDTO> getPuntuaciones() {
        return puntuaciones;
    }

    public void setPuntuaciones(Set<PuntuacionDTO> puntuaciones) {
        this.puntuaciones = puntuaciones;
    }

    public Set<UsuarioDTO> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Set<UsuarioDTO> usuarios) {
        this.usuarios = usuarios;
    }

    public void agregarPuntuacion(PuntuacionDTO puntuacionDTO) {
        this.puntuaciones.add(puntuacionDTO);
    }

    public void agregarUsuario(UsuarioDTO usuarioDTO) {
        this.usuarios.add(usuarioDTO);
    }

    public void eliminarUsuario(UsuarioDTO usuarioDTO) {
        this.usuarios.remove(usuarioDTO);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProductoDTO)) return false;
        ProductoDTO that = (ProductoDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(nombre, that.nombre) && Objects.equals(descripcion, that.descripcion) && Objects.equals(categoria, that.categoria) && Objects.equals(ciudad, that.ciudad) && Objects.equals(politicas, that.politicas) && Objects.equals(imagenes, that.imagenes) && Objects.equals(caracteristicas, that.caracteristicas) && Objects.equals(puntuaciones, that.puntuaciones) && Objects.equals(usuarios, that.usuarios);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, descripcion, categoria, ciudad, politicas, imagenes, caracteristicas, puntuaciones, usuarios);
    }

    @Override
    public String toString() {
        Set<ImagenDTO> imagenesToString = new HashSet<>();
        for (ImagenDTO i : imagenes) {
            i.toString();
            imagenesToString.add(i);
        }

        Set<CaracteristicaDTO> caracteristicasToString = new HashSet<>();
        for (CaracteristicaDTO c : caracteristicas) {
            c.toString();
            caracteristicasToString.add(c);
        }
        Set<PoliticaDTO> politicasToString = new HashSet<>();
        for (PoliticaDTO p : politicas) {
            p.toString();
            politicasToString.add(p);
        }
        return "ProductoDTO{" + "id=" + id + ", nombre='" + nombre + '\'' + ", descripcion='" + descripcion + '\''
                + ", categoria=" + categoria.toString() + ", ciudad=" + ciudad.toString() + ", imagenes="
                + imagenesToString + ", caracteristicas=" + caracteristicasToString + ", caracteristicas="
                + politicasToString + '}';
    }
}
