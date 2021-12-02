import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import FilledButton from "../Buttons/FilledButton";
import Estrellas from "../Estrellas/Estrellas";
// Estilos importados desde la carpeta TarjetaAlojamiento para reutilizar codigo
import styles from "../../components/BloqueAlojamientos/TarjetaAlojamiento/TarjetaAlojamiento.module.css";
import loggedContext from "../../contexts/loggedContext";
import obtenerClasificacion from "../../utils/obtenerClasificacion";
import calcularPromedioPuntuacion from "../../utils/calcularPromedioPuntuacion";
import get from "../../utils/get";

export default function ReservaCard({
  alojamiento: { id, nombre, categoria, ciudad, imagenes, caracteristicas },
  reserva: {
    id: idReserva,
    horaEntrada,
    nombre: nombreReserva,
    apellido,
    mail,
    fechaIngreso,
    fechaEgreso,
  },
}) {
  const { isLogged } = useContext(loggedContext);
  const [puntuaciones, setPuntuaciones] = useState([]);
  const puntaje = calcularPromedioPuntuacion(puntuaciones);
  const [reservas, setReservas] = useState([]);
  const idUsuario = parseInt(localStorage.getItem("id"));

  useEffect(() => {
    get(`puntuaciones/producto/${id}`).then((data) => {
      setPuntuaciones(data);
    });
  }, [puntuaciones]);

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
    <div className={styles.tarjetaAlojamiento} data-aos="fade-up">
      <div
        className={styles.imagenAlojamiento}
        style={{
          backgroundImage: `url(${buscarImagenPrincipal().imagenUrl})`,
        }}
      ></div>

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
              <Link to={`product/${id}/features#mapa`}>Mostrar en el mapa</Link>
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
        <div className={styles.reservaDetalleCard}>
          <h3>Datos de la reserva</h3>
          <div>
            <ul className={styles.reservaDetalleCardLeft}>
              <li>
                Número de reserva: <span>{idReserva}</span>
              </li>
              <li>
                Nombre: <span>{nombreReserva}</span>
              </li>
              <li>
                Apellido: <span>{apellido}</span>
              </li>
              <li>
                Mail: <span>{mail}</span>
              </li>
            </ul>
            <ul className={styles.reservaDetalleCardRight}>
              <li>
                Horario de llegada: <span>{horaEntrada}hs</span>
              </li>
              <li>
                Check in: <span>{fechaIngreso}</span>
              </li>
              <li>
                Check out: <span>{fechaEgreso}</span>
              </li>
            </ul>
          </div>
        </div>

        <Link to={`product/${id}/features`}>
          <FilledButton styles={styles.btnVerMas}>Ver más</FilledButton>
        </Link>
      </div>
    </div>
  );
}
