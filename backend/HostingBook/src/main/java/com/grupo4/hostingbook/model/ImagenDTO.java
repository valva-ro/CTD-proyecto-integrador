package com.grupo4.hostingbook.model;

import java.io.Serializable;
import java.util.Objects;

public class ImagenDTO implements Serializable {

    private Long imagenId;
    private String imagenTitulo;
    private String imagenUrl;

    public ImagenDTO() {}

    public ImagenDTO(String imagenTitulo, String imagenUrl) {
        this.imagenTitulo = imagenTitulo;
        this.imagenUrl = imagenUrl;
    }

    public ImagenDTO(Long imagenId, String imagenTitulo, String imagenUrl) {
        this.imagenId = imagenId;
        this.imagenTitulo = imagenTitulo;
        this.imagenUrl = imagenUrl;
    }

    public Long getImagenId() {
        return imagenId;
    }

    public void setImagenId(Long imagenId) {
        this.imagenId = imagenId;
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
        return Objects.equals(imagenId, imagenDTO.imagenId) && Objects.equals(imagenTitulo, imagenDTO.imagenTitulo) && Objects.equals(imagenUrl, imagenDTO.imagenUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(imagenId, imagenTitulo, imagenUrl);
    }
}
