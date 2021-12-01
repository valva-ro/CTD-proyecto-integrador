import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import TituloBloque from "../TituloBloque/TituloBloque";
import TarjetaAlojamiento from "../BloqueAlojamientos/TarjetaAlojamiento/TarjetaAlojamiento";
import SkeletonTarjetaAlojamiento from "../BloqueAlojamientos/TarjetaAlojamiento/SkeletonTarjetaAlojamiento";
import useFetch from "../../hooks/useFetch";
import loggedContext from "../../contexts/loggedContext";
import get from "../../utils/get";
import styles from "./FavoritosYReservas.module.css";

export default function Reservas() {
  const history = useHistory();
  const idUsuario = parseInt(localStorage.getItem("id"));
  const [reservas, setReservas] = useState([]);
  const { isLoaded, items } = useFetch(`usuarios/${idUsuario}`);
  const { isLogged } = useContext(loggedContext);

  useEffect(() => {
    if (isLogged && isLoaded) {
      for (let i = 0; i < items.reservas.length; i++) {
        const alojamiento = items.reservas[i];
        get(`puntuaciones/producto/${alojamiento.id}`)
          .then((data) => {
            items.reservas[i].puntuaciones = data;
          })
          .then(setReservas(items.reservas));
      }
    }
  }, [isLoaded, isLogged, items, reservas]);

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
          <TituloBloque styles={styles.favTitle}>Tus reservas</TituloBloque>
        </div>
      </div>
      <section className={styles.favoritosContainer}>
        {isLoaded && reservas.length === 0 ? (
          <div className={styles.avisoNoFavs}>
            <i className="far fa-frown"></i>
            <p>No has realizado reservas todavía</p>
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
            {reservas.map((alojamiento) => (
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
