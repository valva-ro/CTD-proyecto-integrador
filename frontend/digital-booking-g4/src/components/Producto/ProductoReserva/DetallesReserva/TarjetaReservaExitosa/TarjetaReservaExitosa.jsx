import styles from "./TarjetaReservaExitosa.module.css";
import FilledButton from "../../../../Buttons/FilledButton";
import { useHistory } from "react-router";

export default function TarjetaReservaExitosa() {
  const history = useHistory();

  return (
      <div className={styles.card}>
        <i className={`bx bxs-badge-check ${styles.icono}`}></i>
        <h2 className={styles.title}>¡Muchas gracias!</h2>
        <p className={styles.reservaExitosaMsj}>Su reserva ha sido realizada con éxito</p>
        <FilledButton onClick={() => history.push(`/`)} styles={styles.btnOK}>
          Volver a la home
        </FilledButton>
      </div>
  );
}
