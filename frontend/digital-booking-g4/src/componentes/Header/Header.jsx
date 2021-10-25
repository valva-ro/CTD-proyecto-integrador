import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";
import styles from "./Header.module.css";
import logo from "./logo1.png";

export default function Header() {

    
    
    return(
        <header className={styles.headerFijo}>
            <div className={styles.contenedorHeader}>
                <div className={styles.headerIzquierda}>
                    <a href="#"><img src={logo} alt="logo"/></a> 
                    <a href="#"><p>Sentite como en tu hogar</p></a>    
                </div>
                <div className={styles.menuHamburguesa}>
                    <SideNav/>
                </div>
                <div className={styles.headerDerecha}>
                    <Profile/> {/* aqui hay que hacer la renderización del heder que corresponda según página de navegación */}
                </div>                
            </div>
        </header>
    );
}