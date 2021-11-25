import Estrellas from "../../../Estrellas/Estrellas";
import FilledButton from "../../../Buttons/FilledButton";
import calcularPromedioPuntuacion from "../../../../utils/calcularPromedioPuntuacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Detalles.module.css";
import post from "../../../../utils/post";
import { useHistory } from "react-router";
import { useState } from "react";

export default function ProductoReserva({
  alojamiento: { id, nombre, categoria, ciudad, imagenes, puntuaciones },
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
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const checkinFormat = new Date(checkin)
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-")
    .split("-")
    .reverse()
    .join("-");

  const checkoutFormat = new Date(checkout)
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-")
    .split("-")
    .reverse()
    .join("-");

  const buscarImagenPrincipal = () => {
    let imagen = imagenes.find((imagen) => {
      return imagen.imagenTitulo === "Principal";
    });
    if (imagen == null) {
      imagen = imagenes[0];
    }
    return imagen;
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
        usuario: { id: localStorage.getItem("id") },
      },
      {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("jwt"),
      }
    ).then((response) => {
      if (response.status === 201) {
        history.push("/succes");
      } else {
        setIsError(true);
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    realizarReserva();
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
              Aquí iría la dirección principal, {ciudad.nombre}, {ciudad.pais}
            </p>
          </div>
          <hr />
          <div className={styles.fecha}>
            <p>Check in</p>
            <p>
              {checkin == null
                ? "__/ __/ __"
                : new Date(checkin).toLocaleDateString()}
            </p>
          </div>
          <hr />
          <div className={styles.fecha}>
            <p>Check out</p>
            <p>
              {checkout == null
                ? "__/ __/ __"
                : new Date(checkout).toLocaleDateString()}
            </p>
          </div>
          <hr />
          <div className={styles.buttonContainer}>
            <FilledButton onClick={handleSubmit} styles={styles.buttonSubmit}>
              Confirmar reserva
            </FilledButton>
          </div>
        </div>
      </div>
      {!isError ? null : (
        <div className={styles.errorMsjContainer}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <p>
            Lamentablemente la reserva no ha podido realizarse. Por favor,
            vuelva a intentarlo.
          </p>
        </div>
      )}
    </div>
  );
}
