import React, { useContext, useState, useEffect } from "react";
import TarjetaAlojamiento from "./TarjetaAlojamiento/TarjetaAlojamiento";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import currentCityContext from "../../contexts/currentCityContext";
import styles from "./BloqueAlojamientos.module.css";
import useFetch from "../../hooks/useFetch";

export default function BloqueAlojamientos({ categoriaActual }) {
  const { currentCity } = useContext(currentCityContext);
  const [alojamientos, setAlojamientos] = useState([]);
  const { isLoaded, items } = useFetch("productos");

  useEffect(() => {
    if (isLoaded) {
      setAlojamientos(items);
    }
  }, [isLoaded, items]);


  const alojamientosFiltrados = alojamientos.filter((alojamiento) => {
    let pasaElFiltro = true;
    if (categoriaActual !== "" && currentCity !== "") {
      pasaElFiltro =
        categoriaActual.toLowerCase() === alojamiento.categoria.titulo.toLowerCase() &&
        currentCity.toLowerCase() === alojamiento.ciudad.nombre.toLowerCase();
    } else if (currentCity !== "") {
      pasaElFiltro = currentCity.toLowerCase() === alojamiento.ciudad.nombre.toLowerCase();
    } else if (categoriaActual !== "") {
      pasaElFiltro =
        categoriaActual.toLowerCase() === alojamiento.categoria.titulo.toLowerCase();
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
      {isLoaded && alojamientosFiltrados.length === 0 ? (
        <h2 className={styles.sinResultados}>No se encontraron resultados</h2>
      ) : !isLoaded ? <h2 className={styles.sinResultados}>Cargando alojamientos</h2> : (
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
