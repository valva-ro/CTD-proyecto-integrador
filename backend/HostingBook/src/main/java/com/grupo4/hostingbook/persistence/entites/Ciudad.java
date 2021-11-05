package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "ciudades")
public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ciudad_id")
    private Long id;
    private String nombre;
    private String pais;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ciudades")
    private Set<Producto> productos = new HashSet<>();

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
        if (!(o instanceof Ciudad)) return false;
        Ciudad ciudad = (Ciudad) o;
        return Objects.equals(id, ciudad.id) && Objects.equals(nombre, ciudad.nombre) && Objects.equals(pais, ciudad.pais);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, pais);
    }
}
