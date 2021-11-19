import Estrellas from "../../Estrellas/Estrellas";
import styles from "./ProductoUbicacion.module.css";
import calcularPromedioPuntuacion from "../../../utils/calcularPromedioPuntuacion";
import obtenerClasificacion from "../../../utils/obtenerClasificacion";

export default function ProductoUbicacion({
  alojamiento: { ciudad, puntuaciones },
}) {
  const puntaje = calcularPromedioPuntuacion(puntuaciones);
  return (
    <section className={styles.ubicacionContainer}>
      <div className={styles.direccionContainer}>
        <div className={styles.ubicacion}>
          <i className="fas fa-map-marker-alt"></i>
          <p>{`${ciudad.nombre}, ${ciudad.pais}`}</p>
        </div>
        <p className={styles.distancia}>{distanciaCentro(ciudad.nombre)}</p>
      </div>
      <div className={styles.detalle}>
        <div className={styles.detalleYEstrellas}>
          <div className={styles.detalleCalificacion}>
            {obtenerClasificacion(puntaje)}
          </div>
          <Estrellas puntaje={puntaje} />
        </div>
        {isNaN(puntaje) ? (
          ""
        ) : (
          <div className={styles.puntajeNumerico}>{puntaje * 2}</div>
        )}
      </div>
    </section>
  );
}

function distanciaCentro(ubicacion) {
  // TODO: calcular la distancia
  return "A 940m del centro";
}
