import { Link } from "react-router-dom";

import styles from "./ProductoHeader.module.css";

export default function ProductHeader({ alojamiento }) {
  return (
    <>
      <div className={styles.contenedorHeader}>
        <div className={styles.headerIzquierda}>
          <Link to="/">
            <span>
              <i className="fas fa-chevron-left" aria-hidden="true"></i> 
            </span>
            <span>ATRÁS</span>
          </Link>
        </div>
        <div className={styles.headerDerecha}>
          <p>{alojamiento.categoria.titulo}</p>
          <p>{alojamiento.nombre}</p>
        </div>
      </div>
    </>
  );
}
