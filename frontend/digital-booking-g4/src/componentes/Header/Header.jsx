import React from "react";
import styles from "./Header.module.css"
import logo from "./logo1.png"

export default function Header() {

    return(
        <header className={styles.headerFijo}>
            <div className={styles.contenedorHeader}>
                <div className={styles.headerIzquierda}>
                    <a href="#"><img src={logo} alt="logo"/></a> 
                    <a href="#"><p>Sentite como en tu hogar</p></a>
                    
                </div>
                <div className={styles.menuHamburguesa}>
                    <i className='bx bx-menu'></i>
                </div>
                <div className={styles.headerDerecha}>
                    {/* <input type="submit" value="Crear cuenta" />
                    <input type="submit" value="Iniciar sesión" /> */}
                    <div className={styles.headerDerechaVersion2}>
                    <p className={styles.avatar}>BR</p>
                    <div>
                        <p className={styles.saludo}>Hola,</p>
                        <p className={styles.nombre}>Bruno Rodriguez</p>
                    </div>
                    <p className={styles.cerrar}>X</p>
                </div>
                </div>
                 
            </div>
        </header>

    );
}