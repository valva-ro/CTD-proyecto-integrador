import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductoDescripcion from "./ProductoDescripcion"
describe("Producto drescripcion  test", function () {
    const alojamiento =
    {
        descripcion: "esta es la descriopcion",
        ciudad: {
            nombre: "este es el nombre de la ciudad"
        }
    }
    test("Renderizado Por defaulto", () => {
        const renderizacionSimple = render(<ProductoDescripcion alojamiento={alojamiento}></ProductoDescripcion>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
})