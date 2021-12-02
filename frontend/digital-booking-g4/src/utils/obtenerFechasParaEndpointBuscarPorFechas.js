import formatearFecha from "./formatearFecha";

export default function obtenerFechasParaEndpointBuscarPorFechas(currentDate){
    let fechaInicial = ""
    if (currentDate !== null) {
      fechaInicial = formatearFecha(currentDate);
    } else {
      fechaInicial = formatearFecha(new Date());
    }
    return fechaInicial;
}

