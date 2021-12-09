import NumberInput from "./NumberInput"
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";


configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Imagen test", function () {
    const label = "este es el label"
    let onChangeItem = ""
    const setOnChangeItem = (word) => {
        onChangeItem = word
    }


    test("Renderiza Componente Por default", () => {
        const renderizacionSimple = render(<NumberInput label={label}></NumberInput>)
        expect(screen.getAllByText("este es el label"))
        expect(renderizacionSimple).toMatchSnapshot()

    });
    test("Cambia el valor de Onchange", () => {
        const renderizacionSimple = mount(<NumberInput label={label} onChangeItem={onChangeItem} setOnChangeItem={setOnChangeItem}></NumberInput>)
        const input = renderizacionSimple.find("input")
        input.simulate('focus');
        input.simulate('change', { target: { value: 'a' } })
        input.simulate('keyDown', {
            which: 27,
            target: {
                blur() {
                    input.simulate('blur');
                },
            },
        })
        expect(onChangeItem).toEqual("a")

    });




});



