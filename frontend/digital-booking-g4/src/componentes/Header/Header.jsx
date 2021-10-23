import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";
import styles from "./Header.module.css"
import logo from "./logo1.png"

export default function Header(props) {

    const [isOpened, setIsOpened] = useState(false);

    return(
        <header className={styles.headerFijo}>
            <div className={styles.contenedorHeader}>
                <div className={styles.headerIzquierda}>
                    <a href="#"><img src={logo} alt="logo"/></a> 
                    <a href="#"><p>Sentite como en tu hogar</p></a>    
                </div>
                <div className={styles.menuHamburguesa} onClick={() =>{<SideNav abrirMenu={() => setIsOpened(true)}/>}}>
                    <i className='bx bx-menu'></i>
                </div>
                <div className={styles.headerDerecha}>
                    {props.children}
                </div>                
            </div>
        </header>
    );
}