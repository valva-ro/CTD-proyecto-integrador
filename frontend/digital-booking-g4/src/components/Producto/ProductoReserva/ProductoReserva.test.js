import ProductoReserva from "./ProductoReserva";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import productoParaTest from "./productoParaTest"
import Enzyme from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("ProductoReserva Test", function () {
    beforeEach(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            }),
            useParams: jest.fn(() => {
                return object = {
                    id: 1234
                }
            })
        }))
    })

    test("Verificar Renderizado ProductoReserva", function () {

        shallow(<MemoryRouter><ProductoReserva producto={productoParaTest}></ProductoReserva></MemoryRouter>)
    })

})