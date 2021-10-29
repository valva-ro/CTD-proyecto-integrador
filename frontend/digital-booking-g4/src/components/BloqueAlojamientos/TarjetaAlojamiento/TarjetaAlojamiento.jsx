import React, { useState } from "react";
import FilledButton from "../../Buttons/FilledButton";
import styles from "./TarjetaAlojamiento.module.css";

export default function TarjetaAlojamiento({
  titulo,
  imagen,
  descripcion,
  categoria,
  ubicacion,
  cantEstrellas,
}) {
  const [esVerMas, setEsVerMas] = useState(true);
  const toggleVerMas = () => setEsVerMas(!esVerMas);

  let estrellas = [];
  for (let i = 0; i < cantEstrellas; i++) {
    estrellas.push(<i className="fas fa-star"></i>);
  }

  return (
    <div className={styles.tarjetaAlojamiento}>
      <div
        className={styles.imagenAlojamiento}
        style={{
          backgroundImage: `url(${imagen})`,
        }}
      >
        <i className={`fas fa-heart ${styles.corazon}`}></i>
      </div>

      <div className={styles.descripcionAlojamiento}>
        <div className={styles.informacionPrincipal}>
          <div className={styles.nombreAlojamiento}>
            <div className={styles.tipoYCalificacion}>
              <h4>{categoria}</h4>
              <span className={styles.estrellas} aria-label="Estrellas">
                {estrellas}
              </span>
            </div>
            <h2>{titulo}</h2>
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
              {ubicacion} <a href="#">Mostrar en el mapa</a>
            </p>
          </div>
          <div className={styles.servicios}>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-swimmer"></i>
          </div>
        </div>
        <p>
          {descripcion.length <= 85 ? (
            descripcion
          ) : (
            <>
              {esVerMas && descripcion.length > 85
                ? descripcion.slice(0, 85)
                : descripcion}
              ...
              <span onClick={toggleVerMas} className={styles.verMas}>
                {esVerMas ? " leer más" : " leer menos"}
              </span>
            </>
          )}
        </p>
        <FilledButton onClick={toggleVerMas} styles={styles.btnVerMas}>
          Ver más
        </FilledButton>
      </div>
    </div>
  );
}
