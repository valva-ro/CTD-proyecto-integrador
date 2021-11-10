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
        categoriaActual.toLowerCase() === alojamiento.category.toLowerCase() &&
        currentCity.toLowerCase() === alojamiento.location.toLowerCase();
    } else if (currentCity !== "") {
      pasaElFiltro =
        currentCity.toLowerCase() === alojamiento.location.toLowerCase();
    } else if (categoriaActual !== "") {
      pasaElFiltro =
        categoriaActual.toLowerCase() === alojamiento.category.toLowerCase();
    }
    return pasaElFiltro;
  });
  return (
    <section className={styles.recomendaciones}>
      <TituloBloque>
        {categoriaActual === ""
          ? currentCity === ""
            ? "Recomendaciones"
            : `Recomendaciones en ${currentCity}`
          : currentCity === ""
          ? `${capitalizeFirstLetter(categoriaActual)}`
          : `${capitalizeFirstLetter(categoriaActual)} en ${currentCity}`}
      </TituloBloque>
      {alojamientosFiltrados.length === 0 ? (
        <h2 className={styles.sinResultados}>No se encontraron resultados</h2>
      ) : (
        <ul
          className={
            alojamientosFiltrados.length < 2
              ? styles.alojamientosUnaColumna
              : styles.alojamientos
          }
        >
          {alojamientosFiltrados.map((alojamiento, i) => (
            <li key={i} className={styles.alojamiento}>
              <TarjetaAlojamiento alojamiento={alojamiento} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
