import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

import Router from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";
import TarjetaPuntuacionReserva from "./TarjetaPuntuacionReserva";
configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe(" Tarjeta Puntuacion Reserva test", function () {
    const nombreAlojamiento = "Meliá"
    const idAlojamiento = 1
    test("Renderiza Default", () => {
        const renderizacionSimple = render(<TarjetaPuntuacionReserva nombreAlojamiento={nombreAlojamiento} idAlojamiento={idAlojamiento}></TarjetaPuntuacionReserva>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Reacciona Ante On Change", () => {
        const renderizacionSimple = mount(<TarjetaPuntuacionReserva nombreAlojamiento={nombreAlojamiento} idAlojamiento={idAlojamiento}></TarjetaPuntuacionReserva>)
        const textArea = renderizacionSimple.find("textarea")

        textArea.simulate('change', { target: { value: '   a' } })
        renderizacionSimple.update()


    })
    test("Reacciona Ante On Click", () => {
        const renderizacionSimple = mount(<TarjetaPuntuacionReserva nombreAlojamiento={nombreAlojamiento} idAlojamiento={idAlojamiento}></TarjetaPuntuacionReserva>)

        const input1 = renderizacionSimple.find("input").filter({ id: "rate1" })
        const input2 = renderizacionSimple.find("input").filter({ id: "rate2" })
        const input3 = renderizacionSimple.find("input").filter({ id: "rate3" })
        const input4 = renderizacionSimple.find("input").filter({ id: "rate4" })
        const input5 = renderizacionSimple.find("input").filter({ id: "rate5" })
        input1.simulate('click')
        input2.simulate('click')
        input3.simulate('click')
        input4.simulate('click')
        input5.simulate('click')
        const filledButton = renderizacionSimple.find(".btnOK")
        const form = renderizacionSimple.find("form")
        filledButton.simulate('click')
        filledButton.simulate('submit')
        form.simulate('submit')

        renderizacionSimple.update()


    })

})