import { Link } from "react-router-dom";

import styles from "./ProductoHeader.module.css";

export default function ProductHeader({ alojamiento }) {
  return (
    <>
      <div className={styles.contenedorHeader}>
        <div className={styles.headerIzquierda}>
          <p>{alojamiento.categoria.titulo}</p>
          <p>{alojamiento.nombre}</p>
        </div>
        <div className={styles.headerDerecha}>
          <Link to="/">
            <span>
              <i className='bx bx-library' aria-hidden="true"></i>
            </span>
            <span>HOME</span>
          </Link>
        </div>
      </div>
    </>
  );
}
