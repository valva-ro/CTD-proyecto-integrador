import { useHistory } from "react-router-dom";

import styles from "./ProductoHeader.module.css";

export default function ProductHeader({ alojamiento }) {
  const history = useHistory();
  return (
    <div className={styles.contenedorHeader}>
      <div className={styles.headerIzquierda}>
        <div className={styles.a} onClick={history.goBack}>
          <span>
            <i className="fas fa-chevron-left" aria-hidden="true"></i>
          </span>
          <span>ATRÁS</span>
        </div>
      </div>
      <div className={styles.headerDerecha}>
        <p>{alojamiento.categoria.titulo}</p>
        <p>{alojamiento.nombre}</p>
      </div>
    </div>
  );
}
