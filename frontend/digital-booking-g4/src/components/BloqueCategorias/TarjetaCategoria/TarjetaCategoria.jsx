import { useState } from "react";
import useOnClickAndDoubleClick from "../../../hooks/useOnClickAndDoubleClick";
import styles from "./TarjetaCategoria.module.css";

export default function TarjetaCategoria({
  fotoPortada,
  item,
  indiceTarjetaActiva,
  nombre,
  descripcion,
  onClickHandler,
  onToggleSelect,
}) {
  const [clicks, setClicks] = useState(0);
  const [estaSeleccionada, setEstaSeleccionada] = useState(
    indiceTarjetaActiva === item
  );
  const clickHandler = () => {
    onClickHandler(nombre);
    onToggleSelect(item);
    setEstaSeleccionada(indiceTarjetaActiva === item);
  };

  const doubleClickHandler = () => {
    onClickHandler("");
    onToggleSelect(null);
    setEstaSeleccionada(false);
  };

  return (
    <div
      className={estaSeleccionada ? styles.tarjetaSeleccionada : styles.tarjeta}
      onClick={useOnClickAndDoubleClick(
        clickHandler,
        doubleClickHandler
      )}
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
  );
}
