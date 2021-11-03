package com.grupo4.categorias.persistence.repository;

import com.grupo4.categorias.persistence.entites.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICiudadRepository extends JpaRepository<Ciudad, Long> {
}
