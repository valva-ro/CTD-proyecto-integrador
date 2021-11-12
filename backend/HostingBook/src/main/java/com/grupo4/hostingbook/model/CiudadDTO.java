package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.util.Objects;
import java.util.Set;

public class CiudadDTO implements Serializable {

    private Long id;
    private String nombre;
    private String pais;
    private double latitud;
    private double longitud;
    private Set<ProductoDTO> productos;

    public CiudadDTO(){}

    public CiudadDTO(Long id) {
        this.id = id;
    }

    public CiudadDTO(String nombre, String pais, double latitud, double longitud) {
        this.nombre = nombre;
        this.pais = pais;
        this.latitud = latitud;
        this.longitud = longitud;
    }

    public CiudadDTO(Long id, String nombre, String pais, double latitud, double longitud) {
        this.id = id;
        this.nombre = nombre;
        this.pais = pais;
        this.latitud = latitud;
        this.longitud = longitud;
    }

    public CiudadDTO(Long id, String nombre, String pais, double latitud, double longitud, Set<ProductoDTO> productos) {
        this.id = id;
        this.nombre = nombre;
        this.pais = pais;
        this.latitud = latitud;
        this.longitud = longitud;
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

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public double getLatitud() {return latitud;}

    public void setLatitud(double latitud) {this.latitud = latitud;}

    public double getLongitud() {return longitud;}

    public void setLongitud(double longitud) {this.longitud = longitud;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CiudadDTO)) return false;
        CiudadDTO ciudadDTO = (CiudadDTO) o;
        return Objects.equals(id, ciudadDTO.id) && Objects.equals(nombre, ciudadDTO.nombre) && Objects.equals(pais, ciudadDTO.pais) && Objects.equals(latitud, ciudadDTO.latitud) && Objects.equals(longitud, ciudadDTO.longitud);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, pais, latitud, longitud);
    }

    @Override
    public String toString() {
        return "CiudadDTO{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", pais='" + pais + '\'' +
                ", latitud='" + latitud + '\'' +
                ", longitud='" + longitud + '\'' +
                '}';
    }
}
