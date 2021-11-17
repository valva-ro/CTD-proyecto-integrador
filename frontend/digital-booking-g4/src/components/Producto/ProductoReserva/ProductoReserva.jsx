import { useState } from "react";
import DetallesReserva from "./DetallesReserva/DetallesReserva";

export default function ProductoReserva(producto) {
  const [checkin, setCheckin] = useState("__/ __/ __");
  const [checkout, setCheckout] = useState("__/ __/ __");

  return (
    <div>
      <DetallesReserva
        alojamiento={producto}
        checkin={checkin}
        checkout={checkout}
      />
    </div>
  );
}
