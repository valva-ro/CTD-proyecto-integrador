import React, { useContext } from "react";
import styles from "./Profile.module.css";
import loggedContext from "../../contexts/loggedContext";

export default function Profile({ nombre = "Bruno", apellido = "Rodriguez" }) {
  const { setIsLogged } = useContext(loggedContext);
  const iniciales = `${nombre.charAt(0).toUpperCase()}${apellido.charAt(0).toUpperCase()}`;
  const nombreCapitalized = capitalizeString(nombre);
  const apellidoCapitalized = capitalizeString(apellido);

  return (
    <div className={styles.contenedorProfile}>
      <p className={styles.avatar}>{iniciales}</p>
      <div className={styles.contenedorNombre}>
        <p className={styles.saludo}>Hola,</p>
        <p
          className={styles.nombre}
        >{`${nombreCapitalized} ${apellidoCapitalized}`}</p>
      </div>
      <span
        className={styles.cerrar}
        data-testid="btnCerrarSesion"
        onClick={() => setIsLogged(false)}
      >
        X
      </span>
    </div>
  );
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
