import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilledButton from "../../Buttons/FilledButton";
import Estrellas from "../../Estrellas/Estrellas";
import styles from "./TarjetaAlojamiento.module.css";
import obtenerClasificacion from "../../../utils/obtenerClasificacion"
import calcularPromedioPuntuacion from "../../../utils/calcularPromedioPuntuacion";

export default function TarjetaAlojamiento({
  alojamiento: {
    id,
    nombre,
    descripcion,
    categoria,
    ciudad,
    imagenes,
    caracteristicas,
    puntuaciones
  },
}) {
  const [esVerMas, setEsVerMas] = useState(true);
  const puntaje = calcularPromedioPuntuacion(puntuaciones);
  const buscarImagenPrincipal = () => {
    let imagen = imagenes.find((imagen) => {
      return imagen.imagenTitulo === "Principal";
    });
    if (imagen == null) {
      imagen = imagenes[0];
    }
    return imagen;
  };
  return (
    <div className={styles.tarjetaAlojamiento} data-aos="flip-up">
      <div
        className={styles.imagenAlojamiento}
        style={{
          backgroundImage: `url(${buscarImagenPrincipal().imagenUrl})`,
        }}
      >
        <i className={`fas fa-heart ${styles.corazon}`}></i>
      </div>

      <div className={styles.descripcionAlojamiento}>
        <div className={styles.informacionPrincipal}>
          <div className={styles.nombreAlojamiento}>
            <div className={styles.tipoYCalificacion}>
              <h4>{categoria.titulo}</h4>
              <Estrellas puntaje={puntaje} />
            </div>
            <h2>{nombre}</h2>
          </div>
          <div className={styles.puntajeAlojamiento}>
            {isNaN(puntaje) ? (
              ""
            ) : (
              <div className={styles.puntajeNumerico}>{puntaje * 2}</div>
            )}
            <div className={styles.detalle}>
              {obtenerClasificacion(puntaje)}
            </div>
          </div>
        </div>
        <div className={styles.informacionDetalle}>
          <div className={styles.ubicacion}>
            <i className="fas fa-map-marker-alt"></i>
            <p>
              {ciudad.nombre}
              <Link to={`product/${id}#mapa`}>Mostrar en el mapa</Link>
            </p>
          </div>
          <div className={styles.servicios}>
            {caracteristicas.map((caracteristica) => (
              <i
                key={`caracteristica-${caracteristica.id}`}
                className={`${caracteristica.icono}`}
              ></i>
            ))}
          </div>
        </div>
        <p>
          {descripcion.length <= 85 ? (
            descripcion
          ) : (
            <>
              {esVerMas && descripcion.length > 85
                ? `${descripcion.slice(0, 85)}...`
                : `${descripcion.slice(0, 170)}...`}
              <span
                onClick={() => setEsVerMas(!esVerMas)}
                className={styles.verMas}
              >
                {esVerMas ? " Leer más" : " Leer menos"}
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
