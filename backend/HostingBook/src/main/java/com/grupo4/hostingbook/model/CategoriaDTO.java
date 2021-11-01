package com.grupo4.hostingbook.model;

import java.util.Objects;

public class CategoriaDTO {

    private Long id;
    private String titulo;
    private String descripcion;
    private String urlImagen;

    public CategoriaDTO() {}

    public CategoriaDTO(String titulo, String descripcion, String urlImagen) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
    }

    public CategoriaDTO(Long id, String titulo, String descripcion, String urlImagen) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CategoriaDTO that = (CategoriaDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(titulo, that.titulo) && Objects.equals(descripcion, that.descripcion) && Objects.equals(urlImagen, that.urlImagen);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, titulo, descripcion, urlImagen);
    }
}
