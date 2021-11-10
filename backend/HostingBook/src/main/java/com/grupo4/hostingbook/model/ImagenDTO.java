package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.util.Objects;

public class ImagenDTO implements Serializable {

    private Long id;
    private String imagenTitulo;
    private String imagenUrl;

    public ImagenDTO() {}

    public ImagenDTO(Long id) {
        this.id = id;
    }

    public ImagenDTO(String imagenTitulo, String imagenUrl) {
        this.imagenTitulo = imagenTitulo;
        this.imagenUrl = imagenUrl;
    }

    public ImagenDTO(Long id, String imagenTitulo, String imagenUrl) {
        this.id = id;
        this.imagenTitulo = imagenTitulo;
        this.imagenUrl = imagenUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImagenTitulo() {
        return imagenTitulo;
    }

    public void setImagenTitulo(String imagenTitulo) {
        this.imagenTitulo = imagenTitulo;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ImagenDTO imagenDTO = (ImagenDTO) o;
        return Objects.equals(id, imagenDTO.id) && Objects.equals(imagenTitulo, imagenDTO.imagenTitulo) && Objects.equals(imagenUrl, imagenDTO.imagenUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, imagenTitulo, imagenUrl);
    }

    @Override
    public String toString() {
        return "ImagenDTO{" +
                "imagenId=" + id +
                ", imagenTitulo='" + imagenTitulo + '\'' +
                ", imagenUrl='" + imagenUrl + '\'' +
                '}';
    }
}
