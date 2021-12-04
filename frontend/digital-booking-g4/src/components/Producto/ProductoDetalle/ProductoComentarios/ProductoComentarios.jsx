import { useState } from "react";
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
const CANTIDAD_COMENTARIOS = 3;

export default function ProductoComentarios({ alojamiento: { id } }) {
  const { isLoaded, items } = useFetch(`puntuaciones/producto/${id}`);
  const [cantidadComentariosActual, setCantidadComentariosActual] =
    useState(CANTIDAD_COMENTARIOS);
  const [
    cargarMasComentariosDeshabilitado,
    setCargarMasComentarioDeshabilitado,
  ] = useState(false);

  const mostrarMasComentarios = () => {
    setCantidadComentariosActual(
      cantidadComentariosActual + CANTIDAD_COMENTARIOS
    );
    setCargarMasComentarioDeshabilitado(
      items.length <= cantidadComentariosActual + CANTIDAD_COMENTARIOS
    );
  };

  return (
    <section className={styles.comentariosSection}>
      <TituloBloque>Comentarios</TituloBloque>
      <hr />
      <div className={styles.comentariosContainer}>
        {isLoaded
          ? items.slice(0, cantidadComentariosActual + 1).map((puntuacion) =>
              puntuacion.comentario === null ? null : (
                <div className={styles.comentarioContainer}>
                  <Estrellas puntaje={puntuacion.puntuacion} />
                  <h3 className={styles.nombreComentario}>
                    {`${puntuacion.usuario.nombre} ${puntuacion.usuario.apellido}`}
                  </h3>
                  <p
                    className={styles.comentario}
                  >{`"${puntuacion.comentario}"`}</p>
                </div>
              )
            )
          : null}
      </div>
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
    </section>
  );
}
