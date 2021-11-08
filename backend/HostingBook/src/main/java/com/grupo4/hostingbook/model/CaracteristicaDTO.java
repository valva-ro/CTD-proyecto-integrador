package com.grupo4.hostingbook.model;

import com.grupo4.hostingbook.persistence.entites.Producto;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Set;


public class CaracteristicaDTO implements Serializable {

    private Long id;
    private String nombre;
    private String icono;
    private Set<ProductoDTO> productos;


    public CaracteristicaDTO() {}

    public CaracteristicaDTO( String nombre, String icono) {
        this.nombre = nombre;
        this.icono = icono;
    }

    public CaracteristicaDTO(Long id, String nombre, String icono) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
    }

    public CaracteristicaDTO(Long id, String nombre, String icono, Set<ProductoDTO> productos) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
        this.productos = productos;
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

    public String getIcono() {
        return icono;
    }

    public void setIcono(String icono) {
        this.icono = icono;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CaracteristicaDTO)) return false;
        CaracteristicaDTO that = (CaracteristicaDTO) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getNombre(), that.getNombre()) && Objects.equals(getIcono(), that.getIcono());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getNombre(), getIcono());
    }

    @Override
    public String toString() {
        return "CaracteristicaDTO{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", icono='" + icono + '\'' +
                '}';
    }
}
