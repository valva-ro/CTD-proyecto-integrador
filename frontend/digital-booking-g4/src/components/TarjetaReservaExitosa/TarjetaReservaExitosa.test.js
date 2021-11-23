import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TarjetaReservaExitosa from "./TarjetaReservaExitosa";
import {
    TestScheduler
} from "@jest/core";
describe("TarjetaReservaExitosa tests", function () {
    test("confirmar renderizado", () => {
        render(<TarjetaReservaExitosa />)
        expect(screen.queryAllByText("Su reserva ha sido realizada con éxito")).toBeTruthy();
    });
    test("Al hacer click en cerrar nos redirecciona a donde estaba", () => {
        render(<TarjetaReservaExitosa />)
        const cerrado = screen.getByRole("button")

        fireEvent.click(cerrado)
    })
});