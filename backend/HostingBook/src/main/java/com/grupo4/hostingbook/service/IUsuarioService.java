package com.grupo4.hostingbook.service;

import com.grupo4.hostingbook.model.UsuarioDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface IUsuarioService extends CRUDService<UsuarioDTO>, UserDetailsService {
    UsuarioDTO obtenerPorEmail(String email);
    UserDetails loadUserByUsername(String email) throws UsernameNotFoundException;
}
