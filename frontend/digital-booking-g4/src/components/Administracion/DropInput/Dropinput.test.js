import DropInput from "./DropInput"
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";


configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Drop input Room test", function () {
    let onChangeItem = ""
    const setOnchangeItem = (palabra) => {
        onChangeItem = palabra
    }

    test("Renderiza Componente Por default", () => {

        const renderizacionSimple = render(
            <DropInput></DropInput>
        );
        expect(renderizacionSimple).toMatchSnapshot()
    });
    test("Testea Cambio de input.value", () => {
        const renderizacionSimple = mount(
            <DropInput setOnChangeItem={setOnchangeItem} onChangeItem={onChangeItem}></DropInput>
        );
        const input = renderizacionSimple.find('input')
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
        expect(renderizacionSimple).toMatchSnapshot()
        expect(onChangeItem).toEqual("a")
    });
});

