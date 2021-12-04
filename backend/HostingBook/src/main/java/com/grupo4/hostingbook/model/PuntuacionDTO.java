package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

public class PuntuacionDTO implements Serializable {

    private Long id;
    private Integer puntuacion;
    private String comentario;
    private LocalDate fecha;
    private ProductoDTO producto;
    private UsuarioDTO usuario;

    public PuntuacionDTO() {}

    public PuntuacionDTO(Long id) {
        this.id = id;
    }

    public PuntuacionDTO(Integer puntuacion,
                         String comentario,
                         LocalDate fecha,
                         ProductoDTO producto,
                         UsuarioDTO usuario) {
        this.puntuacion = puntuacion;
        this.comentario = comentario;
        this.fecha = fecha;
        this.producto = producto;
        this.usuario = usuario;
    }

    public PuntuacionDTO(Long id,
                         Integer puntuacion,
                         String comentario,
                         LocalDate fecha,
                         ProductoDTO producto,
                         UsuarioDTO usuario) {
        this.id = id;
        this.puntuacion = puntuacion;
        this.comentario = comentario;
        this.fecha = fecha;
        this.producto = producto;
        this.usuario = usuario;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPuntuacion() {
        return puntuacion;
    }

    public void setPuntuacion(Integer puntuacion) {
        this.puntuacion = puntuacion;
    }

    public ProductoDTO getProducto() {
        return producto;
    }

    public void setProducto(ProductoDTO producto) {
        this.producto = producto;
    }

    public UsuarioDTO getUsuario() {
        return usuario;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public void setUsuario(UsuarioDTO usuario) {
        this.usuario = usuario;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PuntuacionDTO)) return false;
        PuntuacionDTO that = (PuntuacionDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(puntuacion, that.puntuacion) && Objects.equals(producto, that.producto) && Objects.equals(usuario, that.usuario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, puntuacion, producto, usuario);
    }
}
