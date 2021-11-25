import React, { useContext } from "react";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";
import OutlinedButton from "../Buttons/OutlinedButton";
import styles from "./Header.module.css";
import logo from "./logo1.png";
import { Link, useLocation } from "react-router-dom";
import loggedContext from "../../contexts/loggedContext";

export default function Header() {
  const { isLogged } = useContext(loggedContext);
  const location = useLocation();

  const RenderComponent = () => {
    switch (location.pathname) {
      default:
        return (
          <>
            <Link to="/register">
              <OutlinedButton>Crear cuenta</OutlinedButton>
            </Link>
            <Link to="/login">
              <OutlinedButton>Iniciar sesión</OutlinedButton>
            </Link>
          </>
        );
      case "/login":
        return (
          <Link to="/register">
            <OutlinedButton>Crear cuenta</OutlinedButton>
          </Link>
        );
      case "/register":
        return (
          <Link to="/login">
            <OutlinedButton>Iniciar sesión</OutlinedButton>
          </Link>
        );
    }
  };

  return (
    <>
      <header className={styles.headerFijo}>
        <div className={styles.contenedorHeader}>
          <Link to="/">
            <div className={styles.headerIzquierda}>
              <img className={styles.logoImg} src={logo} alt="logo" />
              <div>
                <h1>
                  Hosting<span>Book</span>
                </h1>
                <p>Hospedamos tu próximo sueño</p>
              </div>
            </div>
          </Link>
          <div className={styles.menuHamburguesa}>
            <SideNav />
          </div>
          <div className={styles.headerDerecha}>
            {isLogged ? <Profile /> : <RenderComponent />}
          </div>
        </div>
      </header>
    </>
  );
}
