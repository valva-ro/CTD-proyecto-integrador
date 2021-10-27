import React, {useEffect, useState} from "react";
import Profile from "../Profile/Profile";
import Options from "./Options";
import { Link } from "react-router-3";
import styles from "./SideNav.module.css";


export default function SideNav() {
  const [estaLogueado, setEstaLogueado] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  
  const RenderComponent = () => {
    const pathname = window.location.pathname
    switch (pathname) {
      case "/":
        return(
            <>
              <Link to="/register"><Options contenido={"Crear cuenta"}/></Link>
              <Link to="/login"><Options contenido={"Iniciar sesión"}/></Link>
            </> 
        )  
      case "/login":
        return(
            <>
              <Link to="/register"><Options contenido={"Crear cuenta"}/></Link>
            </> 
        )
      case "/register":
        return(
            <>
              <Link to="/login"><Options contenido={"Iniciar sesión"}/></Link>
            </> 
        )          
    }
  }
  return (
    <>
      <div
        className={styles.menuHamburguesa}
        onClick={() => setIsOpened(true)}
      >
        <i className="bx bx-menu"></i>
      </div>
      <div className={styles.menuDrawer}>
        <div className={isOpened ? styles.isOpened : null}>
          <div className={styles.header}>
            <span
              className={styles.cerrarSideNav}
              onClick={() => setIsOpened(false)}
            >
              X
            </span>
            {estaLogueado ? <Profile /> : <span className={styles.menuWord}>MENÚ</span>}
          </div>
          <div className={styles.main}>
            {!estaLogueado ? 
              <div className={styles.opciones}>
                <RenderComponent/> 
              </div> :
              <p className={styles.cerrarSesion}>
                ¿Deseas<span> cerrar sesión</span>?
              </p>
            }
          </div>
          <div className={styles.footer}>
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-linkedin"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-instagram-alt"></i>
          </div>
        </div>
      </div>
    </>
  );
}