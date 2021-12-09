import Administracion from "./Administracion"
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import loggedContext from '../../contexts/loggedContext'

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
beforeEach(() => {
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useHistory: () => ({
            push: jest.fn(),
            goBack: jest.fn()
        }),
    }));
})
describe("Administracion Input test", function () {
    test("Renderiza Por default", () => {
        const renderizacionSimple = render(
            <loggedContext.Provider value={{ ísLogged: true }}>
                <MemoryRouter>
                    <Administracion></Administracion>
                </MemoryRouter></loggedContext.Provider>)
        expect(renderizacionSimple).toMatchSnapshot()

    });
});