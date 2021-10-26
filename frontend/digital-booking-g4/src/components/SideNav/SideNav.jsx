import React, {useEffect, useState} from "react";
import Profile from "../Profile/Profile";
import Options from "./Options";
import styles from "./SideNav.module.css";

export default function SideNav() {
    const [estaLogueado, setEstaLogueado] = useState(true);
    const [isOpened, setIsOpened] = useState(false);

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
              <div className={styles.opciones}>
                <Options contenido={"Crear cuenta"}/> {/* TODO: renderizar lo que corresponda según pagina */}
                <Options contenido={"Iniciar sesión"}/> {/* TODO: renderizar lo que corresponda según pagina */}
              </div>
              {estaLogueado ? 
                <p className={styles.cerrarSesion}>
                  ¿Deseas<span> cerrar sesión</span>?
                </p>
              : null}
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