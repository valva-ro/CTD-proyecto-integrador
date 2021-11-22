package com.grupo4.hostingbook.persistence.repository;

import com.grupo4.hostingbook.persistence.entites.UsuarioXProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarioXProductoRepository extends JpaRepository<UsuarioXProducto, Long> {
    @Modifying
    @Query("DELETE FROM UsuarioXProducto x WHERE x.usuarioID=:usuarioID AND x.productoID=:productoID")
    void delete(@Param("usuarioID") Long usuarioID, @Param("productoID") Long productoID);
}
