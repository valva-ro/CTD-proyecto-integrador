package com.grupo4.hostingbook.persistence.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="usuario_id")
    private Long id;
    private String nombre;
    private String apellido;
    private String mail;
    private String contrasenia;
    @Column(name="cuenta_validada")
    private Boolean cuentaValidada;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_rol")
    private Rol rol;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore
    private Set<Reserva> reservas = new HashSet<>();

    @ManyToMany(cascade = {
            CascadeType.DETACH,
            CascadeType.REFRESH,
            CascadeType.REMOVE
    }, fetch = FetchType.EAGER)
    @JoinTable(
            name = "usuario_producto",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "producto_id")
    )
    private Set<Producto> productosFavoritos = new HashSet<>();

    @OneToMany(mappedBy = "puntuacion")
    @JsonIgnore
    private Set<Puntuacion> puntuaciones = new HashSet<>();

    public Usuario() {
    }

    public Usuario(Long id) {
        this.id = id;
    }

    public Usuario(String nombre, String apellido, String mail, String contrasenia, Boolean cuentaValidada, Rol rol, Set<Reserva> reservas, Set<Producto> productosFavoritos, Set<Puntuacion> puntuaciones) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.cuentaValidada = cuentaValidada;
        this.rol = rol;
        this.reservas = reservas;
        this.productosFavoritos = productosFavoritos;
        this.puntuaciones = puntuaciones;
    }

    public Usuario(Long id, String nombre, String apellido, String mail, String contrasenia, Boolean cuentaValidada, Rol rol, Set<Reserva> reservas, Set<Producto> productosFavoritos, Set<Puntuacion> puntuaciones) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.cuentaValidada = cuentaValidada;
        this.rol = rol;
        this.reservas = reservas;
        this.productosFavoritos = productosFavoritos;
        this.puntuaciones = puntuaciones;
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

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

    public Boolean getCuentaValidada() {
        return cuentaValidada;
    }

    public void setCuentaValidada(Boolean cuentaValidada) {
        this.cuentaValidada = cuentaValidada;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    public Set<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reserva> reservas) {
        this.reservas = reservas;
    }

    public Set<Producto> getProductosFavoritos() {
        return productosFavoritos;
    }

    public void setProductosFavoritos(Set<Producto> productosFavoritos) {
        this.productosFavoritos = productosFavoritos;
    }

    public Set<Puntuacion> getPuntuaciones() {
        return puntuaciones;
    }

    public void setPuntuaciones(Set<Puntuacion> puntuaciones) {
        this.puntuaciones = puntuaciones;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Usuario)) return false;
        Usuario usuario = (Usuario) o;
        return Objects.equals(id, usuario.id) && Objects.equals(nombre, usuario.nombre) && Objects.equals(apellido, usuario.apellido) && Objects.equals(mail, usuario.mail) && Objects.equals(contrasenia, usuario.contrasenia) && Objects.equals(cuentaValidada, usuario.cuentaValidada) && Objects.equals(rol, usuario.rol) && Objects.equals(reservas, usuario.reservas) && Objects.equals(productosFavoritos, usuario.productosFavoritos) && Objects.equals(puntuaciones, usuario.puntuaciones);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, apellido, mail, contrasenia, cuentaValidada, rol, reservas, productosFavoritos, puntuaciones);
    }
}
