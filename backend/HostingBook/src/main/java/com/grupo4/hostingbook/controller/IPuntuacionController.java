package com.grupo4.hostingbook.controller;

import com.grupo4.hostingbook.model.PuntuacionDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

public interface IPuntuacionController extends CRUDController<PuntuacionDTO> {
    ResponseEntity<?> consultarPorProductoID(@PathVariable Long id);

    ResponseEntity<?> consultarPorUsuarioID(@PathVariable Long id);
}
