import { useEffect, useState } from "react";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import TarjetaCategoria from "./TarjetaCategoria/TarjetaCategoria.jsx";
import useFetch from "../../hooks/useFetch.js";
import styles from "./BloqueCategorias.module.css";

export default function BloqueCategorias({ setCategoriaActual }) {
  const [tarjetaActiva, setTarjetaActiva] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const data = useFetch("categorias");

  useEffect(() => {
    if (data.isLoaded) {
      setCategorias(data.items);
    }
  }, [data.isLoaded, data.items]);

  return (
    <section className={styles.bloqueCategorias}>
      <TituloBloque>Buscar por tipo de alojamiento</TituloBloque>
      {!data.isLoaded ? (
        <h2 className={styles.sinResultados}>Error al cargar las categorias</h2>
      ) : (
        <div className={styles.listadoTarjetas}>
          {categorias.map((dato, i) => (
            <TarjetaCategoria
              key={`categoria-${i}`}
              item={i}
              indiceTarjetaActiva={tarjetaActiva}
              fotoPortada={dato.urlImagen}
              nombre={dato.titulo}
              descripcion={dato.descripcion}
              onClickHandler={() => setCategoriaActual(dato.titulo)}
              onToggleSelect={() => setTarjetaActiva(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
