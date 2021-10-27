import React, { useContext } from "react"
import styles from "./Profile.module.css"
import loggedContext from "../../contexts/loggedContext";


export default function Profile() {
    const {isLogged , setIsLogged} = useContext(loggedContext);

    return(
        <div className={styles.contenedorProfile}>
            <p className={styles.avatar}>BR</p>
            <div className={styles.contenedorNombre}>
                <p className={styles.saludo}>Hola,</p>
                <p className={styles.nombre}>Bruno Rodriguez</p>
            </div>
            <span className={styles.cerrar} onClick={() => setIsLogged(false)}>X</span>
        </div>
    );
}