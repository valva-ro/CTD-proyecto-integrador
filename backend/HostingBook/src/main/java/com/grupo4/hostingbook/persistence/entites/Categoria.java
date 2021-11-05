package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="categoria_id")
    private Long id;
    private String titulo;
    private String descripcion;
    @Column(name="url_imagen")
    private String urlImagen;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "categorias")
    private Set<Producto> productos = new HashSet<>();

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
        Categoria categoria = (Categoria) o;
        return Objects.equals(id, categoria.id) && Objects.equals(titulo, categoria.titulo) && Objects.equals(descripcion, categoria.descripcion) && Objects.equals(urlImagen, categoria.urlImagen);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, titulo, descripcion, urlImagen);
    }
}
