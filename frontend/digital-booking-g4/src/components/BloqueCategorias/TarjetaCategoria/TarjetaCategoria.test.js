import React from "react";
import TarjetaCategoria from "./TarjetaCategoria";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));


describe("Tarjeta Categoria test", function () {
    const fotoPortada = "este es el url de la foto portada"
    let indice = 1
    let estaActiva = true
    const nombre = "este es el nombre"
    const descripcion = "esta es la descripcion"
    const onToggleSelect = (indice, nombre) => {
        if (estaActiva) {
            estaActiva = false
        } else {
            estaActiva = true
        }
    }

    test("Renderiza Por default", () => {
        const renderizacionSimple = render(<TarjetaCategoria></TarjetaCategoria>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Renderiza Con data", () => {
        const renderizacionSimple = render(<TarjetaCategoria indice={indice} estaActiva={estaActiva} nombre={nombre} descripcion={descripcion} onToggleSelect={onToggleSelect}></TarjetaCategoria>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Toggle on click", () => {
        const renderizacionSimple = mount(<TarjetaCategoria indice={indice} estaActiva={estaActiva} nombre={nombre} descripcion={descripcion} onToggleSelect={onToggleSelect}></TarjetaCategoria>)
        const botonToggle = renderizacionSimple.find(".tarjetaSeleccionada")

        botonToggle.simulate('click');
        renderizacionSimple.update()
        expect(estaActiva).toBeFalsy()
    })
})