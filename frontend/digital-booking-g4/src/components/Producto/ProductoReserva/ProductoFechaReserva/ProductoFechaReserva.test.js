import ProductoFechaReserva from "./ProductoFechaReserva";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("ProductoFechaReserva tests", function () {
    let checkin = null
    let checkuot = null
    const setChecikn = (date) => {
        date = checkin
    }
    const setChecout = (date) => {
        date = checkuot
    }

    test("Renderiza Card correctamente", () => {
        render(<ProductoFechaReserva setCheckin={setChecikn} setCheckout={setChecout} />)
        expect.anything(screen.getByText("Seleccioná tu fecha de reserva"))
    })
    test("Altera las fechas", () => {
        /*         render(<ProductoFechaReserva setCheckin={setChecikn} setCheckout={setChecout} />)
                const datePicker = screen.getByText("DatePicker")
                expect(datePicker).toBeNaN() */
    })
})