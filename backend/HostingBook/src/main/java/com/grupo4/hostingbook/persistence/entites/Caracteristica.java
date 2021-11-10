package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "caracteristicas")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="caracteristica_id")
    private Long id;
    private String nombre;
    private String icono;

    @ManyToMany(mappedBy = "caracteristicas")
    private Set<Producto> productos;

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

    public String getIcono() {
        return icono;
    }

    public void setIcono(String icono) {
        this.icono = icono;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Caracteristica that = (Caracteristica) o;
        return id.equals(that.id) && nombre.equals(that.nombre) && icono.equals(that.icono);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, icono);
    }
}
