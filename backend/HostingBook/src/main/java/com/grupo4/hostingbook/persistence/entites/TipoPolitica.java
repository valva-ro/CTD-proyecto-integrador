package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "tipo_politica")
public class TipoPolitica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tipo_politica_id")
    private Long id;
    private String nombre;


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


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TipoPolitica)) return false;
        TipoPolitica that = (TipoPolitica) o;
        return getId().equals(that.getId()) && getNombre().equals(that.getNombre()) ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getNombre());
    }
}

