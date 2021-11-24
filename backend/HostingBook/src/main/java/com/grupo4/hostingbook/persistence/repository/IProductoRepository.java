package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.persistence.entites.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.*;
import java.util.Set;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
    @Query("FROM Producto p WHERE p.categoria.titulo LIKE %:titulo%")
    Set<Producto> buscarProductosPorCategoria(@Param("titulo") String titulo);

    @Query("FROM Producto p WHERE p.ciudad.nombre LIKE %:nombre%")
    Set<Producto> buscarProductosPorCiudad(@Param("nombre") String nombre);

    @Query("SELECT r.producto.id FROM Reserva r WHERE NOT((:fechaIngreso <= r.fechaIngreso AND :fechaEgreso <= r.fechaIngreso) OR (:fechaIngreso >= r.fechaEgreso AND :fechaEgreso >= r.fechaEgreso))")
    Set<Long> buscarProductosReservadosEntreFechas(@Param("fechaIngreso") LocalDate fechaIngreso, @Param("fechaEgreso") LocalDate fechaEgreso);

}
