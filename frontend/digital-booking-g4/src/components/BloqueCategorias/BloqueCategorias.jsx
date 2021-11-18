import { useEffect, useState, useContext } from "react";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import TarjetaCategoria from "./TarjetaCategoria/TarjetaCategoria.jsx";
import currentFilterContext from "../../contexts/currentFilterContext";
import useFetch from "../../hooks/useFetch.js";
import styles from "./BloqueCategorias.module.css";

export default function BloqueCategorias() {
  const { currentCategory, setCurrentCategory } =
    useContext(currentFilterContext);
  const [indiceTarjetaActiva, setIndiceTarjetaActiva] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const data = useFetch("categorias");

  useEffect(() => {
    if (data.isLoaded) {
      setCategorias(data.items);
    }
  }, [data.isLoaded, data.items]);

  useEffect(() => {
    if (currentCategory === "") {
      setIndiceTarjetaActiva(null);
    }
  }, [currentCategory, indiceTarjetaActiva]);

  const toggleSelect = (indiceTarjeta, tituloCategoria) => {
    if (indiceTarjeta === indiceTarjetaActiva) {
      setCurrentCategory("");
      setIndiceTarjetaActiva(null);
    } else {
      setIndiceTarjetaActiva(indiceTarjeta);
      setCurrentCategory(tituloCategoria);
    }
  };

  return (
    <section className={styles.bloqueCategorias}>
      <TituloBloque>Buscar por tipo de alojamiento</TituloBloque>
      {!data.isLoaded ? (
        <h2 className={styles.sinResultados}>Cargando tipos de alojamientos</h2>
      ) : data.items.length === 0 ? (
        <h2 className={styles.sinResultados}>
          Ups, no encontramos ningún tipo de alojamiento
        </h2>
      ) : (
        <div className={styles.listadoTarjetas}>
          {categorias.map((dato, i) => (
            <TarjetaCategoria
              key={`categoria-${dato + i}`}
              indice={i}
              estaActiva={i === indiceTarjetaActiva}
              fotoPortada={dato.urlImagen}
              nombre={dato.titulo}
              descripcion={dato.descripcion}
              onToggleSelect={toggleSelect}
            />
          ))}
        </div>
      )}
    </section>
  );
}
