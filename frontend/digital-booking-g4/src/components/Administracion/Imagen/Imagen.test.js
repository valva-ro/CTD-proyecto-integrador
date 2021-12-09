import Imagen from "./Imagen"
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Imagen test", function () {
    let index;

    test("Renderiza Componente Por default", () => {
        index = 0
        const renderizacionSimple = render(<Imagen index={index}></Imagen>)
        expect(renderizacionSimple).toMatchSnapshot()

    });
    test("Renderiza Componente Por index.not0", () => {
        index = 1
        const renderizacionConIndex = render(<Imagen index={index}></Imagen>)
        expect(renderizacionConIndex).toMatchSnapshot()
    });
    test("Renderiza Componente Por Url invalida", () => {
        index = 1
        const renderizacionConIndex = mount(<Imagen index={index}></Imagen>)
        const inputParaCambiarUrl = renderizacionConIndex.find(".estandarInput")
        inputParaCambiarUrl.simulate('focus');
        inputParaCambiarUrl.simulate('change', { target: { value: 'a' } })
        inputParaCambiarUrl.simulate('keyDown', {
            which: 27,
            target: {
                blur() {
                    inputParaCambiarUrl.simulate('blur');
                },
            },
        })
        expect(renderizacionConIndex).toMatchSnapshot()
    });



});

