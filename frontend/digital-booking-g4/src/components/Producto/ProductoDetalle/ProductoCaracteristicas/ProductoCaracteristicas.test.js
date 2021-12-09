import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductoCaracteristicas from "./ProductoCaracteristicas";

describe("Producto Caracteristicas Test", function () {
    const alojamiento = {
        caracteristicas: []
    }
    const caracteristica1 = {
        id: 1,
        icono: "este es el icono",
        nombre: "este es el nombre"
    }
    const caracteristica2 = {
        id: 2,
        icono: "este es el icono",
        nombre: "este es el nombre"
    }
    test("Renderizado Sin caracteristicas", function () {
        const renderizacionSimple = render(<ProductoCaracteristicas alojamiento={alojamiento}></ProductoCaracteristicas>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Renderizado Con caracteristicas", function () {

        alojamiento.caracteristicas.push(caracteristica1)
        alojamiento.caracteristicas.push(caracteristica2)
        const renderizacionSimple = render(<ProductoCaracteristicas alojamiento={alojamiento}></ProductoCaracteristicas>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
})