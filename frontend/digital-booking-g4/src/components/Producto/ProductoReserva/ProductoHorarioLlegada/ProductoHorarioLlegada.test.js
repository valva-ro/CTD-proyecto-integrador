import ProductoHorarioLlegada from "./ProductoHorarioLlegada"
import React from "react";
import { render, screen } from "@testing-library/react";

describe("ProductoHorarioLlegada test", function () {
    test("Verificar Renderizado ProductoHorarioLlegada", () => {
        render(<ProductoHorarioLlegada></ProductoHorarioLlegada>)
        expect(screen.getByText("Tu horario de llegada")).toBeTruthy()
    })
})