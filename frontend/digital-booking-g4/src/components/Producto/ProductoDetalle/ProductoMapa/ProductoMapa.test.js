import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductoMapa from "./ProductoMapa"

describe("Producto ,mapa Test", function () {
    const alojamiento = {
        direccion: {
            latitud: " 4° 35'56'' "
        },
        ciudad: {
            longitud: "74°04'51'"
        }
    }
    test("renderiza por default", () => {
        const renderizacionSimple = render(<ProductoMapa alojamiento={alojamiento}></ProductoMapa>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
})