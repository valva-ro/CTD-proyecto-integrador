package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.persistence.entites.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {

    @Query("SELECT p FROM Producto p WHERE p.categoria.titulo=?1")
    Set<Producto> buscarProductosPorCategoria(String titulo);

    @Query("SELECT p FROM Producto p WHERE p.ciudad.nombre=?1")
    Set<Producto> buscarProductosPorCiudad(String nombre);

}
