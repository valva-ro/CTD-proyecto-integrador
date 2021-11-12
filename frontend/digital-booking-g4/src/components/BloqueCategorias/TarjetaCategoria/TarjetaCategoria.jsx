import styles from "./TarjetaCategoria.module.css";
import useFetch from "../../../hooks/useFetch.js";

export default function TarjetaCategoria({
  fotoPortada,
  indice,
  indiceTarjetaActiva,
  nombre,
  descripcion,
  onToggleSelect,
}) {
  const {isLoaded} = useFetch("categorias");
  const estaSeleccionada = indiceTarjetaActiva === indice;
  return (
    isLoaded ?
    (
      <div
        className={estaSeleccionada ? styles.tarjetaSeleccionada : styles.tarjeta}
        onClick={() => onToggleSelect(indice, nombre)}
      >
        <div
          className={styles.fotoPortada}
          style={{
            backgroundImage: `url(${fotoPortada})`,
          }}
        ></div>
        <div className={styles.contenidoTarjeta}>
          <h2 className={styles.hotel}>{nombre}</h2>
          <p className={styles.descripcion}>{descripcion}</p>
        </div>
      </div>
    ) : 
    (
      <div
        className={`${styles.tarjeta} ${styles.disabled}`}
      >
        <div
          className={`${styles.fotoPortada} ${styles.skeleton}`} 
        ></div>
        <div className={styles.contenidoTarjeta}>
          <h2 className={`${styles.textLoader} ${styles.skeleton}`}></h2>
          <p className={`${styles.textLoader} ${styles.skeleton}`}></p>
        </div>
      </div> 
    )
  );
}
