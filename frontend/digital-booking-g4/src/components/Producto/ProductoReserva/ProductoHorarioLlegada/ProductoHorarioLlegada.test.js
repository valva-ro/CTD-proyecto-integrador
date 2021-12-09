import ProductoHorarioLlegada from "./ProductoHorarioLlegada"
import React from "react";
import { render, screen } from "@testing-library/react";

describe("ProductoHorarioLlegada test", function () {
    const setHorarioLlegada = () => {
        ""
    }
    const producto = {
        horarioCheckIn: ""
    }
    test("Verificar Renderizado ProductoHorarioLlegada", () => {
        render(<ProductoHorarioLlegada
            alojamiento={producto}
            setHorarioLlegada={setHorarioLlegada}></ProductoHorarioLlegada>)
        expect(screen.getByText("Tu horario de llegada")).toBeTruthy()
    })
})