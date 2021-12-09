import Enzyme from "enzyme";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
    createSerializer
} from "enzyme-to-json";
import App from "./App.jsx"
Enzyme.configure({
});
expect.addSnapshotSerializer(createSerializer({
    mode: "deep"
}));
describe("App test", function () {
    test("Verificar que se renderise correctamente", () => {
        render(<App></App>)
        expect(screen.getByText("Busca ofertas en hoteles, casas y mucho más")).toBeTruthy()
    })
    test("Verificar  renderise login", () => {

        render(
            <App></App>
        )
        const newUrl = 'http://localhost/login';
        fireEvent.click(screen.getByDisplayValue("Iniciar sesión"))
        expect(window.location.href).toEqual(newUrl)
        screen.getAllByText("Correo electrónico")

    })
    test("Verificar  renderise register", () => {

        render(
            <App></App>
        )
        const newUrl = 'http://localhost/register';
        fireEvent.click(screen.getByDisplayValue("Crear cuenta"))
        expect(window.location.href).toEqual(newUrl)
        screen.getAllByText("Nombre")

    })
})