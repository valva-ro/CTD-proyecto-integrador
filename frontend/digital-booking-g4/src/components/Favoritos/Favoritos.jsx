import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import TituloBloque from "../TituloBloque/TituloBloque";
import TarjetaAlojamiento from "../BloqueAlojamientos/TarjetaAlojamiento/TarjetaAlojamiento";
import useFetch from "../../hooks/useFetch";
import loggedContext from "../../contexts/loggedContext";
import styles from "./Favoritos.module.css";

export default function Favoritos() {
  // TODO: obtener ID dinámicamente
  const idUsuario = 1;
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
      <div className={styles.titleFavContainer}>
        <TituloBloque styles={styles.favTitle}>Tus favoritos</TituloBloque>
        <Link to="/">
          <i className="fas fa-chevron-left"></i>
        </Link>
      </div>
      <section className={styles.favoritosContainer}>
        {favoritos.length === 0 ? (
          <div className={styles.avisoNoFavs}>
            <i class="far fa-frown"></i>
            <p>No tienes productos en favoritos</p>
          </div>
        ) : (
          favoritos.map((alojamiento, i) => (
            <li key={i} className={styles.alojamiento}>
              <TarjetaAlojamiento
                alojamiento={alojamiento}
                isLoaded={true}
              />
            </li>
          ))
        )}
      </section>
    </>
  );
}
