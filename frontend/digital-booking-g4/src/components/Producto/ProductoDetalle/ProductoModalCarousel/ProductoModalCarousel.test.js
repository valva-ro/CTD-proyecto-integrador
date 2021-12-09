import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductoModaCarousel from "./ProductoModalCarousel"

describe("Producto Modal Carousel Test", function () {
    let estaAbierto = true

    const onCloseRequest = () => {

    }
    const imagenes = [{
        id: 1,
        imagenUr: " esta es la imagen url",
        imagenTitulo: " este es el titulo de la imagen"
    }]
    test("no renderiza en false", () => {
        estaAbierto = false
        const renderizacionsimple = render(<ProductoModaCarousel estaAbierto={estaAbierto}
            onCloseRequest={onCloseRequest}
            imagenes={imagenes}
        ></ProductoModaCarousel>)
        expect(renderizacionsimple).toMatchSnapshot()
    })
    test("Renderiza Por default", () => {
        estaAbierto = true
        const renderizacionsimple = render(<ProductoModaCarousel estaAbierto={estaAbierto}
            onCloseRequest={onCloseRequest}
            imagenes={imagenes}
        ></ProductoModaCarousel>)
        expect(renderizacionsimple).toMatchSnapshot()

    })
})