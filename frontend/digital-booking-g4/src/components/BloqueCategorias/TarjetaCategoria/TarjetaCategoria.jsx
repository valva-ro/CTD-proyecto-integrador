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
  const estaSeleccionada = indiceTarjetaActiva === item;
  const clickHandler = () => {
    onClickHandler();
    onToggleSelect(item);
  };
  return (
    <div
      className={estaSeleccionada ? styles.tarjetaSeleccionada : styles.tarjeta}
      onClick={clickHandler}
      // onDoubleClick={}
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
