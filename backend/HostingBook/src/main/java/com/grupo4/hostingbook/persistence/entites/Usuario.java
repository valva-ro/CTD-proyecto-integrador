package com.grupo4.hostingbook.persistence.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.grupo4.hostingbook.model.UsuarioDTO;

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


    @OneToMany(mappedBy = "puntuacion")
    @JsonIgnore
    private Set<Puntuacion> puntuaciones = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_usuario")
    private Set<Reserva> reservas = new HashSet<>();

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.DETACH,
            CascadeType.REFRESH,
            CascadeType.REMOVE
    })
    @JoinTable(
            name = "usuario_producto",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "producto_id")
    )
    private Set<Producto> productosFavoritos = new HashSet<>();

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "fk_rol")
    private Rol rol;

    public Usuario() {}

    public Usuario(Long id) {
        this.id = id;
    }

    public Usuario(Long id, String nombre, String apellido, String mail, String contrasenia) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
    }

    public Usuario(String nombre,
                   String apellido,
                   String mail,
                   String contrasenia,
                   Set<Producto> productosFavoritos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.productosFavoritos = productosFavoritos;
    }

    public Usuario(String nombre,
                   String apellido,
                   String mail,
                   String contrasenia,
                   Set<Producto> productosFavoritos,
                   Rol rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.productosFavoritos = productosFavoritos;
        this.rol = rol;
    }

    public Usuario(Long id,
                   String nombre,
                   String apellido,
                   String mail,
                   String contrasenia,
                   Set<Producto> productosFavoritos,
                   Rol rol) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.productosFavoritos = productosFavoritos;
        this.rol = rol;
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

    public Set<Producto> getProductosFavoritos() {
        return productosFavoritos;
    }

    public void setProductosFavoritos(Set<Producto> productosFavoritos) {
        this.productosFavoritos = productosFavoritos;
    }

    public Boolean getCuentaValidada() {
        return cuentaValidada;
    }

    public void setCuentaValidada(Boolean cuentaValidada) {
        this.cuentaValidada = cuentaValidada;
    }

    public Set<Puntuacion> getPuntuaciones() {
        return puntuaciones;
    }

    public void setPuntuaciones(Set<Puntuacion> puntuaciones) {
        this.puntuaciones = puntuaciones;
    }

    public Rol getRol() { return rol; }

    public void setRol(Rol rol) { this.rol = rol; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario = (Usuario) o;
        return id.equals(usuario.id) && nombre.equals(usuario.nombre) && apellido.equals(usuario.apellido) && mail.equals(usuario.mail) && contrasenia.equals(usuario.contrasenia) && cuentaValidada.equals(usuario.cuentaValidada) && puntuaciones.equals(usuario.puntuaciones) && productosFavoritos.equals(usuario.productosFavoritos) && rol.equals(usuario.rol);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, apellido, mail, contrasenia, cuentaValidada, puntuaciones, productosFavoritos, rol);
    }
}
