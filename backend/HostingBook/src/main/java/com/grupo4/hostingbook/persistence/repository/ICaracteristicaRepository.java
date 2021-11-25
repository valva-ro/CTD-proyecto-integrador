package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.model.CaracteristicaDTO;
import com.grupo4.hostingbook.persistence.entites.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ICaracteristicaRepository extends JpaRepository<Caracteristica, Long> {
    @Query("FROM Puntuacion p WHERE p.producto.id =:id")
    Set<CaracteristicaDTO> consultarPorProductoID(Long id);
}
