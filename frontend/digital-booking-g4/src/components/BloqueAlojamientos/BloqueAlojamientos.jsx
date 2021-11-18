import React, { useContext, useState, useEffect } from "react";
import FilledButton from "../Buttons/FilledButton";
import TarjetaAlojamiento from "./TarjetaAlojamiento/TarjetaAlojamiento";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import currentFilterContext from "../../contexts/currentFilterContext";
import styles from "./BloqueAlojamientos.module.css";
import useFetch from "../../hooks/useFetch";

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
        <FilledButton onClick={toggleFiltrado}>Deshacer filtros</FilledButton>
      </div>
      {isLoaded && alojamientosFiltrados.length === 0 ? (
        <h2 className={styles.sinResultados}>No se encontraron resultados</h2>
      ) : !isLoaded ? (
        <h2 className={styles.sinResultados}>Cargando alojamientos</h2>
      ) : (
        <ul
          className={
            alojamientosFiltrados.length < 2
              ? styles.alojamientosUnaColumna
              : styles.alojamientos
          }
        >
          {alojamientosFiltrados.map((alojamiento) => (
            <li key={alojamiento.id} className={styles.alojamiento}>
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
