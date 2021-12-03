package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.persistence.entites.Puntuacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface IPuntuacionRepository extends JpaRepository<Puntuacion, Long> {
    @Query("FROM Puntuacion p WHERE p.producto.id =:id")
    Set<Puntuacion> consultarPorProductoID(Long id);

    @Query("FROM Puntuacion p WHERE p.usuario.id =:idUsuario AND p.producto.id =:idProducto")
    Puntuacion consultarPorUsuarioYProducto(Long idUsuario, Long idProducto);
}
