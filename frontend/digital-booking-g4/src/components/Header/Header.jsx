import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";
import OutlinedButton from "../Buttons/OutlinedButton"
import styles from "./Header.module.css";
import logo from "./logo1.png";
import { Link } from "react-router-dom"

export default function Header() {
    const [estaLogueado, setEstaLogueado] = useState(true);

    const pathname = window.location.pathname
    
    const RenderComponent = () => {
        switch (pathname) {
            case "/":
                return(
                    <>
                        <Link to="/register"><OutlinedButton>Crear cuenta</OutlinedButton></Link>
                        <Link to="/login"><OutlinedButton>Iniciar sesión</OutlinedButton></Link>
                    </> 
                )  
            case "/login":
                return(
                    <>
                        <Link to="/register"><OutlinedButton>Crear cuenta</OutlinedButton></Link>
                    </> 
                )
            case "/register":
                return(
                    <>
                        <Link to="/login"><OutlinedButton>Iniciar sesión</OutlinedButton></Link>
                    </> 
                )          
        }
    }
    
    return(
        <header className={styles.headerFijo}>
            <div className={styles.contenedorHeader}>
                <div className={styles.headerIzquierda}>
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                    <Link to="/"><p>Sentite como en tu hogar</p></Link>
                </div>
                <div className={styles.menuHamburguesa}>
                    <SideNav/>
                </div>
                <div className={styles.headerDerecha}>
                    { estaLogueado ? <Profile /> : <RenderComponent/> } 
                </div>                
            </div>
        </header>
    );
}