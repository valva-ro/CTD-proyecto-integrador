import Enzyme from "enzyme";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { shallow } from "enzyme";
import {
    createSerializer
} from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App.jsx"
Enzyme.configure({
    adapter: new Adapter()
});
expect.addSnapshotSerializer(createSerializer({
    mode: "deep"
}));
describe("App test", function () {
    test("Verificar que se renderise correctamente", () => {
        render(<App></App>)
        expect(screen.getByText("Busca ofertas en hoteles, casas y mucho más")).toBeTruthy()
    })
    test("Verificar  renderise correctamente", () => {
        const wrapper = shallow(
            <App></App>
        ).first().shallow();
        const newUrl = 'login';
        Object.defineProperty(window.location, 'hash', {
            writable: true,
            value: newUrl
        });
        wrapper.instance().parseHash();
        expect(screen.getByText("Buscar por tipo de alojamiento")).toBeTruthy()
    })
})