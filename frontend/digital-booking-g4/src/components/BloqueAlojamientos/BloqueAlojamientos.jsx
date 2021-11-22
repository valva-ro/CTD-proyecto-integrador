import React, { useContext, useState, useEffect } from "react";
import FilledButton from "../Buttons/FilledButton";
import TarjetaAlojamiento from "./TarjetaAlojamiento/TarjetaAlojamiento";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import currentFilterContext from "../../contexts/currentFilterContext";
import styles from "./BloqueAlojamientos.module.css";
import useFetch from "../../hooks/useFetch";
import SkeletonTarjetaAlojamiento from "./TarjetaAlojamiento/SkeletonTarjetaAlojamiento";

export default function BloqueAlojamientos() {
  const { currentCity, setCurrentCity, currentCategory, setCurrentCategory } =
    useContext(currentFilterContext);
  const [alojamientos, setAlojamientos] = useState([]);
  const { isLoaded, items } = useFetch("productos");

  const toggleFiltrado = () => {
    setCurrentCategory("");
    setCurrentCity("");
  };

  useEffect(() => {
    if (isLoaded) {
      setAlojamientos(items);
    }
  }, [isLoaded, items]);

  const alojamientosFiltrados = alojamientos.filter((alojamiento) => {
    let pasaElFiltro = true;
    if (currentCategory !== "" && currentCity !== "") {
      pasaElFiltro =
        currentCategory.toLowerCase() ===
          alojamiento.categoria.titulo.toLowerCase() &&
        currentCity.toLowerCase() === alojamiento.ciudad.nombre.toLowerCase();
    } else if (currentCity !== "") {
      pasaElFiltro =
        currentCity.toLowerCase() === alojamiento.ciudad.nombre.toLowerCase();
    } else if (currentCategory !== "") {
      pasaElFiltro =
        currentCategory.toLowerCase() ===
        alojamiento.categoria.titulo.toLowerCase();
    }
    return pasaElFiltro;
  });

  return (
    <section className={styles.recomendaciones}>
      <div className={styles.encabezadoFiltros}>
        <TituloBloque>
          {currentCategory === ""
            ? currentCity === ""
              ? "Recomendaciones"
              : `Recomendaciones en ${currentCity}`
            : currentCity === ""
            ? `${capitalizeFirstLetter(currentCategory)}`
            : `${capitalizeFirstLetter(currentCategory)} en ${currentCity}`}
        </TituloBloque>
        <div className={styles.containerFiltrosButton} onClick={toggleFiltrado}>
          <span className={styles.filtrosButton}>Deshacer Filtros</span>
          <i class="fas fa-backspace"></i>
        </div>
      </div>
      {isLoaded && alojamientosFiltrados.length === 0 ? (
        <h2 className={styles.sinResultados}>No se encontraron resultados</h2>
      ) : !isLoaded ? 
      (  <ul
          className={styles.alojamientos}
        > 
          {Array.apply(0, Array(8)).map((x, i) => (
            <li key={`skeletonAlojamiento-${i}`} className={styles.alojamiento}>
              <SkeletonTarjetaAlojamiento/>
            </li>
          ))}
        </ul>
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
              <TarjetaAlojamiento
                alojamiento={alojamiento}
                isLoaded={isLoaded}
              />
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
