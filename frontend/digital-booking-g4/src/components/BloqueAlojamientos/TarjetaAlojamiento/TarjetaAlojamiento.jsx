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
              {location}
              {/* 
                TODO: acá tendríamos que agregar a continuación del id del 
                producto un #ubicacion o lo que corresponda al ID de esa 
                sección en el producto.
                De esa manera cuando el usuario haga click no solo lo lleva 
                a la página del producto, sino que además scrollea hasta el 
                mapa.
              */}
              <Link to={`product/${id}`}>Mostrar en el mapa</Link>
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
