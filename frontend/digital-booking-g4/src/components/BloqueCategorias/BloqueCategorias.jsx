import { useEffect, useState } from "react";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import TarjetaCategoria from "./TarjetaCategoria/TarjetaCategoria.jsx";
import useFetch from "../../hooks/useFetch.js";
import styles from "./BloqueCategorias.module.css";
import SkeletonTajetaCategoria from "./TarjetaCategoria/SkeletonTarjetaCategoria.jsx";

export default function BloqueCategorias({ setCategoriaActual }) {
  const [tarjetaActiva, setTarjetaActiva] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const data = useFetch("categorias");

  useEffect(() => {
    if (data.isLoaded) {
      setCategorias(data.items);
    }
  }, [data.isLoaded, data.items]);

  const toggleSelect = (indiceTarjeta, tituloCategoria) => {
    if (indiceTarjeta === tarjetaActiva) {
      setCategoriaActual("");
      setTarjetaActiva(null);
    }
    else  {
      setTarjetaActiva(indiceTarjeta);
      setCategoriaActual(tituloCategoria);  
    }
  }

  return (
    <section className={styles.bloqueCategorias}>
      <TituloBloque>Buscar por tipo de alojamiento</TituloBloque>
      {!data.isLoaded ? (
        <div className={styles.listadoTarjetas}>
          {Array.apply(0, Array(4)).map((x, i) => (
            <SkeletonTajetaCategoria key={`skeletonCategoria-${i}`}/>
          ))}
        </div>
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
              indiceTarjetaActiva={tarjetaActiva}
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
