import React from "react";
import ConfirmacionCuenta from "./ConfirmacionCuenta"
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Router from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";



jest.mock("./__mocks__/get");


describe("Confirmacion cuenta test", function () {



    test("Renderiza Correcto", async () => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            }),
            useParams: jest.fn(() => {
                return 1234
            })
        }));
        const renderizacionSimple = new Promise(() => render(
            <MemoryRouter>
                <ConfirmacionCuenta>
                </ConfirmacionCuenta>
            </MemoryRouter>))
        renderizacionSimple.then((rendero) =>
            expect(rendero).toMatchSnapshot())

    })

    test("Renderiza Por default", async () => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            }),
            useParams: jest.fn(() => {
                return 4321
            })
        }));
        const renderizacionSimple = render(
            <MemoryRouter>
                <ConfirmacionCuenta>
                </ConfirmacionCuenta>
            </MemoryRouter>)
        expect(renderizacionSimple).toMatchSnapshot()
    })

})