import React, {useEffect, useState, useContext} from "react";
import Profile from "../Profile/Profile";
import Options from "./Options";
import { Link, useLocation } from "react-router-dom";
import styles from "./SideNav.module.css";
import loggedContext from "../../contexts/loggedContext";


export default function SideNav() {
  const { isLogged, setIsLogged } = useContext(loggedContext);
  const location = useLocation();
  const [isOpened, setIsOpened] = useState(false);
  
  const RenderComponent = () => {
    switch (location.pathname) {
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
            {isLogged ? <Profile /> : <span className={styles.menuWord}>MENÚ</span>}
          </div>
          <div className={styles.main}>
            {!isLogged ? 
              <div className={styles.opciones}>
                <RenderComponent/> 
              </div> :
              <p className={styles.cerrarSesion}>
                ¿Deseas<span onClick={() => setIsLogged(false)}> cerrar sesión</span>?
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