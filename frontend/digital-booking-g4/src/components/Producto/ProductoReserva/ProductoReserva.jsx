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

  console.log("nombre: ");
  console.log(nombre);
  console.log("apellido: ");
  console.log(apellido);
  console.log("mail: ");
  console.log(mail);
  console.log("ciudad: ");
  console.log(ciudad);
  console.log("textArea: ");
  console.log(textArea);
  console.log("Vacunado? ");
  console.log(isVacunadx);
  console.log("HoraLlegada: ");
  console.log(horarioLlegada);
  console.log("checkin: ");
  console.log(new Date(checkin).toLocaleDateString().replaceAll("/", "-"));
  console.log("checkout: ");
  console.log(new Date(checkout).toLocaleDateString().replaceAll("/", "-"));

  return (
    <section className={styles.productoReservaContainer}>
      <form className={styles.containerPrincipal}>
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
