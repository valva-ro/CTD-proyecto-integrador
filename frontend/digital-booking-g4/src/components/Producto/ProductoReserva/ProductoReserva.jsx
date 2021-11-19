import { useState } from "react";
import ProductoFormDatos from "./ProductoFormDatos/ProductoFormDatos"
import ProductoFechaReserva from "./ProductoFechaReserva/ProductoFechaReserva";
import ProductoHorarioLlegada from "./ProductoHorarioLlegada/ProductoHorarioLlegada";
import DetallesReserva from "./DetallesReserva/DetallesReserva";
import styles from "./ProductoReserva.module.css"

export default function ProductoReserva(producto) {

  const [checkin, setCheckin] = useState("__/ __/ __");
  const [checkout, setCheckout] = useState("__/ __/ __");

  return (
    <section className={styles.containerPrincipal}>
      <div className={styles.containerSecundario}>
        <ProductoFormDatos/> 
        <ProductoFechaReserva/>
        <ProductoHorarioLlegada/>
      </div>
      <div className={styles.containerTercero}>
        <DetallesReserva
        alojamiento={producto}
        checkin={checkin}
        checkout={checkout}
        />
      </div>
    </section>
  )
}
