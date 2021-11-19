package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "politicas")
public class Politica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="politica_id")
    private Long id;
    private String nombre;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "fk_tipo_politica")
    private TipoPolitica tipoPolitica;


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

    public TipoPolitica getTipoPolitica() {
        return tipoPolitica;
    }

    public void setTipoPolitica(TipoPolitica tipoPolitica) {
        this.tipoPolitica = tipoPolitica;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Politica)) return false;
        Politica politica = (Politica) o;
        return getId().equals(politica.getId()) && getNombre().equals(politica.getNombre()) && getTipoPolitica().equals(politica.getTipoPolitica()) ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getNombre(), getTipoPolitica());
    }
}
