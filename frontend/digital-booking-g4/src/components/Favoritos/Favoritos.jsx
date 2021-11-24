import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import TituloBloque from "../TituloBloque/TituloBloque";
import TarjetaAlojamiento from "../BloqueAlojamientos/TarjetaAlojamiento/TarjetaAlojamiento";
import useFetch from "../../hooks/useFetch";
import loggedContext from "../../contexts/loggedContext";
import styles from "./Favoritos.module.css";

export default function Favoritos() {
  const history = useHistory();
  const idUsuario = parseInt(localStorage.getItem("id"));
  const [favoritos, setFavoritos] = useState([]);
  const { isLoaded, items } = useFetch(`usuarios/${idUsuario}`);
  const { isLogged } = useContext(loggedContext);

  useEffect(() => {
    if (isLogged && isLoaded) {
      setFavoritos(items.productosFavoritos);
    }
  }, [isLoaded, isLogged, items]);

  if (!isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={styles.contenedorHeader}>
        <div className={styles.headerIzquierda}>
          <div className={styles.a} onClick={history.goBack}>
            <span>
              <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </span>
            <span>ATRÁS</span>
          </div>
        </div>
        <div className={styles.headerDerecha}>
          <TituloBloque styles={styles.favTitle}>Tus favoritos</TituloBloque>
        </div>
      </div>
      <section className={styles.favoritosContainer}>
        {favoritos.length === 0 ? (
          <div className={styles.avisoNoFavs}>
            <i className="far fa-frown"></i>
            <p>No tienes productos en favoritos</p>
          </div>
        ) : (
          favoritos.map((alojamiento, i) => (
            <li key={i} className={styles.alojamiento}>
              <TarjetaAlojamiento
                alojamiento={alojamiento}
                isLoaded={isLoaded}
              />
            </li>
          ))
        )}
      </section>
    </>
  );
}
