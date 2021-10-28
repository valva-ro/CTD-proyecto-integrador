package com.grupo4.categorias.persistence.entites;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
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
}
