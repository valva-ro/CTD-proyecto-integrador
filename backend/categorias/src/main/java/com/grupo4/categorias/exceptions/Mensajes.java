package com.grupo4.categorias.exceptions;

public interface Mensajes {
    String CREADO_CON_EXITO = "El %s fue creado con el id '%s'.";
    String ERROR_CREACION_CAMPO_REQUERIDO = "Ha ocurrido un error en la creación de '%s', '%s' no puede estar vacío";
    String ERROR_NO_EXISTE = "%s con id %s no está registrado en la base de datos.";
    String ERROR_ID_FUERA_DE_RANGO = "El id no puede ser menor a 1";
    String ERROR_ID_ES_NULL = "El id no puede estar vacío";
}
