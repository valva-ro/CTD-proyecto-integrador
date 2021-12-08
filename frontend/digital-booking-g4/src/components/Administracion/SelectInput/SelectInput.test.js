import SelectInput from "./SelectInput"
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Select Input test", function () {
    const label = "este es el label"
    const nombre = "este es el nombre"
    const handleChange = () => {

    }
    const opcionesDisponibles = ["10", "9", "21", "13"]
    const opcionDefault = "esta es la opcionDefault"
    let showOptions = "true"


    test("Renderiza Componente Con show opcions true", () => {
        const renderizacion = render(<SelectInput opcionesDisponibles={opcionesDisponibles} optionDefault={opcionDefault} showOptions={showOptions} handleChange={handleChange}></SelectInput>)
        expect(renderizacion).toMatchSnapshot()

    });
    test("Renderiza Componente Con show opcions false", () => {
        showOptions = false
        const renderizacion = render(<SelectInput opcionesDisponibles={opcionesDisponibles} optionDefault={opcionDefault} showOptions={showOptions} handleChange={handleChange}></SelectInput>)
        expect(renderizacion).toMatchSnapshot()

    });


});
