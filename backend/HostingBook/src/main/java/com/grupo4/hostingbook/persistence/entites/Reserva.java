package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="reserva_id")
    private Long id;
    private LocalTime horaEntrada;
    private LocalTime horaSalida;
    private LocalDate fechaIngreso;
    private LocalDate fechaEgreso;
    private String datos;
    private Boolean vacunaCovid;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_producto")
    private Producto producto;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_usuario")
    private Usuario usuario;

    public Reserva() {}

    public Reserva(LocalTime horaEntrada, LocalTime horaSalida, LocalDate fechaIngreso, LocalDate fechaEgreso, String datos, Boolean vacunaCovid, Producto producto, Usuario usuario) {
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.datos = datos;
        this.vacunaCovid = vacunaCovid;
        this.producto = producto;
        this.usuario = usuario;
    }

    public Reserva(Long id, LocalTime horaEntrada, LocalTime horaSalida, LocalDate fechaIngreso, LocalDate fechaEgreso, String datos, Boolean vacunaCovid, Producto producto, Usuario usuario) {
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

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public LocalTime getHoraEntrada() { return horaEntrada; }

    public void setHoraEntrada(LocalTime horaEntrada) {this.horaEntrada = horaEntrada;}

    public LocalTime getHoraSalida() {return horaSalida;}

    public void setHoraSalida(LocalTime horaSalida) {this.horaSalida = horaSalida;}

    public LocalDate getFechaIngreso() {return fechaIngreso;}

    public void setFechaIngreso(LocalDate fechaIngreso) {this.fechaIngreso = fechaIngreso;}

    public LocalDate getFechaEgreso() {return fechaEgreso;}

    public void setFechaEgreso(LocalDate fechaEgreso) {this.fechaEgreso = fechaEgreso;}

    public String getDatos() {return datos;}

    public void setDatos(String datos) {this.datos = datos;}

    public Boolean getVacunaCovid() {return vacunaCovid;}

    public void setVacunaCovid(Boolean vacunaCovid) {this.vacunaCovid = vacunaCovid;}

    public Producto getProducto() {return producto;}

    public void setProducto(Producto producto) {this.producto = producto;}

    public Usuario getUsuario() {return usuario;}

    public void setUsuario(Usuario usuario) {this.usuario = usuario;}

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