package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.persistence.entites.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
}
