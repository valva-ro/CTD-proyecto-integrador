package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class UsuarioDTO implements Serializable {

    private Long id;
    private String nombre;
    private String apellido;
    private String mail;
    private String contrasenia;
    private Boolean cuentaValidada;
    private RolDTO rol;
    private Set<ReservaDTO> reservas = new HashSet<>();
    private Set<ProductoDTO> productosFavoritos = new HashSet<>();
    private Set<PuntuacionDTO> puntuaciones = new HashSet<>();

    public UsuarioDTO() {
    }

    public UsuarioDTO(Long id) {
        this.id = id;
    }

    public UsuarioDTO(String nombre, String apellido, String mail, String contrasenia, Boolean cuentaValidada, RolDTO rol, Set<ReservaDTO> reservas, Set<ProductoDTO> productos, Set<PuntuacionDTO> puntuaciones) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.cuentaValidada = cuentaValidada;
        this.rol = rol;
        this.reservas = reservas;
        this.productosFavoritos = productos;
        this.puntuaciones = puntuaciones;
    }

    public UsuarioDTO(Long id, String nombre, String apellido, String mail, String contrasenia, Boolean cuentaValidada, RolDTO rol, Set<ReservaDTO> reservas, Set<ProductoDTO> productos, Set<PuntuacionDTO> puntuaciones) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.cuentaValidada = cuentaValidada;
        this.rol = rol;
        this.reservas = reservas;
        this.productosFavoritos = productos;
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

    public RolDTO getRol() {
        return rol;
    }

    public void setRol(RolDTO rol) {
        this.rol = rol;
    }

    public Set<ReservaDTO> getReservas() {
        return reservas;
    }

    public void setReservas(Set<ReservaDTO> reservas) {
        this.reservas = reservas;
    }

    public Set<ProductoDTO> getProductosFavoritos() {
        return productosFavoritos;
    }

    public void setProductosFavoritos(Set<ProductoDTO> productosFavoritos) {
        this.productosFavoritos = productosFavoritos;
    }

    public Set<PuntuacionDTO> getPuntuaciones() {
        return puntuaciones;
    }

    public void setPuntuaciones(Set<PuntuacionDTO> puntuaciones) {
        this.puntuaciones = puntuaciones;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UsuarioDTO)) return false;
        UsuarioDTO that = (UsuarioDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(nombre, that.nombre) && Objects.equals(apellido, that.apellido) && Objects.equals(mail, that.mail) && Objects.equals(contrasenia, that.contrasenia) && Objects.equals(cuentaValidada, that.cuentaValidada) && Objects.equals(rol, that.rol) && Objects.equals(reservas, that.reservas) && Objects.equals(productosFavoritos, that.productosFavoritos) && Objects.equals(puntuaciones, that.puntuaciones);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, apellido, mail, contrasenia, cuentaValidada, rol, reservas, productosFavoritos, puntuaciones);
    }
}
