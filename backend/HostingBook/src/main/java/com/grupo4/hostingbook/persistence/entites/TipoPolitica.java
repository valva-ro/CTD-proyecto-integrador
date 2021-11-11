package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "tipo_politica")
public class TipoPolitica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tipo_politica_id")
    private Long id;
    private String nombre;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "tipo_politica", fetch = FetchType.EAGER)
    private Set<Politica> politicas = new HashSet<>();

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

    public Set<Politica> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(Set<Politica> politicas) {
        this.politicas = politicas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TipoPolitica)) return false;
        TipoPolitica that = (TipoPolitica) o;
        return getId().equals(that.getId()) && getNombre().equals(that.getNombre()) && getPoliticas().equals(that.getPoliticas());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getNombre(), getPoliticas());
    }
}

