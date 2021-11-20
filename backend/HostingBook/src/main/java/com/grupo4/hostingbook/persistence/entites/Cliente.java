package com.grupo4.hostingbook.persistence.entites;

import java.util.Set;

public class Cliente extends Usuario{

    public Cliente() {
        super();
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

    public Cliente(String nombre, String apellido, String mail, String contrasenia, Set<Producto> productosFavoritos, Rol rol) {
        super(nombre, apellido, mail, contrasenia, productosFavoritos, rol);
    }
    public Cliente(Long id, String nombre, String apellido, String mail, String contrasenia, Set<Producto> productosFavoritos, Rol rol) {
        super(id, nombre, apellido, mail, contrasenia, productosFavoritos, rol);
    }
}
