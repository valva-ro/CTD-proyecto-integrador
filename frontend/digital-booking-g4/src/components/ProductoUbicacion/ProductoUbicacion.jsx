import React, { useState, useLayoutEffect } from "react";
import Estrellas from "../Estrellas/Estrellas";
import styles from "./ProductoUbicacion.module.css";

export default function ProductoUbicacion({
  ubicacion = "Capital Federal, Buenos Aires, Argentina",
  puntaje = 8,
}) {
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setAnchoPantalla(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <section className={styles.ubicacionContainer}>
      <div>
        <div className={styles.ubicacion}>
          <i className="fas fa-map-marker-alt"></i>
          <p>{ubicacion}</p>
        </div>
        {anchoPantalla > 480 ? (
          <p className={styles.distancia}>{distanciaCentro(ubicacion)}</p>
        ) : null}
      </div>
      <div className={styles.detalle}>
        <div className={styles.detalleYEstrellas}>
          <div className={styles.detalleCalificacion}>Muy bueno</div>
          <Estrellas puntaje={puntaje} />
        </div>
        <div className={styles.puntajeNumerico}>{puntaje}</div>
      </div>
    </section>
  );
}

function distanciaCentro(ubicacion) {
  return "A 940m del centro";
}
