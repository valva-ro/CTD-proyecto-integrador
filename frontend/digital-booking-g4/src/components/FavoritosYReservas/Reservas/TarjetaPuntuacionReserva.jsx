import styles from "../../Producto/ProductoReserva/DetallesReserva/TarjetaReservaExitosa/TarjetaReservaExitosa.module.css";
import FilledButton from "../../Buttons/FilledButton";
import { useHistory } from "react-router";

export default function TarjetaPuntuacionReserva({ nombreAlojamiento }) {
  const history = useHistory();

  return (
    <div className={styles.card}>
      
      <h2 className={`${styles.title} ${styles.calificarTitle}`}>
        Calificá tu experiencia en {nombreAlojamiento}!
      </h2>

      <div className={styles.starWidget}>
        <input type="radio" name="rate" id="rate5" />
        <label htmlFor="rate5" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate4" />
        <label htmlFor="rate4" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate3" />
        <label htmlFor="rate3" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate2" />
        <label htmlFor="rate2" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate1" />
        <label htmlFor="rate1" className="fas fa-star"></label>
      </div>

      <FilledButton onClick={() => console.log("Envio calificación..")} styles={styles.btnOK}>
        Confirmar
      </FilledButton>
    </div>
  );
}
