import { useState } from "react";
import TituloBloque from "../TituloBloque/TituloBloque.jsx";
import TarjetaCategoria from "./TarjetaCategoria/TarjetaCategoria.jsx";
import datos from "../../resources/datosCategorias.json";

import styles from "./BloqueCategorias.module.css";

export default function BloqueCategorias({ setCategoriaActual }) {
  const [indiceTarjetaActiva, setIndiceTarjetaActiva] = useState(null);
  return (
    <section className={styles.bloqueCategorias}>
      <TituloBloque>Buscar por tipo de alojamiento</TituloBloque>
      <div className={styles.listadoTarjetas}>
        {datos.map((dato, i) => (
          <TarjetaCategoria
            key={`categoria-${i}`}
            item={i}
            indiceTarjetaActiva={indiceTarjetaActiva}
            nombre={dato.nombre}
            fotoPortada={dato.fotoPortada}
            descripcion={dato.descripcion}
            onClickHandler={(categoriaActual) =>
              setCategoriaActual(categoriaActual)
            }
            onToggleSelect={(index) => setIndiceTarjetaActiva(index)}
          />
        ))}
      </div>
    </section>
  );
}
