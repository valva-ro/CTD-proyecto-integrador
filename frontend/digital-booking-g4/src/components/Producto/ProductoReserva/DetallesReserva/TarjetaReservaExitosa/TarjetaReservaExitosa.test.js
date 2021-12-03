import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TarjetaReservaExitosa from "./TarjetaReservaExitosa";
import {
    TestScheduler
} from "@jest/core";
import TarjetaReservaExitosaContext from "../../contexts/loggedContext"

describe("TarjetaReservaExitosa tests", function () {
    test("confirmar renderizado", () => {
        render(<TarjetaReservaExitosa />)
        expect(screen.queryAllByText("Su reserva ha sido realizada con éxito")).toBeTruthy();
    });
    test("Al hacer click en cerrar nos redirecciona a donde estaba", () => {
        render(<TarjetaReservaExitosa />)
        const cerrado = screen.getByTestId("btnCerrarSesion")[0]
        fireEvent.click(cerrado)
    })
});