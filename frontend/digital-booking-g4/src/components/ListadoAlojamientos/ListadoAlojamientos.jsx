import React from "react";
import TarjetaAlojamiento from "../TarjetaAlojamiento/TarjetaAlojamiento";
import alojamientos from "../../resources/alojamientos.json";
import styles from "./ListadoAlojamientos.module.css";

export default function ListadoAlojamientos() {
  return (
    <section className={styles.recomendaciones}>
      <h2 className={styles.titulo}>Recomendaciones</h2>
      <ul className={styles.alojamientos}>
        {alojamientos.map((alojamiento, i) => (
          <li key={i} className={styles.alojamiento}> 
            <TarjetaAlojamiento
              key={`alojamiento-${i}`}
              titulo={alojamiento.title}
              imagen={alojamiento.img}
              categoria={alojamiento.category}
              descripcion={alojamiento.description}
              ubicacion={alojamiento.location}
              cantEstrellas={alojamiento.stars}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
