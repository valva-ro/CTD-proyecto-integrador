import TituloBloque from "../../TituloBloque/TituloBloque";
import styles from "./ProductoDescripcion.module.css";

export default function ProductoDescripcion({ alojamiento: { descripcion, ciudad } }) {

  return (
    <section className={styles.bloqueProductoDescripcion}>
      <TituloBloque>{`Alojate en el corazón de ${ciudad.nombre}`}</TituloBloque>
      <p>{descripcion}{descripcion}</p>
      <p>{descripcion}</p>
      <p>{descripcion}{descripcion}</p>
      <div className={styles.bloqueProductoInfo}></div>
    </section>
  );
}
