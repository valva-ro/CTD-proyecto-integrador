import React from "react";
import styles from "./Footer.module.css";

export default function Footer () {


    return (
        <footer className={styles.footerFijo}>
            <div className={styles.contenedorFooter}>
                <div className={styles.footerIzquierda}>
                    <p>©2021 Hosting Book</p>
                </div>
                <div className={styles.footerDerecha}>
                    <i className='bx bxl-facebook-circle' ></i>
                    <i className='bx bxl-linkedin' ></i>
                    <i className='bx bxl-twitter' ></i>
                    <i className='bx bxl-instagram-alt' ></i>
                </div>
            </div>
        </footer>

    );
}

