package com.grupo4.hostingbook.persistence.entites;

import java.util.Set;

public class Cliente extends Usuario{

    public Cliente() {
    }

    public Cliente(Long id) {
        super(id);
    }

    public Cliente(Long id, String nombre, String apellido, String mail, String contrasenia) {
        super(id, nombre, apellido, mail, contrasenia);
    }

    public Cliente(String nombre, String apellido, String mail, String contrasenia, Set<Producto> productosFavoritos) {
        super(nombre, apellido, mail, contrasenia, productosFavoritos);
    }

    public Cliente(Long id, String nombre, String apellido, String mail, String contrasenia, Set<Producto> productosFavoritos) {
        super(id, nombre, apellido, mail, contrasenia, productosFavoritos);
    }
}
