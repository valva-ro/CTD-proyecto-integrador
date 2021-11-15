package com.grupo4.hostingbook.exceptions;

public interface Mensajes {
    String ELIMINADO_CON_EXITO = "%s con id %s eliminado(a) con éxito";
    String ERROR_CREACION_CAMPO_REQUERIDO = "Ha ocurrido un error en la creación de '%s', '%s' no puede estar vacío";
    String ERROR_NO_EXISTE = "%s con id %s no está registrado en la base de datos.";
    String ERROR_ID_FUERA_DE_RANGO = "El id no puede ser menor a 1";
    String ERROR_CAMPO_FUERA_DE_RANGO = "%s debe estar entre %s y %s (inclusive)";
    String ERROR_ID_ES_NULL = "El id no puede estar vacío";
    String ERROR_DTO_NO_EXISTE = "Ha ocurrido un error, '%s' o uno de sus campos no puede ser nulo";
    String ERROR_FUNCIONALIDAD_SIN_DESARROLLAR = "Esta funcionalidad no ha sido implementada.";
    String ERROR_CRITERIO_DE_BUSQUEDA_NO_EXISTE = "%s denominada '%s' no está registrada en la base de datos.";
}
