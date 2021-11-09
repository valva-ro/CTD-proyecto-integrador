import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilledButton from "../../Buttons/FilledButton";
import Estrellas from "../../Estrellas/Estrellas";
import styles from "./TarjetaAlojamiento.module.css";

export default function TarjetaAlojamiento({ alojamiento }) {
  const { id,
          title, 
          img, 
          description, 
          category, 
          location, 
          points } = alojamiento;

  const [esVerMas, setEsVerMas] = useState(true);
  const toggleVerMas = () => setEsVerMas(!esVerMas);
  
  const abrirPaginaProducto = () => {

  }

  return (
    <div className={styles.tarjetaAlojamiento}>
      <div
        className={styles.imagenAlojamiento}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <i className={`fas fa-heart ${styles.corazon}`}></i>
      </div>

      <div className={styles.descripcionAlojamiento}>
        <div className={styles.informacionPrincipal}>
          <div className={styles.nombreAlojamiento}>
            <div className={styles.tipoYCalificacion}>
              <h4>{category}</h4>
              <Estrellas puntaje={points} />
            </div>
            <h2>{title}</h2>
          </div>
          <div className={styles.puntajeAlojamiento}>
            <div className={styles.puntajeNumerico}>8</div>
            <div className={styles.detalle}>Muy bueno</div>
          </div>
        </div>
        <div className={styles.informacionDetalle}>
          <div className={styles.ubicacion}>
            <i className="fas fa-map-marker-alt"></i>
            <p>
              {location} <a href="#">Mostrar en el mapa</a>
            </p>
          </div>
          <div className={styles.servicios}>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-swimmer"></i>
          </div>
        </div>
        <p>
          {description.length <= 85 ? (
            description
          ) : (
            <>
              {esVerMas && description.length > 85
                ? description.slice(0, 85)
                : description}
              ...
              <span onClick={toggleVerMas} className={styles.verMas}>
                {esVerMas ? " leer más" : " leer menos"}
              </span>
            </>
          )}
        </p>
        <Link to={`product/${id}`}>
          <FilledButton styles={styles.btnVerMas}>Ver más</FilledButton>
        </Link>
      </div>
    </div>
  );
}
