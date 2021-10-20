package com.grupo4.categorias.controller;

import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public interface CRUDController<T> {
    /* Obligatorias */
    // T crear(T t);
    // List<T> consultarTodos();

    /* Opcionales */
    // T actualizar(T t);
    // void eliminar(Integer id);
}
