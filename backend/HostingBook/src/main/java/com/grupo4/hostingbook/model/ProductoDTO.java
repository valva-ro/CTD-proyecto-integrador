package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class ProductoDTO implements Serializable {

    private Long id;
    private String nombre;
    private String descripcion;
    private String direccion;
    private Integer horarioCheckIn;
    private CategoriaDTO categoria;
    private CiudadDTO ciudad;
    private Set<PoliticaDTO> politicas = new HashSet<>();
    private Set<ImagenDTO> imagenes = new HashSet<>();
    private Set<CaracteristicaDTO> caracteristicas = new HashSet<>();
    private Set<PuntuacionDTO> puntuaciones = new HashSet<>();
    private Set<ReservaDTO> reservas = new HashSet<>();
    private Set<UsuarioDTO> usuarios = new HashSet<>();

    public ProductoDTO() {
    }

    public ProductoDTO(Long id) {
        this.id = id;
    }

    public ProductoDTO(String nombre,
                       String descripcion,
                       Integer horarioCheckIn,
                       CategoriaDTO categoria,
                       CiudadDTO ciudad,
                       Set<ImagenDTO> imagenes,
                       Set<CaracteristicaDTO> caracteristicas) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.horarioCheckIn = horarioCheckIn;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
    }

    public ProductoDTO(Long id, String nombre, String descripcion, Integer horarioCheckIn, CategoriaDTO categoria, CiudadDTO ciudad,
                       Set<PoliticaDTO> politicas, Set<ImagenDTO> imagenes, Set<CaracteristicaDTO> caracteristicas) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.horarioCheckIn = horarioCheckIn;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.politicas = politicas;
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

    public ProductoDTO(String nombre, String descripcion, Integer horarioCheckIn, CategoriaDTO categoria, CiudadDTO ciudad, Set<PoliticaDTO> politicas, Set<ImagenDTO> imagenes, Set<CaracteristicaDTO> caracteristicas, Set<PuntuacionDTO> puntuaciones, Set<ReservaDTO> reservas, Set<UsuarioDTO> usuarios) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.horarioCheckIn = horarioCheckIn;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.politicas = politicas;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.puntuaciones = puntuaciones;
        this.reservas = reservas;
        this.usuarios = usuarios;
    }

    public ProductoDTO(Long id, String nombre, String descripcion, Integer horarioCheckIn, CategoriaDTO categoria, CiudadDTO ciudad, Set<PoliticaDTO> politicas, Set<ImagenDTO> imagenes, Set<CaracteristicaDTO> caracteristicas, Set<PuntuacionDTO> puntuaciones, Set<ReservaDTO> reservas, Set<UsuarioDTO> usuarios) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.horarioCheckIn = horarioCheckIn;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.politicas = politicas;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.puntuaciones = puntuaciones;
        this.reservas = reservas;
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

    public Integer getHorarioCheckIn() {
        return horarioCheckIn;
    }

    public void setHorarioCheckIn(Integer horarioCheckIn) {
        this.horarioCheckIn = horarioCheckIn;
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

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
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

    public void agregarPuntuacion(PuntuacionDTO puntuacionDTO) {
        this.puntuaciones.add(puntuacionDTO);
    }

    public Set<ReservaDTO> getReservas() { return reservas; }

    public void setReservas(Set<ReservaDTO> reservas) { this.reservas = reservas; }

    public Set<UsuarioDTO> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Set<UsuarioDTO> usuarios) {
        this.usuarios = usuarios;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductoDTO that = (ProductoDTO) o;
        return id.equals(that.id) && nombre.equals(that.nombre) && descripcion.equals(that.descripcion) && direccion.equals(that.direccion) && categoria.equals(that.categoria) && ciudad.equals(that.ciudad) && politicas.equals(that.politicas) && imagenes.equals(that.imagenes) && caracteristicas.equals(that.caracteristicas) && puntuaciones.equals(that.puntuaciones) && reservas.equals(that.reservas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, descripcion, direccion, categoria, ciudad, politicas, imagenes, caracteristicas, puntuaciones, reservas);
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
        Set<ReservaDTO> reservasToString = new HashSet<>();
        for (ReservaDTO r : reservas) {
            r.toString();
            reservasToString.add(r);
        }

        return "ProductoDTO{" + "id=" + id + ", nombre='" + nombre + '\'' + ", descripcion='" + descripcion + '\''
                + ", direccion='" + direccion + '\''
                + ", categoria=" + categoria.toString() + ", ciudad=" + ciudad.toString() + ", imagenes="
                + imagenesToString + ", caracteristicas=" + caracteristicasToString + ", politicas="
                + politicasToString + ", reservas=" + reservasToString +'}';
    }
}
