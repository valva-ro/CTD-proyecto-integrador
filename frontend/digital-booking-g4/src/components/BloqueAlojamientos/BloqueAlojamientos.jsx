import React from "react";
import TarjetaAlojamiento from "./TarjetaAlojamiento/TarjetaAlojamiento";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";

import alojamientos from "../../resources/alojamientos.json";
import styles from "./BloqueAlojamientos.module.css";

export default function BloqueAlojamientos({ categoriaActual }) {
  const alojamientosFiltrados =
    categoriaActual === ""
      ? alojamientos
      : alojamientos.filter(
          (alojamiento) => alojamiento.category === categoriaActual
        );
  return (
    <section className={styles.recomendaciones}>
      <TituloBloque>
        {categoriaActual === "" ? "Recomendaciones" : capitalizeFirstLetter(categoriaActual)}
      </TituloBloque>
      <ul className={styles.alojamientos}>
        {alojamientosFiltrados.map((alojamiento, i) => (
          <li key={i} className={styles.alojamiento}>
            <TarjetaAlojamiento
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}