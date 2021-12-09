import ProductoFechasDisponibles from "./ProductoFechasDisponibles";
import React from "react";
import loggedContext from "../../../../contexts/loggedContext";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';

describe("Producto fechas disponibles Input test", function () {



    loggedContext
    test("Renderiza por default", () => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            }),
        }));
        jest.spyOn(window.localStorage.__proto__, 'setItem');
        window.localStorage.__proto__.getItem = jest.fn((param) => {
            return null
        })
        window.localStorage.__proto__.hasOwnProperty = jest.fn((param) => {
            return null
        })
        const renderizacionSimple = render(
            <MemoryRouter>
                <loggedContext.Provider value={{ isLogged: true }}>
                    <ProductoFechasDisponibles>

                    </ProductoFechasDisponibles>
                </loggedContext.Provider>
            </MemoryRouter>)
        expect(renderizacionSimple).toMatchSnapshot()

    })
    test("Renderiza por default", () => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            }),
        }));
        jest.spyOn(window.localStorage.__proto__, 'setItem');
        window.localStorage.__proto__.getItem = jest.fn((param) => {
            return null
        })
        window.localStorage.__proto__.hasOwnProperty = jest.fn((param) => {
            return null
        })
        const renderizacionSimple = render(
            <MemoryRouter>
                <loggedContext.Provider value={{ isLogged: false }}>
                    <ProductoFechasDisponibles>

                    </ProductoFechasDisponibles>
                </loggedContext.Provider>
            </MemoryRouter>)
        expect(renderizacionSimple).toMatchSnapshot()

    })

})