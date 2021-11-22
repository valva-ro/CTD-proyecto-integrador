import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import loggedContext from "../../contexts/loggedContext";

export default function Profile() {
  const {
    setIsLogged,
    userInformation: { nombre, apellido },
  } = useContext(loggedContext);
  const iniciales = `${nombre.charAt(0).toUpperCase()}${apellido
    .charAt(0)
    .toUpperCase()}`;
  const nombreCapitalized = capitalizeString(nombre);
  const apellidoCapitalized = capitalizeString(apellido);

  function cerrarSesion() {
    setIsLogged(false);
    localStorage.setItem("jwt", "");
    localStorage.setItem("email", "");
  }

  return (
    <div className={styles.contenedorProfile}>
      <p className={styles.avatar}>{iniciales}</p>
      <div className={styles.contenedorNombre}>
        <p className={styles.saludo}>Hola,</p>
        <p
          className={styles.nombre}
        >{`${nombreCapitalized} ${apellidoCapitalized}`}</p>
        <Link to="/favoritos">Favoritos</Link>
      </div>
      <span
        className={styles.cerrar}
        data-testid="btnCerrarSesion"
        onClick={cerrarSesion}
      >
        X
      </span>
    </div>
  );
}

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
