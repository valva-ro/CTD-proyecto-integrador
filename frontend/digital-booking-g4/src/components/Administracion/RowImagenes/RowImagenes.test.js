
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react"
import RowImagenes from "./RowImagenes";






describe("Row Imagenes test", function () {

    const imagenesDetails = ["asdas", "asdasdas", "asdasd", "asdasd"]
    const handleAdd = () => {

    }
    const handleDelete = () => {

    }
    const agregarImagen = () => {

    }


    test("Renderiza Componente Por default", () => {
        const renderizacionConVariables = render(<RowImagenes agregarImagen={agregarImagen} handleAdd={handleAdd} handleDelete={handleDelete} imagenesDetails={imagenesDetails}></RowImagenes>)

        expect(renderizacionConVariables).toMatchSnapshot()

    });



});