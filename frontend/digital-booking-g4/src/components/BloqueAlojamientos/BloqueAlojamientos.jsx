import React, { useContext } from "react";
import TarjetaAlojamiento from "./TarjetaAlojamiento/TarjetaAlojamiento";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import currentCityContext from "../../contexts/currentCityContext";

import alojamientos from "../../resources/alojamientos.json";
import styles from "./BloqueAlojamientos.module.css";

export default function BloqueAlojamientos({ categoriaActual }) {
  const { currentCity } = useContext(currentCityContext);
  const alojamientosFiltrados = alojamientos.filter((alojamiento) => {
    let pasaElFiltro = true;
    if (categoriaActual !== "" && currentCity !== "") {
      pasaElFiltro =
        categoriaActual === alojamiento.category &&
        currentCity === alojamiento.location;
    } else if (currentCity !== "") {
      pasaElFiltro = currentCity === alojamiento.location;
    } else if (categoriaActual !== "") {
      pasaElFiltro = categoriaActual === alojamiento.category;
    }
    return pasaElFiltro;
  });
  return (
    <section className={styles.recomendaciones}>
      <TituloBloque>
        {categoriaActual === ""
          ? "Recomendaciones"
          : capitalizeFirstLetter(categoriaActual)}
      </TituloBloque>
      <ul
        className={
          alojamientosFiltrados.length < 2
            ? styles.alojamientosUnaColumna
            : styles.alojamientos
        }
      >
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