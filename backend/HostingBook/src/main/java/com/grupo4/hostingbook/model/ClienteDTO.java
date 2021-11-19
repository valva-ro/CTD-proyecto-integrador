package com.grupo4.hostingbook.model;

import java.util.Set;

public class ClienteDTO extends UsuarioDTO {

    public ClienteDTO() {
    }

    public ClienteDTO(Long id) {
        super(id);
    }

    public ClienteDTO(String nombre, String apellido, String mail, String contrasenia, Set<PuntuacionDTO> puntuaciones, Set<ProductoDTO> productosFavoritos) {
        super(nombre, apellido, mail, contrasenia, puntuaciones, productosFavoritos);
    }

    public ClienteDTO(Long id, String nombre, String apellido, String mail, String contrasenia, Set<PuntuacionDTO> puntuaciones, Set<ProductoDTO> productosFavoritos) {
        super(id, nombre, apellido, mail, contrasenia, puntuaciones, productosFavoritos);
    }
}
