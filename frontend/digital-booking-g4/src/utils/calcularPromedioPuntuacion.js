export default function calcularPromedioPuntuacion(puntuaciones) {
  let sumatoria = puntuaciones
    .map((p) => p.puntuacion)
    .reduce((anterior, actual) => anterior + actual, 0);
  return Math.round(sumatoria / puntuaciones.length);
}