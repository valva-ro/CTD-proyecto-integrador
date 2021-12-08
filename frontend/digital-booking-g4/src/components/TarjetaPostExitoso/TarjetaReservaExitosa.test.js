import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TarjetaPostExitoso from "./TarjetaPostExitoso";
import {
    TestScheduler
} from "@jest/core";
import TarjetaPostExitosoContext from "../../contexts/loggedContext"

describe("TarjetaPostExitoso tests", function () {
    test("confirmar renderizado", () => {
        render(<TarjetaPostExitoso />)
        expect(screen.queryAllByText("Su reserva ha sido realizada con éxito")).toBeTruthy();
    });
    test("Al hacer click en cerrar nos redirecciona a donde estaba", () => {
        render(<TarjetaPostExitoso />)
        const cerrado = screen.getByTestId("btnCerrarSesion")[0]
        fireEvent.click(cerrado)
    })
});