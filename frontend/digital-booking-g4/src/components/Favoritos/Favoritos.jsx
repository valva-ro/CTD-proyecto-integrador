import React, { useState } from "react";
import { Link } from "react-router-dom";
import TituloBloque from "../TituloBloque/TituloBloque";
import styles from "./Favoritos.module.css";

export default function Favoritos() {
  const [hayFavoritos, setHayFavoritos] = useState(false);

  return (
    <>
      <div className={styles.titleFavContainer}>
        <TituloBloque styles={styles.favTitle}>Tus favoritos</TituloBloque>
        <Link to="/">
          <i className="fas fa-chevron-left"></i>
        </Link>
      </div>
      <section className={styles.favoritosContainer}>
        {!hayFavoritos ? (
          <div className={styles.avisoNoFavs}>
            <i class="far fa-frown"></i>
            <p>No tienes productos en favoritos</p>
          </div>
        ) : null}
      </section>
    </>
  );
}
