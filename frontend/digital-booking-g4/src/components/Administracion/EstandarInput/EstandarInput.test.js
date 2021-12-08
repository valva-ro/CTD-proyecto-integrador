import EstandarInput from "./EstandarInput"
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Estandar Input Room test", function () {
    const label = "Titulo"
    const name = "Nombre"
    let onChangeItem = ""
    const setOnChangeItem = (word) => {
        onChangeItem = word
    }

    test("Renderiza Componente Por default", () => {
        const renderizacionSimple = render(<EstandarInput label={label} nombre={name}></EstandarInput>)
        expect(screen.getByText("Titulo"))
        expect(renderizacionSimple).toMatchSnapshot()
    });
    test("Cambia el valor apartir del input", () => {
        const renderizacionCompleta = mount(<EstandarInput setOnChangeItem={setOnChangeItem} label={label} nombre={name} onChangeItem={onChangeItem} ></EstandarInput>)
        const input = renderizacionCompleta.find('input')
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
        expect(renderizacionCompleta).toMatchSnapshot()
        expect(onChangeItem).toEqual("a")
    })
});

