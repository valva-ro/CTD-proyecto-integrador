import React from "react";
import Favoritos from "./Favoritos";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import loggedContext from "../../../contexts/loggedContext"

describe(" Favoritos test", function () {
    beforeEach(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            }),
        }));
        jest.spyOn(window.localStorage.__proto__, 'setItem');
        window.localStorage.__proto__.getItem = jest.fn((param) => {
            return 1
        });
    })

    test("Renderiza Favoritos", () => {
        jest.mock("../../../hooks/useFetch");
        const renderizacionSimple = render(
            <MemoryRouter>
                <loggedContext.Provider value={{ isLogged: true }}>
                    <Favoritos></Favoritos>
                </loggedContext.Provider>
            </MemoryRouter>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Renderiza Skeleton", () => {

        const renderizacionSimple = render(
            <MemoryRouter>
                <loggedContext.Provider value={{ isLogged: true }}>
                    <Favoritos></Favoritos>
                </loggedContext.Provider>
            </MemoryRouter>)
        expect(renderizacionSimple).toMatchSnapshot()
    })

})