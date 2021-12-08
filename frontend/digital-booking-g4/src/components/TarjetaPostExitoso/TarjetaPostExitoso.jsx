import styles from "./TarjetaPostExitoso.module.css";
import FilledButton from "../Buttons/FilledButton";
import { useHistory } from "react-router";

export default function TarjetaPostExitoso({
  contenidoH2,
  contenidoP
}) {
  const history = useHistory();

  return (
      <div className={styles.card}>
        <i className={`bx bxs-badge-check ${styles.icono}`}></i>
        <h2 className={styles.title}>{contenidoH2}</h2>
        <p className={styles.reservaExitosaMsj}>{contenidoP}</p>
        <FilledButton onClick={() => history.push(`/`)} styles={styles.btnOK}>
          Volver a la home
        </FilledButton>
      </div>
  );
}
