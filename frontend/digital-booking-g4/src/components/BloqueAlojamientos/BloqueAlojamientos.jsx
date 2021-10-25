import React from "react";
import TarjetaAlojamiento from "../TarjetaAlojamiento/TarjetaAlojamiento";
import TituloBloque from "../TituloBloque/TituloBloque";

import alojamientos from "../../resources/alojamientos.json";
import styles from "./BloqueAlojamientos.module.css";

export default function BloqueAlojamientos() {
  return (
    <section className={styles.recomendaciones}>
      <TituloBloque>Recomendaciones</TituloBloque>
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
