package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.model.UsuarioDTO;

public interface IUsuarioService extends CRUDService<UsuarioDTO> {
    UsuarioDTO obtenerPorEmail(String email);
}
