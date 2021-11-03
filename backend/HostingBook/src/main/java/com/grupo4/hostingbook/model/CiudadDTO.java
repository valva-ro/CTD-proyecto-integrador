package com.grupo4.hostingbook.model;

import java.util.Objects;

public class CiudadDTO {

    private Long id;
    private String nombre;
    private String pais;

    public CiudadDTO(){}

    public CiudadDTO(String nombre, String pais) {
        this.nombre = nombre;
        this.pais = pais;
    }

    public CiudadDTO(Long id, String nombre, String pais) {
        this.id = id;
        this.nombre = nombre;
        this.pais = pais;
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

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CiudadDTO)) return false;
        CiudadDTO ciudadDTO = (CiudadDTO) o;
        return Objects.equals(id, ciudadDTO.id) && Objects.equals(nombre, ciudadDTO.nombre) && Objects.equals(pais, ciudadDTO.pais);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, pais);
    }
}
