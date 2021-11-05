package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="producto_id")
    private Long id;
    private String nombre;
    private String descripcion;

    @OneToMany
    @JoinColumn(name = "fk_categoria", nullable = false)
    private Categoria categoria;

    @OneToMany
    @JoinColumn(name = "fk_ciudades", nullable = false)
    private Ciudad ciudad;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "productos")
    private Set<Imagen> imagenes = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "producto_caracteristica",
            joinColumns = @JoinColumn(name = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "caracteristica_id")
    )
    private Set<Caracteristica> caracteristicas = new HashSet<>();

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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Producto producto = (Producto) o;
        return Objects.equals(id, producto.id) && Objects.equals(nombre, producto.nombre) && Objects.equals(descripcion, producto.descripcion) && Objects.equals(categoria, producto.categoria) && Objects.equals(ciudad, producto.ciudad) && Objects.equals(imagenes, producto.imagenes) && Objects.equals(caracteristicas, producto.caracteristicas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, descripcion, categoria, ciudad, imagenes, caracteristicas);
    }
}
