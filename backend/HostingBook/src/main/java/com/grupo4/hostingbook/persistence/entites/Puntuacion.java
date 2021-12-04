package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "puntuaciones")
public class Puntuacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="puntuacion_id")
    private Long id;
    private Integer puntuacion;
    private String comentario;
    private LocalDate fecha;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_producto")
    private Producto producto;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_usuario")
    private Usuario usuario;

    public Puntuacion() {}

    public Puntuacion(Long id) {
        this.id = id;
    }

    public Puntuacion(Integer puntuacion,
                      String comentario,
                      LocalDate fecha,
                      Producto producto,
                      Usuario usuario) {
        this.puntuacion = puntuacion;
        this.comentario = comentario;
        this.fecha = fecha;
        this.producto = producto;
        this.usuario = usuario;
    }

    public Puntuacion(Long id,
                      Integer puntuacion,
                      String comentario,
                      LocalDate fecha,
                      Producto producto,
                      Usuario usuario) {
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

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Puntuacion)) return false;
        Puntuacion that = (Puntuacion) o;
        return Objects.equals(id, that.id) && Objects.equals(puntuacion, that.puntuacion) && Objects.equals(producto, that.producto) && Objects.equals(usuario, that.usuario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, puntuacion, producto, usuario);
    }
}
