import styles from "./TarjetaCategoria.module.css";

export default function SkeletonTajetaCategoria(){
    return (
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
    );
}