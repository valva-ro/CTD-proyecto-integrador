import TituloBloque from "../../../TituloBloque/TituloBloque";
import Mapa from "../../../Mapa/Mapa";
import styles from "./ProductoMapa.module.css";

export default function ProductoMapa({ alojamiento: { direccion, ciudad } }) {
  const coordenadas = {
    lat: ciudad.latitud,
    lng: ciudad.longitud,
  };
  return (
    <section className={styles.containerUbicacion} id="mapa">
      <TituloBloque>¿Dónde vas a estar?</TituloBloque>
      <hr />
      <h4
        className={styles.textoUbicacion}
      >{`${direccion}, ${ciudad.nombre}, ${ciudad.pais}`}</h4>
      <Mapa coordenadas={coordenadas} />
    </section>
  );
}
