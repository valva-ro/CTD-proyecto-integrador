import Estrellas from "../../../Estrellas/Estrellas";
import FilledButton from "../../../Buttons/FilledButton";
import calcularPromedioPuntuacion from "../../../../utils/calcularPromedioPuntuacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Detalles.module.css";
import post from "../../../../utils/post";
import { useState } from "react";
import Modal from "../../../Modal/Modal";
import TarjetaPostExitoso from "../../../TarjetaPostExitoso/TarjetaPostExitoso";
import formatearFecha from "../../../../utils/formatearFecha";

export default function ProductoReserva({
  alojamiento: {
    id,
    nombre,
    categoria,
    ciudad,
    imagenes,
    puntuaciones,
    direccion,
  },
  checkin,
  checkout,
  nombreUsuario,
  apellido,
  mail,
  ciudadUsuario,
  textArea,
  isVacunadx,
  horarioLlegada,
}) {
  const puntaje = calcularPromedioPuntuacion(puntuaciones);
  //const [isError, setIsError] = useState(false);
  const [error, setError] = useState({ message: "", isError: false });
  const [showModal, setShowModal] = useState(false);
  let token = "";
  if (localStorage.hasOwnProperty("jwt")) {
    token = localStorage.getItem("jwt").replaceAll('"', "");
  }
  const idUsuario = parseInt(localStorage.getItem("id"));

  const checkinFormat = formatearFecha(checkin);
  const checkoutFormat = formatearFecha(checkout);

  const buscarImagenPrincipal = () => {
    let imagen = imagenes.find((imagen) => {
      return imagen.imagenTitulo === "Principal";
    });
    if (imagen == null) {
      imagen = imagenes[0];
    }
    return imagen;
  };

  const validarCampos = () => {
    if (nombreUsuario === "") {
      setError({
        message: "El nombre es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (apellido === "") {
      setError({
        message: "El apellido es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (mail === "") {
      setError({
        message: "El correo electrónico es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (ciudadUsuario === "") {
      setError({
        message:
          "La ciudad es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (isVacunadx === null) {
      setError({
        message: "El campo de covid es obligatorio",
        isError: true,
      });
      return false;
    }
    if (checkin === null) {
      setError({
        message: "El checkin es un campo obligatorio",
        isError: true,
      });
      return false;
    }
    if (checkout === null) {
      setError({
        message: "El checkout es un campo obligatorio",
        isError: true,
      });
    }
    if (horarioLlegada === null) {
      setError({
        message: "El horario de llegada un campo obligatorio",
        isError: true,
      });
      return false;
    }
    return true;
  };

  function realizarReserva() {
    post(
      "reservas",
      {
        nombre: nombreUsuario,
        apellido,
        mail,
        ciudad: ciudadUsuario,
        horaEntrada: horarioLlegada,
        fechaIngreso: checkinFormat,
        fechaEgreso: checkoutFormat,
        datos: textArea,
        vacunaCovid: isVacunadx,
        producto: { id },
        usuario: { id: idUsuario },
      },
      {
        "Content-Type": "application/json",
        Authorization: token,
      }
    )
      .then((response) => {
        if (response.status === 201) {
          setShowModal(true);
          setError({
            isError: false,
          })
        } else {
          setShowModal(false);
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = () => {
    const camposValidados = validarCampos();
    if (camposValidados) {
      realizarReserva();
    }
  }

  return (
    <div className={styles.detallesContainer}>
      <h2 className={styles.tituloTarjeta}>Detalle de la reserva</h2>
      <div className={styles.infContainer}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${buscarImagenPrincipal().imagenUrl})`,
          }}
        ></div>
        <div className={styles.letterContainer}>
          <p className={styles.categoria}>{categoria.titulo.toUpperCase()}</p>
          <p className={styles.titulo}>{nombre}</p>
          <Estrellas puntaje={puntaje} />
          <div className={styles.direccion}>
            <i className="fas fa-map-marker-alt"></i>
            <p>
              {direccion}, {ciudad.nombre}, {ciudad.pais}
            </p>
          </div>
          <div className={styles.fecha}>
            <p>Check in</p>
            <p>
              {checkin == null
                ? "__/ __/ __"
                : new Date(checkin).toLocaleDateString()}
            </p>
          </div>
          <div className={styles.fecha}>
            <p>Check out</p>
            <p>
              {checkout == null
                ? "__/ __/ __"
                : new Date(checkout).toLocaleDateString()}
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <FilledButton
              onClick={handleSubmit}
              styles={styles.buttonSubmit}
            >
              Confirmar reserva
            </FilledButton>
          </div>
        </div>
      </div>
      <Modal
        estaAbierto={showModal}
        onCloseRequest={() => setShowModal(false)}
        colorBtnCerrar="#383b58"
        colorFondo="#383b5853"
      >
        <TarjetaPostExitoso
          contenidoH2={"¡Muchas gracias!"}
          contenidoP={"Su reserva ha sido realizada con éxito"}
        />
      </Modal>
      {!error.isError ? null : (
        <div className={styles.errorMsjContainer}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
}
