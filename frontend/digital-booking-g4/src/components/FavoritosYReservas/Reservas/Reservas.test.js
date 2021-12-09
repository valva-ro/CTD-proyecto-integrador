import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import Reservas from "./Reservas";
import loggedContext from "../../../contexts/loggedContext"

describe("Reservas test", function () {
    beforeEach(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            }),
        }));
    })
    test("Renderiza Default", () => {
        const renderizacionSimple = render(
            <MemoryRouter>
                <loggedContext.Provider value={{ isLogged: true }}>
                    <Reservas></Reservas>
                </loggedContext.Provider>
            </MemoryRouter>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("No renderiza en false", () => {
        const renderizacionSimple = render(
            <MemoryRouter>
                <loggedContext.Provider value={{ isLogged: false }}>
                    <Reservas></Reservas>
                </loggedContext.Provider>
            </MemoryRouter>)
        expect(renderizacionSimple).toMatchSnapshot()
    })


})