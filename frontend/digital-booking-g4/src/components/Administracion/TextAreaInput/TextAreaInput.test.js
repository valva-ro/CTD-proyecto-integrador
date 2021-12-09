import TextAreaInput from "./TextAreaInput"
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";


configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Text Area Input test", function () {
    const label = "este es el label"
    const name = "este es el name"
    const placeholder = "este es el placeHolder"
    let onChangeItem = ""
    const setOnChangeItem = (word) => {
        onChangeItem = word
    }

    test("Renderiza Por default", () => {
        const renderizacionSimple = render(<TextAreaInput></TextAreaInput>)
        expect(renderizacionSimple).toMatchSnapshot()

    });
    test("Renderiza Por default", () => {
        const renderizacion = mount(<TextAreaInput label={label} placeholder={placeholder} name={name} onChangeItem={onChangeItem} setOnChangeItem={setOnChangeItem}></TextAreaInput>)
        expect(renderizacion).toMatchSnapshot()
        const input = renderizacion.find('textarea')

        input.simulate('focus');
        input.simulate('change', { target: { value: 'a' } })
        input.simulate('keyDown', {
            which: 27,
            target: {
                blur() {
                    input.simulate('blur');
                },
            },
        });
        expect(onChangeItem).toEqual("a")

    });

});
