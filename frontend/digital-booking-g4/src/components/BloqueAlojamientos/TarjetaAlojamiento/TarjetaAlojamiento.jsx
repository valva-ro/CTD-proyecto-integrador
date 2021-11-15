import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilledButton from "../../Buttons/FilledButton";
import Estrellas from "../../Estrellas/Estrellas";
import styles from "./TarjetaAlojamiento.module.css";

export default function TarjetaAlojamiento({ alojamiento }) {
  const { id,
    nombre,
    descripcion,
    categoria,
    ciudad,
    imagenes,
    caracteristicas } = alojamiento;

  const [esVerMas, setEsVerMas] = useState(true);
  const toggleVerMas = () => setEsVerMas(!esVerMas);

  const buscarImagenPrincipal = () => {
    let imagen = imagenes.find(imagen => {
      return imagen.imagenTitulo === "Principal";
    })
    if (imagen == null) {
      imagen = imagenes[0];
    }
    return imagen;
  }

  return (
    <div className={styles.tarjetaAlojamiento}>
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
              <Estrellas puntaje={8} />
            </div>
            <h2>{nombre}</h2>
          </div>
          <div className={styles.puntajeAlojamiento}>
            <div className={styles.puntajeNumerico}>{8}</div>
            <div className={styles.detalle}>Muy bueno</div>
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
            {
              caracteristicas.map((caracteristica, i) =>
                <i key={`caracteristica-${i}`} className={`${caracteristica.icono}`}></i>
              )
            }
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
        <Link to={`product/${id}`}>
          <FilledButton styles={styles.btnVerMas}>Ver más</FilledButton>
        </Link>
      </div>
    </div>
  );
}
