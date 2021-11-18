package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.persistence.entites.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Set;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
    @Query("FROM Producto p WHERE p.categoria.titulo LIKE %:titulo%")
    Set<Producto> buscarProductosPorCategoria(@Param("titulo") String titulo);

    @Query("FROM Producto p WHERE p.ciudad.nombre LIKE %:nombre%")
    Set<Producto> buscarProductosPorCiudad(@Param("nombre") String nombre);

    @Query("FROM Producto p WHERE ((p.ciudad.nombre LIKE %:nombre%) AND (p.fecha BETWEEN :fechaIngreso AND :fechaEgreso))")     //VERRRRRRRRRRRRR si es que la fecha está en cual tabla relacionada a producto
    Set<Producto> buscarProductosPorCiudadYFechas(@Param("nombre") String nombre, @Param("fechaIngreso") Date fechaIngreso, @Param("fechaEgreso") Date fechaEgreso);

}
