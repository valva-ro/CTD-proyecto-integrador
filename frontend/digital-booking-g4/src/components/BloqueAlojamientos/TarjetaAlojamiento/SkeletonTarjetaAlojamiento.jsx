import styles from "./TarjetaAlojamiento.module.css";

export default function SkeletonTarjetaAlojamiento(){
    return(
        <div className={styles.tarjetaAlojamiento}>
        <div className={`${styles.imagenAlojamiento} ${styles.skeleton}`}></div>
        <div className={styles.descripcionAlojamiento}>
          <div className={styles.informacionPrincipal}>
            <div className={styles.nombreAlojamiento}>
              <div className={styles.tipoYCalificacion}>
                <h4 className={`${styles.infoLoader} ${styles.skeleton}`}></h4>
                <h4 className={`${styles.infoLoader} ${styles.skeleton}`}></h4>
              </div>
              <h2 className={`${styles.infoLoader} ${styles.skeleton}`}></h2>
            </div>
            <div className={styles.puntajeAlojamiento}>
              <div className={`${styles.puntajeNumerico} ${styles.infoLoader} ${styles.skeleton}`}></div>
              <div className={`${styles.detalle} ${styles.infoLoader} ${styles.skeleton}`}></div>
            </div>
          </div>
          <p className={`${styles.textLoader} ${styles.skeleton}`}></p>
          <p className={`${styles.textLoader} ${styles.skeleton}`}></p>
          <p className={`${styles.textLoader} ${styles.skeleton}`}></p>
          <p className={`${styles.inputLoader} ${styles.skeleton}`}></p>
          
        </div>
      </div>
    );
}