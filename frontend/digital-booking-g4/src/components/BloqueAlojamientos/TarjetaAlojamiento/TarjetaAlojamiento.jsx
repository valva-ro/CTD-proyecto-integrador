import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import FilledButton from "../../Buttons/FilledButton";
import Estrellas from "../../Estrellas/Estrellas";
import Modal from "../../Modal/Modal";
import Mapa from "../../Mapa/Mapa";
import styles from "./TarjetaAlojamiento.module.css";
import loggedContext from "../../../contexts/loggedContext";
import obtenerClasificacion from "../../../utils/obtenerClasificacion";
import calcularPromedioPuntuacion from "../../../utils/calcularPromedioPuntuacion";
import useFetch from "../../../hooks/useFetch";

export default function TarjetaAlojamiento({
  alojamiento: {
    id,
    nombre,
    descripcion,
    categoria,
    ciudad,
    imagenes,
    caracteristicas,
    puntuaciones,
    direccion
  },
}) {
  const [isFavorito, setIsFavorito] = useState();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const { isLogged } = useContext(loggedContext);
  const [esVerMas, setEsVerMas] = useState(true);
  const puntaje = calcularPromedioPuntuacion(puntuaciones);
  const idUsuario = parseInt(localStorage.getItem("id"));
  const { isLoaded, items } = useFetch(`usuarios/${idUsuario}`);
  const coordenadas = {
    lat: ciudad.latitud,
    lng: ciudad.longitud,
  };

  useEffect(() => {
    if (isLogged && isLoaded) {
      setIsFavorito(
        items.productosFavoritos.find((fav) => fav.id === id) !== undefined
      );
    }
  }, [isLoaded, isLogged, items, id]);

  const buscarImagenPrincipal = () => {
    let imagen = imagenes.find((imagen) => {
      return imagen.imagenTitulo === "Principal";
    });
    if (imagen == null) {
      imagen = imagenes[0];
    }
    return imagen;
  };

  async function fetchFav(accion) {
    await fetch(
      `http://localhost:8080/productos/${id}/${accion}/usuarios/${idUsuario}`,
      {
        method: "PUT",
      }
    );
  }

  const handleFav = () => {
    if (!isFavorito) {
      fetchFav("agregar");
    } else {
      fetchFav("eliminar");
    }
    setIsFavorito(!isFavorito);
  };

  const openMap = () => setIsMapOpen(true);
  const closeMap = () => setIsMapOpen(false);

  return (
    <>
      <div className={styles.tarjetaAlojamiento} data-aos="fade-up">
        <div
          className={styles.imagenAlojamiento}
          style={{
            backgroundImage: `url(${buscarImagenPrincipal().imagenUrl})`,
          }}
        >
          {isLogged && isLoaded ? (
            <i
              onClick={() => handleFav()}
              className={`${isFavorito ? "fas" : "far"} fa-heart ${
                styles.corazon
              }`}
            ></i>
          ) : null}
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
                <span className={styles.mostrarEnMapa} onClick={openMap}>
                  Mostrar en el mapa
                </span>
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
                  : descripcion}
                <span
                  onClick={() => setEsVerMas(!esVerMas)}
                  className={styles.verMas}
                >
                  {esVerMas ? " Leer más" : " Leer menos"}
                </span>
              </>
            )}
          </p>
          <Link to={`product/${id}/features`}>
            <FilledButton styles={styles.btnVerMas}>Ver más</FilledButton>
          </Link>
        </div>
      </div>
      <Modal
        estaAbierto={isMapOpen}
        onCloseRequest={closeMap}
        colorBtnCerrar="#000000"
      >
        <div className={styles.contenedorMapa}>
          <h2 className={styles.tituloMapa}>
            {`${direccion}, ${ciudad.nombre}, ${ciudad.pais}`}
            </h2>
          <Mapa coordenadas={coordenadas} />
        </div>
      </Modal>
    </>
  );
}
