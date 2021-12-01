import { useState } from "react";
import ProductoFormDatos from "./ProductoFormDatos/ProductoFormDatos";
import ProductoFechaReserva from "./ProductoFechaReserva/ProductoFechaReserva";
import ProductoHorarioLlegada from "./ProductoHorarioLlegada/ProductoHorarioLlegada";
import DetallesReserva from "./DetallesReserva/DetallesReserva";
import styles from "./ProductoReserva.module.css";

export default function ProductoReserva(producto) {
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [apellido, setApellido] = useState(null);
  const [mail, setMail] = useState(null);
  const [ciudad, setCiudad] = useState(null);
  const [textArea, setTextArea] = useState(null);
  const [isVacunadx, setIsVacunadx] = useState(null);
  const [horarioLlegada, setHorarioLlegada] = useState(null);
  
  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className={styles.productoReservaContainer}>
      <form className={styles.containerPrincipal} onSubmit={handleSubmit}>
        <div className={styles.containerSecundario}>
          <ProductoFormDatos
            setNombre={setNombre}
            setApellido={setApellido}
            setMail={setMail}
            setCiudad={setCiudad}
            setTextArea={setTextArea}
            setIsVacunadx={setIsVacunadx}
          />
          <ProductoFechaReserva
            setCheckin={setCheckin}
            setCheckout={setCheckout}
          />
          <ProductoHorarioLlegada
            alojamiento={producto}
            setHorarioLlegada={setHorarioLlegada}
          />
        </div>
        <div className={styles.containerTercero}>
          <DetallesReserva
            alojamiento={producto}
            checkin={checkin}
            checkout={checkout}
            nombreUsuario={nombre}
            apellido={apellido}
            mail={mail}
            ciudadUsuario={ciudad}
            textArea={textArea}
            isVacunadx={isVacunadx}
            horarioLlegada={horarioLlegada}
          />
        </div>
      </form>
    </section>
  );
}
