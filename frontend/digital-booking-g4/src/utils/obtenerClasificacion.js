export default function obtenerClasificacion(puntaje) {
    if (puntaje === 1) return "Malo";
    else if (puntaje === 2) return "Regular";
    else if (puntaje === 3) return "Bueno";
    else if (puntaje === 4) return "Muy bueno";
    else if (puntaje === 5) return "Excelente";
    else return "Sin clasificación";
}