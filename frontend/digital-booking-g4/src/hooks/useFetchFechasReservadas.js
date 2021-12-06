import useFetch from "./useFetch";

function obtenerFechasDentroDelRango(fechaInicio, fechaFinal) {
  const fechas = [];
  const fechaActual = fechaInicio;
  while (fechaActual <= fechaFinal) {
    fechas.push(new Date(fechaActual));
    fechaActual.setDate(fechaActual.getDate() + 1);
  }
  return fechas;
}

export default function useFetchFechasReservadas(id) {
  const { isLoaded, items } = useFetch(`reservas/producto/${id}`);
  const fechasReservadas = [];
  if (isLoaded) {
    items.forEach((reserva) => {
      const ingreso = new Date(reserva.fechaIngreso);
      const egreso = new Date(reserva.fechaEgreso);
      fechasReservadas.push(...obtenerFechasDentroDelRango(ingreso, egreso));
    });
  }
  return { isLoaded, fechasReservadas };
}
