package com.grupo4.hostingbook.persistence.repository;


import com.grupo4.hostingbook.persistence.entites.TipoPolitica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITipoPoliticaRepository extends JpaRepository<TipoPolitica,Long> {
}
