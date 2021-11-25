import styles from "./TarjetaAlojamiento.module.css";

export default function SkeletonTarjetaAlojamiento(){
    return (
      <div className={styles.tarjetaAlojamiento} data-aos="fade-up">
        <div className={`${styles.imagenAlojamiento} ${styles.skeleton}`}></div>
        <div className={styles.descripcionAlojamiento}>
          <div className={styles.informacionPrincipal}>
            <div className={styles.nombreAlojamiento}>
              <div className={styles.tipoYCalificacion}>
                <div
                  className={`${styles.infoLoader} ${styles.skeleton}`}
                ></div>
                <div
                  className={`${styles.infoLoader} ${styles.skeleton}`}
                ></div>
              </div>
              <div className={`${styles.infoLoader} ${styles.skeleton}`}></div>
            </div>
            <div className={styles.puntajeAlojamiento}>
              <div
                className={`${styles.puntajeNumerico} ${styles.infoLoader} ${styles.skeleton}`}
              ></div>
              <div
                className={`${styles.detalle} ${styles.infoLoader} ${styles.skeleton}`}
              ></div>
            </div>
          </div>
          <div className={`${styles.textLoader} ${styles.skeleton}`}></div>
          <div className={`${styles.textLoader} ${styles.skeleton}`}></div>
          <div className={`${styles.textLoader} ${styles.skeleton}`}></div>
          <div className={`${styles.inputLoader} ${styles.skeleton}`}></div>
        </div>
      </div>
    );
}