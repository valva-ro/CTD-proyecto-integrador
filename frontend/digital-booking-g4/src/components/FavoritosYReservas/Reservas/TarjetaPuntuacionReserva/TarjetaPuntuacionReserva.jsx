import styles from "../../../Producto/ProductoReserva/DetallesReserva/TarjetaReservaExitosa/TarjetaReservaExitosa.module.css";
import FilledButton from "../../../Buttons/FilledButton";
import { useState } from "react";
import post from "../../../../utils/post";

export default function TarjetaPuntuacionReserva({
  nombreAlojamiento,
  idAlojamiento,
}) {
  const [puntuacion, setPuntuacion] = useState(null);
  const idUsuario = parseInt(localStorage.getItem("id"));
  const [commentText, setCommentText] = useState(""); 
  const [puntuadoConExito, setPuntuadoConExito] = useState(null);

  console.log(puntuacion);

  const enviarPuntuacion = () => {
    post("puntuaciones", {
      puntuacion: puntuacion,
      comentario: commentText,
      producto: { id: idAlojamiento },
      usuario: { id: idUsuario },
    })
      .then((response) => {
        console.log(response.status);
        if (response.status !== 200) {
          setPuntuadoConExito(false);
        } else {
          setPuntuadoConExito(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.card}>
      {puntuadoConExito === null ? (
        <>
          <h2 className={`${styles.title} ${styles.calificarTitle}`}>
            Calificá tu experiencia en {nombreAlojamiento}!
          </h2>

          <div className={styles.starWidget}>
            <input
              type="radio"
              name="rate"
              id="rate5"
              value={5}
              onClick={() => setPuntuacion(5)}
            />
            <label htmlFor="rate5" className="fas fa-star"></label>
            <input
              type="radio"
              name="rate"
              id="rate4"
              value={4}
              onClick={() => setPuntuacion(4)}
            />
            <label htmlFor="rate4" className="fas fa-star"></label>
            <input
              type="radio"
              name="rate"
              id="rate3"
              value={3}
              onClick={() => setPuntuacion(3)}
            />
            <label htmlFor="rate3" className="fas fa-star"></label>
            <input
              type="radio"
              name="rate"
              id="rate2"
              value={2}
              onClick={() => setPuntuacion(2)}
            />
            <label htmlFor="rate2" className="fas fa-star"></label>
            <input
              type="radio"
              name="rate"
              id="rate1"
              value={1}
              onClick={() => setPuntuacion(1)}
            />
            <label htmlFor="rate1" className="fas fa-star"></label>
          </div>
          <textarea className={styles.puntuacionComentarios}
            name="comentario"
            id="comentario"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Contanos tu experiencia (Opcional)"
          ></textarea>
          <FilledButton onClick={enviarPuntuacion} styles={styles.btnOK}>
            Confirmar
          </FilledButton>
        </>
      ) : puntuadoConExito ? (
        <>
          <p className={styles.msjPuntuacionExitosa}>
            Puntuación realizada con éxito!
          </p>
          <i
            className={`far fa-check-circle ${styles.iconoPuntuacionExitosa}`}
          ></i>
        </>
      ) : (
        <>
          <p className={styles.msjPuntuacionFallida}>Puntuación fallida!</p>
          <i
            className={`far fa-times-circle ${styles.iconoPuntuacionFallida}`}
          ></i>
        </>
      )}
    </div>
  );
}
