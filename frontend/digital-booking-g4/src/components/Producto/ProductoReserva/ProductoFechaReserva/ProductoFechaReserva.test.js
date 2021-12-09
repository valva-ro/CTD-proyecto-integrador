import ProductoFechaReserva from "./ProductoFechaReserva";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("ProductoFechaReserva tests", function () {
    beforeEach(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: jest.fn(() => {
                return object = {
                    id: 1
                }
            }),
            useParams: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            })
        }));
        jest.spyOn(window.localStorage.__proto__, 'setItem');
        window.localStorage.__proto__.getItem = jest.fn((param) => {
            return false
        });
        jest.spyOn(window.localStorage.__proto__, 'hasOwnProperty');
        window.localStorage.__proto__.hasOwnProperty = jest.fn((param) => {
            return null
        });
    })
    let checkin = null
    let checkuot = null
    const setChecikn = (date) => {
        date = checkin
    }
    const setChecout = (date) => {
        date = checkuot
    }

    test("Renderizacion por default", () => {

        render(
            <MemoryRouter>
                <ProductoFechaReserva setCheckin={setChecikn} setCheckout={setChecout} />
            </MemoryRouter>)

    })

})