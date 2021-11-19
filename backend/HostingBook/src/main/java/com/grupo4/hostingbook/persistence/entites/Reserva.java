package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="reserva_id")
    private Long id;
    private Time horaEntrada;
    private Time horaSalida;
    private Date fechaIngreso;
    private Date fechaEgreso;
    private String datos;
    private Boolean vacunaCovid;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "fk_producto")
    private Producto producto;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "fk_usuario")
    private Usuario usuario;

    //constructores
    public Reserva() {
    }

    public Reserva(Time horaEntrada, Time horaSalida, Date fechaIngreso, Date fechaEgreso, String datos, Boolean vacunaCovid, Producto producto, Usuario usuario) {
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.datos = datos;
        this.vacunaCovid = vacunaCovid;
        this.producto = producto;
        this.usuario = usuario;
    }

    public Reserva(Long id, Time horaEntrada, Time horaSalida, Date fechaIngreso, Date fechaEgreso, String datos, Boolean vacunaCovid, Producto producto, Usuario usuario) {
        this.id = id;
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.datos = datos;
        this.vacunaCovid = vacunaCovid;
        this.producto = producto;
        this.usuario = usuario;
    }

    //getters y setters

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Time getHoraEntrada() { return horaEntrada; }

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

    public Producto getProducto() {return producto;}

    public void setProducto(Producto producto) {this.producto = producto;}

    public Usuario getUsuario() {return usuario;}

    public void setUsuario(Usuario usuario) {this.usuario = usuario;}

    //equals and hashcode

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reserva reserva = (Reserva) o;
        return id.equals(reserva.id) && horaEntrada.equals(reserva.horaEntrada) && horaSalida.equals(reserva.horaSalida) && fechaIngreso.equals(reserva.fechaIngreso) && fechaEgreso.equals(reserva.fechaEgreso) && datos.equals(reserva.datos) && vacunaCovid.equals(reserva.vacunaCovid) && producto.equals(reserva.producto) && usuario.equals(reserva.usuario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, horaEntrada, horaSalida, fechaIngreso, fechaEgreso, datos, vacunaCovid, producto, usuario);
    }
}