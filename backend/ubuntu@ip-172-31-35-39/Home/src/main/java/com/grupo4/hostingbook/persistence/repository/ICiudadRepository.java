package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.persistence.entites.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICiudadRepository extends JpaRepository<Ciudad, Long> {
}
