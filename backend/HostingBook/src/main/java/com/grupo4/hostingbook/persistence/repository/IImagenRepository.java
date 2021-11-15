package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.model.ProductoDTO;
import com.grupo4.hostingbook.persistence.entites.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface IImagenRepository  extends JpaRepository<Imagen, Long> {
}
