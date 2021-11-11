package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.persistence.entites.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
    @Query("FROM Producto p WHERE p.categoria.titulo LIKE %:titulo%")
    Set<Producto> buscarProductosPorCategoria(@Param("titulo") String titulo);

    @Query("FROM Producto p WHERE p.ciudad.nombre LIKE %:nombre%")
    Set<Producto> buscarProductosPorCiudad(@Param("nombre") String nombre);

}
