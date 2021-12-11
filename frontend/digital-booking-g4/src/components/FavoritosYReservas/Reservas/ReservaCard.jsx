import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import FilledButton from "../../Buttons/FilledButton";
import OutlinedButton from "../../Buttons/OutlinedButton";
import Estrellas from "../../Estrellas/Estrellas";
import Modal from "../../Modal/Modal";
import Mapa from "../../Mapa/Mapa";
import TarjetaPuntuacionReserva from "./TarjetaPuntuacionReserva/TarjetaPuntuacionReserva";
// Estilos importados desde la carpeta TarjetaAlojamiento para reutilizar codigo
import styles from "../../BloqueAlojamientos/TarjetaAlojamiento/TarjetaAlojamiento.module.css";
import loggedContext from "../../../contexts/loggedContext";
import obtenerClasificacion from "../../../utils/obtenerClasificacion";
import calcularPromedioPuntuacion from "../../../utils/calcularPromedioPuntuacion";
import get from "../../../utils/get";
import deleteRequest from "../../../utils/deleteRequest";
import Swal from "sweetalert2";

export default function ReservaCard({
  alojamiento: {
    id,
    nombre,
    categoria,
    ciudad,
    imagenes,
    caracteristicas,
    direccion,
  },
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
  const [isMapOpen, setIsMapOpen] = useState(false);
  const puntaje = calcularPromedioPuntuacion(puntuaciones);
  const [showModalCalification, setShowModalCalification] = useState(false);
  const [calificadoPreviamente, setCalificadoPreviamente] = useState(null);
  const fechaActual = new Date();
  const fechaCheckout = new Date(fechaEgreso);
  const fechaCheckin = new Date(fechaIngreso);
  const puntuacionDeshabilitada = fechaActual < fechaCheckout;
  const cancelarDeshabilitado = fechaActual >= fechaCheckin;

  const idUsuario = parseInt(localStorage.getItem("id"));
  const coordenadas = {
    lat: ciudad.latitud,
    lng: ciudad.longitud,
  };

  useEffect(() => {
    get(`puntuaciones/producto/${id}`)
      .then((data) => {
        setPuntuaciones(data);
      })
      .catch((err) => console.log(err));

    get(`puntuaciones/usuario/${idUsuario}`)
      .then((puntuaciones) => {
        const existePuntuacion = puntuaciones.find((puntuacion) => puntuacion.producto.id === id) !== undefined;
        setCalificadoPreviamente(existePuntuacion);
      })
      .catch((err) => console.log(err));
  }, [calificadoPreviamente, showModalCalification]);

  const buscarImagenPrincipal = () => {
    let imagen = imagenes.find((imagen) => {
      return imagen.imagenTitulo === "Principal";
    });
    if (imagen == null) {
      imagen = imagenes[0];
    }
    return imagen;
  };

  const handleQualification = () => setShowModalCalification(true);
  const openMap = () => setIsMapOpen(true);
  const closeMap = () => setIsMapOpen(false);

  const eliminarReserva = () => {
    Swal.fire({
      title: "¿Seguro que quiere cancelar su reserva?",
      icon: "question",
      html: "Esta acción no puede deshacerse",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Sí, quiero cancelar la reserva",
      cancelButtonText: "No",
      customClass: {
        confirmButton: styles.confirmButton,
        cancelButton: styles.cancelButton,
      },
    })
      .then((result) => {
        if (result.isConfirmed) {
          deleteRequest(`reservas/${idReserva}`);
        } else {
          throw new Error("No se cancela la reserva");
        }
      })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Reserva eliminada",
            icon: "success",
            html: "Su reserva ha sido eliminada con éxito",
            confirmButtonText: "OK",
            customClass: {
              confirmButton: styles.confirmButton,
            },
          });
        } else {
          Swal.fire({
            title: "No se pudo eliminar la reserva",
            icon: "error",
            html: "Intente de nuevo más tarde",
            confirmButtonText: "OK",
            customClass: {
              confirmButton: styles.confirmButton,
            },
          });
        }
      })
      .catch((err) => console.log());
  };

  if (!isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <>
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
                  Check in: <span>{formatearFecha(fechaIngreso)}</span>
                </li>
                <li>
                  Check out: <span>{formatearFecha(fechaEgreso)}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.reservaButtonsContainer}>
            <FilledButton
              styles={styles.reservaBtnCalificar}
              disabled={puntuacionDeshabilitada}
              onClick={() => handleQualification()}
              title={
                !puntuacionDeshabilitada
                  ? null
                  : "Los alojamientos sólo pueden ser calificados luego del checkout"
              }
            >
              {calificadoPreviamente ? "Editar calificación" : "Calificar"}
            </FilledButton>
            <div className={styles.reservaButtonsContainerVerMasCancelar}>
              <Link to={`product/${id}/features`}>
                <FilledButton styles={styles.reservaBtnVerMas}>
                  Ver más
                </FilledButton>
              </Link>
              <OutlinedButton
                styles={styles.reservaBtnCancelar}
                onClick={eliminarReserva}
                disabled={cancelarDeshabilitado}
                title={
                  !cancelarDeshabilitado
                    ? null
                    : "No puede cancelar una reserva pasada"
                }
              >
                Cancelar reserva
              </OutlinedButton>
            </div>
          </div>
        </div>
      </div>
      <Modal
        estaAbierto={showModalCalification}
        onCloseRequest={() => setShowModalCalification(false)}
        colorBtnCerrar="#383b58"
        colorFondo="#383b5853"
      >
        <TarjetaPuntuacionReserva
          nombreAlojamiento={nombre}
          idAlojamiento={id}
        />
      </Modal>
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

function formatearFecha(fecha) {
  return fecha.split("-").reverse().join("/");
}
