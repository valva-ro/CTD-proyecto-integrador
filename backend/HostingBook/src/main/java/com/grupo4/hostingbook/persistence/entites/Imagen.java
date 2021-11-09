package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="imagen_id")
    private Long imagenId;
    private String imagenTitulo;
    @Column(name="imagen_URL")
    private String imagenUrl;

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
        Imagen imagen = (Imagen) o;
        return Objects.equals(imagenId, imagen.imagenId) && Objects.equals(imagenTitulo, imagen.imagenTitulo) && Objects.equals(imagenUrl, imagen.imagenUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(imagenId, imagenTitulo, imagenUrl);
    }

}
