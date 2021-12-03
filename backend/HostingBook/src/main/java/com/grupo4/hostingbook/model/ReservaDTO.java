package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

public class ReservaDTO implements Serializable {

    private Long id;
    private Integer horaEntrada;
    private String nombre;
    private String apellido;
    private String mail;
    private String ciudad;
    private LocalDate fechaIngreso;
    private LocalDate fechaEgreso;
    private String datos;
    private Boolean vacunaCovid;
    private ProductoDTO producto;
    private UsuarioDTO usuario;

    public ReservaDTO() {
    }

    public ReservaDTO(Long id) {
        this.id = id;
    }

    public ReservaDTO(Integer horaEntrada, String nombre, String apellido, String mail, String ciudad, LocalDate fechaIngreso, LocalDate fechaEgreso, String datos, Boolean vacunaCovid, UsuarioDTO usuario, ProductoDTO producto) {
        this.horaEntrada = horaEntrada;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.ciudad = ciudad;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.datos = datos;
        this.vacunaCovid = vacunaCovid;
        this.usuario = usuario;
        this.producto = producto;
    }

    public ReservaDTO(Long id, Integer horaEntrada, String nombre, String apellido, String mail, String ciudad, LocalDate fechaIngreso, LocalDate fechaEgreso, String datos, Boolean vacunaCovid, UsuarioDTO usuario, ProductoDTO producto) {
        this.id = id;
        this.horaEntrada = horaEntrada;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.ciudad = ciudad;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.datos = datos;
        this.vacunaCovid = vacunaCovid;
        this.usuario = usuario;
        this.producto = producto;
    }

    public Long getId() {return id;}

    public void setId(Long id) {this.id = id;}

    public Integer getHoraEntrada() {return horaEntrada;}

    public void setHoraEntrada(Integer horaEntrada) {this.horaEntrada = horaEntrada;}

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

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public LocalDate getFechaIngreso() {return fechaIngreso;}

    public void setFechaIngreso(LocalDate fechaIngreso) {this.fechaIngreso = fechaIngreso;}

    public LocalDate getFechaEgreso() {return fechaEgreso;}

    public void setFechaEgreso(LocalDate fechaEgreso) {this.fechaEgreso = fechaEgreso;}

    public String getDatos() {return datos;}

    public void setDatos(String datos) {this.datos = datos;}

    public Boolean getVacunaCovid() {return vacunaCovid;}

    public void setVacunaCovid(Boolean vacunaCovid) {this.vacunaCovid = vacunaCovid;}

    public UsuarioDTO getUsuario() {return usuario;}

    public void setUsuario(UsuarioDTO usuario) {this.usuario = usuario;}

    public ProductoDTO getProducto() {return producto;}

    public void setProducto(ProductoDTO producto) {this.producto = producto;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReservaDTO that = (ReservaDTO) o;
        return id.equals(that.id) && horaEntrada.equals(that.horaEntrada) && nombre.equals(that.nombre) && apellido.equals(that.apellido) && mail.equals(that.mail) && ciudad.equals(that.ciudad) && fechaIngreso.equals(that.fechaIngreso) && fechaEgreso.equals(that.fechaEgreso) && datos.equals(that.datos) && vacunaCovid.equals(that.vacunaCovid) && usuario.equals(that.usuario) && producto.equals(that.producto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, horaEntrada, nombre, apellido, mail, ciudad, fechaIngreso, fechaEgreso, datos, vacunaCovid, usuario, producto);
    }

    @Override
    public String toString() {
        return "ReservaDTO{" +
                "id=" + id +
                ", horaEntrada=" + horaEntrada +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", mail='" + mail + '\'' +
                ", ciudad='" + ciudad + '\'' +
                ", fechaIngreso=" + fechaIngreso +
                ", fechaEgreso=" + fechaEgreso +
                ", datos='" + datos + '\'' +
                ", vacunaCovid=" + vacunaCovid +
                ", producto=" + producto +
                ", usuario=" + usuario +
                '}';
    }
}
