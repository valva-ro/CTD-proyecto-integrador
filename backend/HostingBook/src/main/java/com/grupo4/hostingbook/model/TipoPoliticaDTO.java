package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class TipoPoliticaDTO implements Serializable {
    private Long id;
    private String nombre;
    private Set<PoliticaDTO> politicas = new HashSet<>();

    public TipoPoliticaDTO() {
    }

    public TipoPoliticaDTO(Long id) {
        this.id = id;
    }

    public TipoPoliticaDTO(String nombre) {
        this.nombre = nombre;
    }

    public TipoPoliticaDTO(Long id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public TipoPoliticaDTO(Long id, String nombre, Set<PoliticaDTO> politicas) {
        this.id = id;
        this.nombre = nombre;
        this.politicas = politicas;
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

    public Set<PoliticaDTO> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(Set<PoliticaDTO> politicas) {
        this.politicas = politicas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TipoPoliticaDTO)) return false;
        TipoPoliticaDTO that = (TipoPoliticaDTO) o;
        return id.equals(that.id) && nombre.equals(that.nombre) && politicas.equals(that.politicas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, politicas);
    }

    @Override
    public String toString() {
        return "TipoPoliticaDTO{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", politicas=" + politicas +
                '}';
    }
}
