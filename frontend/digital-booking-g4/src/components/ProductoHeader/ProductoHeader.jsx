import { Link } from "react-router-dom";
import ProductoUbicacion from "../ProductoUbicacion/ProductoUbicacion";
import styles from "./ProductoHeader.module.css";

export default function ProductHeader({ alojamiento }) {
  return (
    <>
      <div className={styles.contenedorHeader}>
        <div className={styles.headerIzquierda}>
          <p>{alojamiento.category}</p>
          <p>{alojamiento.title}</p>
        </div>
        <div className={styles.headerDerecha}>
          <Link to="/">
            <span>
              <i class="fas fa-chevron-left"></i>
            </span>
          </Link>
        </div>
      </div>
      <ProductoUbicacion alojamiento={alojamiento} />
    </>
  );
}
