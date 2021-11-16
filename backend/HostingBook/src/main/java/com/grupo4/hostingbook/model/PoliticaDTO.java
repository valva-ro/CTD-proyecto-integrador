package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.util.Objects;

public class PoliticaDTO implements Serializable {

    private Long id;
    private String nombre;
    private TipoPoliticaDTO tipoPolitica;

    public PoliticaDTO() {
    }

    public PoliticaDTO(Long id) {
        this.id = id;
    }

    public PoliticaDTO(String nombre, TipoPoliticaDTO tipoPolitica) {
        this.nombre = nombre;
        this.tipoPolitica = tipoPolitica;
    }

    public PoliticaDTO(Long id, String nombre, TipoPoliticaDTO tipoPolitica) {
        this.id = id;
        this.nombre = nombre;
        this.tipoPolitica = tipoPolitica;
    }

    public PoliticaDTO(Long id, String nombre) {
        this.id = id;
        this.nombre = nombre;
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

    public TipoPoliticaDTO getTipoPolitica() {
        return tipoPolitica;
    }

    public void setTipoPolitica(TipoPoliticaDTO tipoPolitica) {
        this.tipoPolitica = tipoPolitica;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PoliticaDTO)) return false;
        PoliticaDTO that = (PoliticaDTO) o;
        return getId().equals(that.getId()) && getNombre().equals(that.getNombre()) && getTipoPolitica().equals(that.getTipoPolitica()) ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getNombre(), getTipoPolitica());
    }

    @Override
    public String toString() {
        return "PoliticaDTO{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", tipoPolitica=" + tipoPolitica +
                '}';
    }
}
