import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import TituloBloque from "../TituloBloque/TituloBloque";
import ReservaCard from "./ReservaCard";
import SkeletonTarjetaAlojamiento from "../BloqueAlojamientos/TarjetaAlojamiento/SkeletonTarjetaAlojamiento";
import useFetch from "../../hooks/useFetch";
import loggedContext from "../../contexts/loggedContext";
import styles from "./FavoritosYReservas.module.css";

export default function Reservas() {
  const history = useHistory();
  const idUsuario = parseInt(localStorage.getItem("id"));
  const token = localStorage.getItem("jwt").replaceAll('"', "");
  const [reservas, setReservas] = useState([]);
  const { isLogged } = useContext(loggedContext);
  const {
    isLoaded: isLoadedReservas,
    items: itemsReservas,
  } = useFetch(`reservas/usuario/${idUsuario}`, {
    headers: { Authorization: token },
  });

  console.log(itemsReservas);

  useEffect(() => {
    if (isLogged && isLoadedReservas) {
     setReservas(itemsReservas);
    }
  }, [isLoadedReservas, isLogged, itemsReservas, reservas]);

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
        {isLoadedReservas && reservas.length === 0 ? (
          <div className={styles.avisoNoFavs}>
            <i className="far fa-frown"></i>
            <p>No has realizado reservas todavía</p>
          </div>
        ) : !isLoadedReservas ? (
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
            {reservas.map((reserva) => (
              <li key={reserva.id} className={styles.alojamiento}>
                <ReservaCard
                  alojamiento={reserva.producto}
                  reserva={reserva}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
