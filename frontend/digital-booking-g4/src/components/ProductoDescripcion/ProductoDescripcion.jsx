import TituloBloque from "../TituloBloque/TituloBloque";
import styles from "./ProductoDescripcion.module.css";
import useScreenWidth from "../../hooks/useScreenWidth";

export default function ProductoDescripcion({ alojamiento }) {
  return (
    <section className={styles.bloqueProductoDescripcion}>
      <>
        <TituloBloque> {alojamiento.product.title} </TituloBloque>
        <div className={styles.bloqueProductoInfo}>
          {alojamiento.product.info.length > 0 ? (
            alojamiento.product.info.map((parrafo, i) => {
              return <p key={i}>{parrafo}</p>;
            })
          ) : (
            <h2>No hay informacion del producto</h2>
          )}
        </div>
      </>
    </section>
  );
}
