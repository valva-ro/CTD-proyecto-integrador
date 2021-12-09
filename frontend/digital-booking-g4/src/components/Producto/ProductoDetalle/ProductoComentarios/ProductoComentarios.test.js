import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductoComentarios from "./ProductoComentarios";

describe("Producto comentarios Test", function () {
    const alojamiento = {
        id: 1
    }
    test("Renderizado Sin caracteristicas", function () {
        render(<ProductoComentarios alojamiento={alojamiento} ></ProductoComentarios>)
        expect(screen).toMatchSnapshot
    })
})