package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.model.UsuarioDTO;
import com.grupo4.hostingbook.persistence.entites.VerificationToken;

public interface IUsuarioService extends CRUDService<UsuarioDTO> {
    UsuarioDTO obtenerPorEmail(String email);
    void createVerificationToken(UsuarioDTO usuario, String token);
    VerificationToken getVerificationToken(String token);
}
