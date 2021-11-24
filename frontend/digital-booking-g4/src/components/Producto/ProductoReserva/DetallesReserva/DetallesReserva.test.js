import React from "react";
import DetallesReserva from "./DetallesReserva"
import { render, screen } from "@testing-library/react";


describe("DetallesReserva tests", function () {

    const alojamiento = {
        nombre: "Nombre",
        categoria: { titulo: "titulo" },
        ciudad: "bogotá",
        imagenes: [{ imagenTitulo: "Principal" }],
        puntuaciones: []

    }
    const checkin = "__/ __/ __"
    const checkout = "__/ __/ __"
    test("Confirmar renderizado detalles reserva", () => {
        render(<DetallesReserva alojamiento={alojamiento} checkin={checkin} checkout={checkout}></DetallesReserva>)
        expect(screen.getByText("Detalle de la reserva")).toBeTruthy()
    })
})