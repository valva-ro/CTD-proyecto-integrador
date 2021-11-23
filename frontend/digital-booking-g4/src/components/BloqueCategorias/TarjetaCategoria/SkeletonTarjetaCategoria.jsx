import styles from "./TarjetaCategoria.module.css";

export default function SkeletonTajetaCategoria(){
    return (
      <div className={`${styles.tarjeta} ${styles.disabled}`}>
        <div className={`${styles.fotoPortada} ${styles.skeleton}`}></div>
        <div className={styles.contenidoTarjeta}>
          <div
            className={`${styles.nombreCategoria} ${styles.textLoader} ${styles.skeleton}`}
          ></div>
          <div
            className={`${styles.descripcion} ${styles.textLoader} ${styles.skeleton}`}
          ></div>
        </div>
      </div>
    );
}