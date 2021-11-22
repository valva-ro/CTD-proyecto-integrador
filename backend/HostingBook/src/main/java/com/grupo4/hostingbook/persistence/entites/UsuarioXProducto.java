package com.grupo4.hostingbook.persistence.entites;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "usuario_producto")
public class UsuarioXProducto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="usuario_producto_id")
    private Long id;
    @Column(name = "usuario_id", nullable = false)
    private Long usuarioID;
    @Column(name = "producto_id", nullable = false)
    private Long productoID;

    public UsuarioXProducto() {
    }

    public UsuarioXProducto(Long id, Long usuarioID, Long productoID) {
        this.id = id;
        this.usuarioID = usuarioID;
        this.productoID = productoID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUsuarioID() {
        return usuarioID;
    }

    public void setUsuarioID(Long usuarioID) {
        this.usuarioID = usuarioID;
    }

    public Long getProductoID() {
        return productoID;
    }

    public void setProductoID(Long productoID) {
        this.productoID = productoID;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UsuarioXProducto)) return false;
        UsuarioXProducto that = (UsuarioXProducto) o;
        return Objects.equals(id, that.id) && Objects.equals(usuarioID, that.usuarioID) && Objects.equals(productoID, that.productoID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, usuarioID, productoID);
    }
}
