import { useState, useEffect } from "react";
import TituloBloque from "../../../TituloBloque/TituloBloque";
import FilledButton from "../../../Buttons/FilledButton";
import Estrellas from "../../../Estrellas/Estrellas";
import useFetch from "../../../../hooks/useFetch";
import styles from "./ProductoComentarios.module.css";

const CANTIDAD_COMENTARIOS = 3;

export default function ProductoComentarios({ alojamiento: { id } }) {
  const { isLoaded, items } = useFetch(`puntuaciones/producto/${id}`);
  const [puntuaciones, setPuntuaciones] = useState([]);
  const [mostrarBotonVerMenos, setMostrarBotonVerMenos] = useState(false);
  const [cantidadComentariosActual, setCantidadComentariosActual] =
    useState(CANTIDAD_COMENTARIOS);
  const [
    cargarMasComentariosDeshabilitado,
    setCargarMasComentarioDeshabilitado,
  ] = useState(null);
  const [
    cargarMenosComentariosDeshabilitado,
    setCargarMenosComentarioDeshabilitado,
  ] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      setPuntuaciones(items.filter((i) => i.comentario !== null));
    }
  }, [isLoaded, items]);

  useEffect(() => {
    if (isLoaded) {
      setCargarMasComentarioDeshabilitado(
        puntuaciones.length <= cantidadComentariosActual
      );
      setCargarMenosComentarioDeshabilitado(
        cantidadComentariosActual < CANTIDAD_COMENTARIOS * 2
      );
      setMostrarBotonVerMenos(
        cantidadComentariosActual >= CANTIDAD_COMENTARIOS * 2
      );
    }
  }, [isLoaded, puntuaciones, cantidadComentariosActual]);

  const mostrarMasComentarios = () => {
    setCantidadComentariosActual(
      cantidadComentariosActual + CANTIDAD_COMENTARIOS
    );
  };

  const mostrarMenosComentarios = () => {
    setCantidadComentariosActual(
      cantidadComentariosActual - CANTIDAD_COMENTARIOS
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
            <div className={styles.comentarioContainer} key={puntuacion.id}>
              <div className={styles.estrellasContainer}>
                <Estrellas puntaje={puntuacion.puntuacion} />
                <p className={styles.fecha}>
                  {formatearFecha(puntuacion.fecha)}
                </p>
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
        <div className={styles.cargarComentariosContainer}>
          <FilledButton
            styles={styles.btnCargarComentarios}
            onClick={mostrarMasComentarios}
            disabled={cargarMasComentariosDeshabilitado}
            title={
              cargarMasComentariosDeshabilitado ? "No hay más comentarios" : ""
            }
          >
            Más comentarios
          </FilledButton>
          {mostrarBotonVerMenos ? (
            <FilledButton
              styles={styles.btnCargarComentarios}
              onClick={mostrarMenosComentarios}
              disabled={cargarMenosComentariosDeshabilitado}
              title={
                cargarMenosComentariosDeshabilitado
                  ? "Este es el mínimo de comentarios posibles"
                  : ""
              }
            >
              Menos comentarios
            </FilledButton>
          ) : (
            ""
          )}
        </div>
      ) : null}
    </section>
  );
}

function formatearFecha(fecha) {
  return fecha.split("-").reverse().join("/");
}
