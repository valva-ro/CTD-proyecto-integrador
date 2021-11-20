package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.persistence.entites.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface IReservaRepository extends JpaRepository<Reserva,Long> {

    @Query("FROM Reserva r WHERE r.producto.id == :id")
    Set<Reserva> buscarReservasPorIdProducto(@Param("id") Long id);
}
