package com.grupo4.hostingbook.auth;

import com.grupo4.hostingbook.model.UsuarioDTO;

public class AuthenticationResponse {

    private final String jwt;
    private final Long id;
    private final String nombre;
    private final String apellido;
    private final Boolean cuentaValidada;
    private final String rol;

    public AuthenticationResponse(String jwt, UsuarioDTO usuarioDTO) {
        this.jwt = jwt;
        this.id = usuarioDTO.getId();
        this.nombre = usuarioDTO.getNombre();
        this.apellido = usuarioDTO.getApellido();
        this.cuentaValidada = usuarioDTO.getCuentaValidada();
        this.rol = usuarioDTO.getRol().getNombre();
    }

    public String getJwt() {
        return jwt;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public Long getId() {
        return id;
    }

    public Boolean getCuentaValidada() {
        return cuentaValidada;
    }

    public String getRol() {
        return rol;
    }
}
