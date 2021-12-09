import React from "react";
import { configure, mount } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import TarjetaPostExitoso from "./TarjetaPostExitoso";
import { createSerializer } from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from 'react-router-dom';



configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
describe("TarjetaReservaExitosa tests", function () {
    beforeEach(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            }),
        }));
    })
    test("confirmar renderizado", () => {
        render(

            <TarjetaPostExitoso />)

        expect(screen.queryAllByText("Su reserva ha sido realizada con éxito")).toBeTruthy();

    });
    test("Al hacer click en cerrar nos redirecciona a donde estaba", () => {
        const renderizacion = mount(
            <MemoryRouter>
                <TarjetaPostExitoso />
            </MemoryRouter>)
        const boton = renderizacion.find(".btnOK")
        boton.simulate('click')
    })
});