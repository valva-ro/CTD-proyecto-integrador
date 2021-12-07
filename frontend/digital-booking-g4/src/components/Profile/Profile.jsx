import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import loggedContext from "../../contexts/loggedContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./Profile.module.css";

const ROL_USER = "USER";
const ROL_ADMIN = "ADMIN";

export default function Profile() {
  const {
    setIsLogged,
    userInformation: { nombre, apellido },
  } = useContext(loggedContext);
  const [dropdownDesplegado, setDropdownDesplegado] = useState(false);
  const iniciales = `${nombre.charAt(0).toUpperCase()}${apellido.charAt(0).toUpperCase()}`;
  const nombreCapitalized = capitalizeString(nombre);
  const apellidoCapitalized = capitalizeString(apellido);
  const dropdownRef = useRef(null);
  // TODO: obtener de la API
  const rol = "USER";

  useOnClickOutside(dropdownRef, () => setDropdownDesplegado(false));

  function cerrarSesion() {
    setIsLogged(false);
    setDropdownDesplegado(false);
    localStorage.clear();
  }

  function toggleDropdown() {
    setDropdownDesplegado(!dropdownDesplegado);
  }

  function obtenerItems() {
    let items;
    if (rol === ROL_USER) {
      items = (
        <>
          <Link
            to="/favorites"
            onClick={toggleDropdown}
            className={styles.itemDropdown}
          >
            Favoritos
          </Link>
          <Link
            to="/reservations"
            onClick={toggleDropdown}
            className={styles.itemDropdown}
          >
            Reservas
          </Link>
          <span
            onClick={cerrarSesion}
            className={styles.itemDropdown}
            data-testid="btnCerrarSesion"
          >
            <i className={`fas fa-sign-out-alt ${styles.cerrarSesion}`}></i>
            Cerrar sesión
          </span>
        </>
      );
    } else if (rol === ROL_ADMIN) {
      items = (
        <>
          <Link to="/administration" onClick={toggleDropdown} className={styles.itemDropdown}>
            Administración
          </Link>
          <span
            onClick={cerrarSesion}
            className={styles.itemDropdown}
            data-testid="btnCerrarSesion"
          >
            Cerrar Sesión
          </span>
        </>
      );
    }
    return items;
  }

  return (
    <div className={styles.contenedorProfile}>
      <p className={styles.avatar}>{iniciales}</p>
      <div className={styles.contenedorNombre}>
        <p className={styles.saludo}>Hola,</p>
        <p
          className={styles.nombre}
        >{`${nombreCapitalized} ${apellidoCapitalized}`}</p>
      </div>
      <div className={styles.containerDropdown} ref={dropdownRef}>
        <i
          className={`fas fa-chevron-${dropdownDesplegado ? "up" : "down"} ${
            styles.desplegarDropdown
          }`}
          onClick={toggleDropdown}
        ></i>
        {dropdownDesplegado ? (
          <div className={styles.dropdown}>{obtenerItems()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
