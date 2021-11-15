package com.grupo4.hostingbook.persistence.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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

    @OneToMany(mappedBy = "puntuacion")
    @JsonIgnore
    private Set<Puntuacion> puntuaciones = new HashSet<>();

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

    public Usuario() {}

    public Usuario(Long id) {
        this.id = id;
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

    public Usuario(Long id,
                   String nombre,
                   String apellido,
                   String mail,
                   String contrasenia,
                   Set<Producto> productosFavoritos) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.productosFavoritos = productosFavoritos;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Usuario)) return false;
        Usuario that = (Usuario) o;
        return Objects.equals(id, that.id) && Objects.equals(nombre, that.nombre) && Objects.equals(apellido, that.apellido) && Objects.equals(mail, that.mail) && Objects.equals(contrasenia, that.contrasenia) && Objects.equals(productosFavoritos, that.productosFavoritos);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, apellido, mail, contrasenia, productosFavoritos);
    }
}
