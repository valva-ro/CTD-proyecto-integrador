import ProductoReserva from "./ProductoReserva";
import React from "react";
import { render, screen } from "@testing-library/react";
import productoParaTest from "./productoParaTest"
import Enzyme from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("ProductoReserva Test", function () {

    test("Verificar Renderizado ProductoReserva", function () {
        shallow(<ProductoReserva producto={productoParaTest}></ProductoReserva>)
    })

})