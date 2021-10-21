package com.grupo4.categorias.persistence.repository;

import com.grupo4.categorias.persistence.entites.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoriaRepository extends JpaRepository<Categoria, Long> {
}
