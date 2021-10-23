import React from "react"
import styles from "./Profile.module.css"

export default function Profile() {
    return(
        <div className={styles.contenedorProfile}>
            <p className={styles.avatar}>BR</p>
            <div className={styles.contenedorNombre}>
                <p className={styles.saludo}>Hola,</p>
                <p className={styles.nombre}>Bruno Rodriguez</p>
            </div>
            <p className={styles.cerrar}>X</p>
        </div>
    );
}