import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import TituloBloque from "../TituloBloque/TituloBloque";
import TarjetaAlojamiento from "../BloqueAlojamientos/TarjetaAlojamiento/TarjetaAlojamiento";
import SkeletonTarjetaAlojamiento from "../BloqueAlojamientos/TarjetaAlojamiento/SkeletonTarjetaAlojamiento";
import useFetch from "../../hooks/useFetch";
import loggedContext from "../../contexts/loggedContext";
import get from "../../utils/get";
import styles from "./Favoritos.module.css";

export default function Favoritos() {
  const history = useHistory();
  const idUsuario = parseInt(localStorage.getItem("id"));
  const [favoritos, setFavoritos] = useState([]);
  const { isLoaded, items } = useFetch(`usuarios/${idUsuario}`);
  const { isLogged } = useContext(loggedContext);

  useEffect(() => {
    if (isLogged && isLoaded) {
      for (let i = 0; i < items.productosFavoritos.length; i++) {
        const alojamiento = items.productosFavoritos[i];
        get(`puntuaciones/producto/${alojamiento.id}`)
          .then((data) => {
            items.productosFavoritos[i].puntuaciones = data;
          })
          .then(setFavoritos(items.productosFavoritos));
      }
    }
  }, [isLoaded, isLogged, items, favoritos]);

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
        {isLoaded && favoritos.length === 0 ? (
          <div className={styles.avisoNoFavs}>
            <i className="far fa-frown"></i>
            <p>No tienes productos en favoritos</p>
          </div>
        ) : !isLoaded ? (
          <ul className={styles.alojamientosContainer}>
            {Array.apply(0, Array(3)).map((x, i) => (
              <li
                key={`skeletonAlojamiento-${i}`}
                className={styles.alojamiento}
              >
                <SkeletonTarjetaAlojamiento />
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles.alojamientosContainer}>
            {favoritos.map((alojamiento) => (
              <li key={alojamiento.id} className={styles.alojamiento}>
                <TarjetaAlojamiento
                  alojamiento={alojamiento}
                  isLoaded={isLoaded}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
