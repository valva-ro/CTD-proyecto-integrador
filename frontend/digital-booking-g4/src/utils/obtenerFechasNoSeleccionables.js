import obtenerFechasReservadasPosteriores from "./obtenerFechasReservadasPosteriores";
import obtenerFechasReservadasAnteriores from "./obtenerFechasReservadasAnteriores";

export default function obtenerFechasNoSeleccionables(startDate){
    const fechasNoSeleccionablesPosteriores = obtenerFechasReservadasPosteriores(startDate);
    const fechasNoSeleccionablesAnteriores = obtenerFechasReservadasAnteriores(startDate);
    const fechasNoSeleccionables = fechasNoSeleccionablesAnteriores.concat(fechasNoSeleccionablesPosteriores)

    return fechasNoSeleccionables;
}

