package com.grupo4.hostingbook.persistence.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "producto_id")
    private Long id;
    private String nombre;
    private String descripcion;
    private String direccion;
    @Column(name = "horario_check_in")
    private Integer horarioCheckIn;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "fk_categoria")
    private Categoria categoria;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "fk_ciudad")
    private Ciudad ciudad;

    @OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_producto")
    private Set<Imagen> imagenes = new HashSet<>();

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    @Transient
    private Set<Reserva> reservas = new HashSet<>();

    @OneToMany(mappedBy = "puntuacion")
    @JsonIgnore
    private List<Puntuacion> puntuaciones = new ArrayList<>();

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.DETACH,
            CascadeType.REFRESH,
            CascadeType.REMOVE
    }, fetch = FetchType.EAGER)
    @JoinTable(
            name = "politica_producto",
            joinColumns = @JoinColumn(name = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "politica_id")
    )
    private Set<Politica> politicas = new HashSet<>();

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name = "producto_caracteristica",
            joinColumns = @JoinColumn(name = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "caracteristica_id")
    )
    private Set<Caracteristica> caracteristicas = new HashSet<>();

    @ManyToMany(mappedBy = "productosFavoritos")
    private Set<Usuario> usuarios = new HashSet<>();

    public Producto() {
    }

    public Producto(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public Producto(String nombre, String descripcion, Categoria categoria, Ciudad ciudad, Set<Imagen> imagenes, Set<Caracteristica> caracteristicas) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
    }

    public Producto(String nombre, String descripcion, Integer horarioCheckIn, Categoria categoria, Ciudad ciudad, Set<Imagen> imagenes, Set<Reserva> reservas, List<Puntuacion> puntuaciones, Set<Politica> politicas, Set<Caracteristica> caracteristicas, Set<Usuario> usuarios) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.horarioCheckIn = horarioCheckIn;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenes = imagenes;
        this.reservas = reservas;
        this.puntuaciones = puntuaciones;
        this.politicas = politicas;
        this.caracteristicas = caracteristicas;
        this.usuarios = usuarios;
    }

    public Producto(Long id, String nombre, String descripcion, Integer horarioCheckIn, Categoria categoria, Ciudad ciudad, Set<Imagen> imagenes, Set<Reserva> reservas, List<Puntuacion> puntuaciones, Set<Politica> politicas, Set<Caracteristica> caracteristicas, Set<Usuario> usuarios) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.horarioCheckIn = horarioCheckIn;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenes = imagenes;
        this.reservas = reservas;
        this.puntuaciones = puntuaciones;
        this.politicas = politicas;
        this.caracteristicas = caracteristicas;
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

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public Set<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public List<Puntuacion> getPuntuaciones() {
        return puntuaciones;
    }

    public void setPuntuaciones(List<Puntuacion> puntuaciones) {
        this.puntuaciones = puntuaciones;
    }

    public Set<Politica> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(Set<Politica> politicas) {
        this.politicas = politicas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Producto producto = (Producto) o;
        return Objects.equals(id, producto.id) &&
                Objects.equals(nombre, producto.nombre) &&
                Objects.equals(descripcion, producto.descripcion) &&
                Objects.equals(direccion, producto.direccion) &&
                Objects.equals(categoria, producto.categoria) &&
                Objects.equals(ciudad, producto.ciudad) &&
                Objects.equals(imagenes, producto.imagenes) &&
                Objects.equals(caracteristicas, producto.caracteristicas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id,
                nombre,
                descripcion,
                direccion,
                categoria,
                ciudad,
                imagenes,
                caracteristicas);
    }
}
