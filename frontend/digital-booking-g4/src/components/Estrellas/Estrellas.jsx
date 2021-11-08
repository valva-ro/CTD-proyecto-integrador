import React from "react";
import styles from "./Estrellas.module.css";

export default function Estrellas({ puntaje }) {
  return (
    <span className={styles.estrellas} aria-label="Estrellas">
      {obtenerEstrellas(puntaje)}
    </span>
  );
}

function obtenerEstrellas(puntaje) {
  const puntajeRedondeado = Math.ceil(puntaje);
  let estrellas = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(puntajeRedondeado / 2))
      estrellas.push(
        <i
          key={`estrellas-${i}`}
          className={`fas fa-star ${styles.estrellaLlena}`}
        ></i>
      );
    else
      estrellas.push(
        <i
          key={`estrellas-${i}`}
          className={`fas fa-star ${styles.estrellaVacia}`}
        ></i>
      );
  }
  return estrellas;
}
