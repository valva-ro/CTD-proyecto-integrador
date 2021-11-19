import ProductoFormDatos from "./ProductoFormDatos/ProductoFormDatos"
import ProductoFechaReserva from "./ProductoFechaReserva/ProductoFechaReserva";
import ProductoHorarioLlegada from "./ProductoHorarioLlegada/ProductoHorarioLlegada";
import styles from "./ProductoReserva.module.css"

export default function ProductoReserva() {
  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.containerSecundario}>
        <ProductoFormDatos/> 
        <ProductoFechaReserva/>
        <ProductoHorarioLlegada/>
      </div>
      <div>Tarjeta: Detalle de la Reserva</div>
    </section>
  );
}
