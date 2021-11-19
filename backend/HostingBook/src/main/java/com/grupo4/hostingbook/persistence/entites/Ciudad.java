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
    private Double latitud;
    private Double longitud;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "ciudad", fetch = FetchType.EAGER)
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

    public Double getLatitud() {return latitud;}

    public void setLatitud(Double latitud) {this.latitud = latitud;}

    public Double getLongitud() {return longitud;}

    public void setLongitud(Double longitud) {this.longitud = longitud;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Ciudad)) return false;
        Ciudad ciudad = (Ciudad) o;
        return Objects.equals(id, ciudad.id) && Objects.equals(nombre, ciudad.nombre) && Objects.equals(pais, ciudad.pais) && Objects.equals(latitud, ciudad.latitud) && Objects.equals(longitud, ciudad.longitud);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, pais, latitud, longitud);
    }

}