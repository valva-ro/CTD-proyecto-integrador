import styles from "./TarjetaCategoria.module.css";

export default function TarjetaCategoria(props) {
  return (
    <div className={styles.tarjeta}>
      {/* <img
        className={styles.fotoPortada}
        src={props.fotoPortada}
        alt="fondo de portada"
      ></img> */}
      <div
        className={styles.fotoPortada}
        style={{
          backgroundImage: `url(${props.fotoPortada})`,
        }}
      ></div>
      <div className={styles.contenidoTarjeta}>
        <h2 className={styles.hotel}>{props.nombre}</h2>
        <p className={styles.descripcion}>{props.descripcion}</p>
      </div>
    </div>
  );
}