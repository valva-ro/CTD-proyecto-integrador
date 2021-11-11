package com.grupo4.hostingbook.model;

import com.grupo4.hostingbook.persistence.entites.TipoPolitica;

import java.util.Objects;
import java.util.Set;

public class PoliticaDTO {

    private Long id;
    private String nombre;
    private TipoPolitica tipoPolitica;
    private Set<ProductoDTO> productos;

    public PoliticaDTO() {
    }

    public PoliticaDTO(Long id) {
        this.id = id;
    }

    public PoliticaDTO(String nombre, TipoPolitica tipoPolitica) {
        this.nombre = nombre;
        this.tipoPolitica = tipoPolitica;
    }

    public PoliticaDTO(Long id, String nombre, TipoPolitica tipoPolitica) {
        this.id = id;
        this.nombre = nombre;
        this.tipoPolitica = tipoPolitica;
    }

    public PoliticaDTO(Long id, String nombre, TipoPolitica tipoPolitica, Set<ProductoDTO> productos) {
        this.id = id;
        this.nombre = nombre;
        this.tipoPolitica = tipoPolitica;
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

    public TipoPolitica getTipoPolitica() {
        return tipoPolitica;
    }

    public void setTipoPolitica(TipoPolitica tipoPolitica) {
        this.tipoPolitica = tipoPolitica;
    }

    public Set<ProductoDTO> getProductos() {
        return productos;
    }

    public void setProductos(Set<ProductoDTO> productos) {
        this.productos = productos;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PoliticaDTO)) return false;
        PoliticaDTO that = (PoliticaDTO) o;
        return getId().equals(that.getId()) && getNombre().equals(that.getNombre()) && getTipoPolitica().equals(that.getTipoPolitica()) && getProductos().equals(that.getProductos());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getNombre(), getTipoPolitica(), getProductos());
    }

    @Override
    public String toString() {
        return "PoliticaDTO{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", tipoPolitica=" + tipoPolitica +
                ", productos=" + productos +
                '}';
    }
}
