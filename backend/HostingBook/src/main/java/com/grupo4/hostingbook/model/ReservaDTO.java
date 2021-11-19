package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import java.util.Objects;

public class ReservaDTO implements Serializable {

    private Long id;
    private Time horaEntrada;
    private Time horaSalida;
    private Date fechaIngreso;
    private Date fechaEgreso;
    private String datos;
    private Boolean vacunaCovid;

    private UsuarioDTO usuario;
    private ProductoDTO producto;

    public ReservaDTO() {
    }

    public ReservaDTO(Long id) {
        this.id = id;
    }

    public ReservaDTO(Time horaEntrada, Time horaSalida, Date fechaIngreso, Date fechaEgreso, String datos, Boolean vacunaCovid, UsuarioDTO usuario, ProductoDTO producto) {
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.datos = datos;
        this.vacunaCovid = vacunaCovid;
        this.usuario = usuario;
        this.producto = producto;
    }

    public ReservaDTO(Long id, Time horaEntrada, Time horaSalida, Date fechaIngreso, Date fechaEgreso, String datos, Boolean vacunaCovid, UsuarioDTO usuario, ProductoDTO producto) {
        this.id = id;
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.datos = datos;
        this.vacunaCovid = vacunaCovid;
        this.usuario = usuario;
        this.producto = producto;
    }

    public Long getId() {return id;}

    public void setId(Long id) {this.id = id;}

    public Time getHoraEntrada() {return horaEntrada;}

    public void setHoraEntrada(Time horaEntrada) {this.horaEntrada = horaEntrada;}

    public Time getHoraSalida() {return horaSalida;}

    public void setHoraSalida(Time horaSalida) {this.horaSalida = horaSalida;}

    public Date getFechaIngreso() {return fechaIngreso;}

    public void setFechaIngreso(Date fechaIngreso) {this.fechaIngreso = fechaIngreso;}

    public Date getFechaEgreso() {return fechaEgreso;}

    public void setFechaEgreso(Date fechaEgreso) {this.fechaEgreso = fechaEgreso;}

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
        return id.equals(that.id) && horaEntrada.equals(that.horaEntrada) && horaSalida.equals(that.horaSalida) && fechaIngreso.equals(that.fechaIngreso) && fechaEgreso.equals(that.fechaEgreso) && datos.equals(that.datos) && vacunaCovid.equals(that.vacunaCovid) && usuario.equals(that.usuario) && producto.equals(that.producto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, horaEntrada, horaSalida, fechaIngreso, fechaEgreso, datos, vacunaCovid, usuario, producto);
    }

    @Override
    public String toString() {
        return "ReservaDTO{" +
                "id=" + id +
                ", horaEntrada=" + horaEntrada +
                ", horaSalida=" + horaSalida +
                ", fechaIngreso=" + fechaIngreso +
                ", fechaEgreso=" + fechaEgreso +
                ", datos='" + datos + '\'' +
                ", vacunaCovid=" + vacunaCovid +
                ", usuario=" + usuario +
                ", producto=" + producto +
                '}';
    }
}
