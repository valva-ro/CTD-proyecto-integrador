import { useState, useEffect } from "react";
import TituloBloque from "../../../TituloBloque/TituloBloque";
import FilledButton from "../../../Buttons/FilledButton";
import Estrellas from "../../../Estrellas/Estrellas";
import useFetch from "../../../../hooks/useFetch";
import styles from "./ProductoComentarios.module.css";

// Kev después de que leas este comentario borralo:
// Puse como límite 3 comentarios, pero en la BD creo que no hay
// ningún alojamiento que tenga más de 3 comentarios, así que para
// probarlo podes cambiar el valor de la const de abajo por 1
// (o si tenés ganas agregá más en los scripts de la BD)
const CANTIDAD_COMENTARIOS = 1;

export default function ProductoComentarios({ alojamiento: { id } }) {
  const { isLoaded, items } = useFetch(`puntuaciones/producto/${id}`);
  const [puntuaciones, setPuntuaciones] = useState([]);
  const [cantidadComentariosActual, setCantidadComentariosActual] =
    useState(CANTIDAD_COMENTARIOS);
  const [
    cargarMasComentariosDeshabilitado,
    setCargarMasComentarioDeshabilitado,
  ] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      setPuntuaciones(items.filter((i) => i.comentario !== null));
    }
  }, [isLoaded, items]);

  useEffect(() => {
    if (isLoaded) {
      setCargarMasComentarioDeshabilitado(
        puntuaciones.length < cantidadComentariosActual + CANTIDAD_COMENTARIOS
      );
    }
  }, [isLoaded, puntuaciones, cantidadComentariosActual]);

  const mostrarMasComentarios = () => {
    setCantidadComentariosActual(
      cantidadComentariosActual + CANTIDAD_COMENTARIOS
    );
  };

  return (
    <section className={styles.comentariosSection}>
      <TituloBloque>Comentarios</TituloBloque>
      <hr />
      <div className={styles.comentariosContainer}>
        {isLoaded && puntuaciones.length === 0 ? (
          <h3 className={styles.sinResultados}>Todavía no hay comentarios</h3>
        ) : isLoaded ? (
          puntuaciones.slice(0, cantidadComentariosActual).map((puntuacion) => (
            <div className={styles.comentarioContainer}>
              <div className={styles.estrellasContainer}>
                <Estrellas puntaje={puntuacion.puntuacion} />
                <p className={styles.fecha}>{formatearFecha(puntuacion.fecha)}</p>
              </div>
              <h3 className={styles.nombreComentario}>
                {`${puntuacion.usuario.nombre} ${puntuacion.usuario.apellido}`}
              </h3>
              <p
                className={styles.comentario}
              >{`"${puntuacion.comentario}"`}</p>
            </div>
          ))
        ) : null}
      </div>
      {isLoaded && puntuaciones.length > 0 ? (
        <FilledButton
          styles={styles.btnCargarMas}
          onClick={mostrarMasComentarios}
          disabled={cargarMasComentariosDeshabilitado}
          title={
            cargarMasComentariosDeshabilitado ? "No hay más comentarios" : ""
          }
        >
          Cargar más
        </FilledButton>
      ) : null}
    </section>
  );
}

function formatearFecha(fecha) {
  return fecha.split("-").reverse().join("/");
}