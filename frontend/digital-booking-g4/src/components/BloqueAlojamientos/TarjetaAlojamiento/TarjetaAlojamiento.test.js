import TarjetaAlojamiento from "./TarjetaAlojamiento";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount, shallow } from "enzyme";
import loggedContext from "../../../contexts/loggedContext"
import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Tarjeta Alojamiento test", function () {
    let alojamiento
    beforeEach(() => {
        alojamiento = {
            id: 1,
            nombre: "Meliá",
            descripcion: "Complejos turísticos con servicio “todo incluido” para disfrutar de unas vacaciones de lujo, diseñados para mezclarse con su entorno natural en lugares muy exóticos donde disfrutar de una experiencia verdaderamente única."
            ,
            categoria: {
                id: 1,
                titulo: "Hoteles",
                descripcion: "807.105 hoteles",
                urlImagen: "https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Hoteles.jfif"
            },
            ciudad: {
                id: 2,
                nombre: "La Plata",
                pais: "Argentina",
                latitud: -34.9214,
                longitud: -57.9544
            },
            imagenes: [{
                id: 7,
                imagenTitulo: "Principal",
                imagenUrl: "https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto1.jpg"
            }],
            caracteristicas: [{
                id: 2,
                nombre: "Piscina",
                icono: "fas fa-swimmer"
            }],
            puntuaciones: [{
                id: 1,
                puntuacion: 2,
                comentario: "Lindo pero pésima la atención y la limpieza, además el wifi no llegaba bien a la habitación",
                fecha: "2021-11-18"
            }],
            direccion: ""

        }
    })

    test("Renderiza Componente is logged true , is loaded true", () => {

        const renderizacionSimple = render(
            <loggedContext.Provider value={{ isLogged: true }}>
                <TarjetaAlojamiento alojamiento={alojamiento}>
                </TarjetaAlojamiento>
            </loggedContext.Provider>,
            { wrapper: MemoryRouter })
        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Renderiza Componente is logged false , is loaded true", () => {

        const renderizacionSimple = render(
            <loggedContext.Provider value={{ isLogged: false }}>
                <TarjetaAlojamiento alojamiento={alojamiento}>
                </TarjetaAlojamiento>
            </loggedContext.Provider>,
            { wrapper: MemoryRouter })
        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Renderiza Componente sin puntuaciones", () => {
        let alojament = alojamiento
        alojament.puntuaciones = ["a"]
        const renderizacionSimple = render(

            <loggedContext.Provider value={{ isLogged: true }}>
                <TarjetaAlojamiento alojamiento={alojament}>
                </TarjetaAlojamiento>
            </loggedContext.Provider>,
            { wrapper: MemoryRouter })


        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Renderiza Componente sin con descripcion menor de 85", () => {
        let alojament = alojamiento
        alojament.descripcion = "ayuda"
        const renderizacionSimple = render(

            <loggedContext.Provider value={{ isLogged: true }}>
                <TarjetaAlojamiento alojamiento={alojament}>
                </TarjetaAlojamiento>
            </loggedContext.Provider>,
            { wrapper: MemoryRouter })

        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Marca o no favorito", () => {

        const renderizacionSimple = render(

            <loggedContext.Provider value={{ isLogged: true }}>
                <TarjetaAlojamiento alojamiento={alojamiento}>
                </TarjetaAlojamiento>
            </loggedContext.Provider>,
            { wrapper: MemoryRouter })
        const botonVerMas = renderizacionSimple.getByText("Leer más")
        fireEvent.click(botonVerMas)
        renderizacionSimple.getByText("Leer menos")
        expect(renderizacionSimple).toMatchSnapshot()


    })
    test("Visualiza mapa ", () => {
        const renderizacionSimple = render(<loggedContext.Provider value={{ isLogged: true }}>
            <TarjetaAlojamiento alojamiento={alojamiento}>
            </TarjetaAlojamiento>
        </loggedContext.Provider>,
            { wrapper: MemoryRouter })
        const botonVerMapa = renderizacionSimple.getByText("Mostrar en el mapa")
        fireEvent.click(botonVerMapa)
        expect(renderizacionSimple).toMatchSnapshot()
        const botonVerCerrarMapa = renderizacionSimple.getByText("X")
        fireEvent.click(botonVerCerrarMapa)
        expect(renderizacionSimple).toMatchSnapshot()

    })
    test("Me lleva a la pagina de features", () => {
        const renderizacionSimple = render(<loggedContext.Provider value={{ isLogged: true }}>
            <TarjetaAlojamiento alojamiento={alojamiento}>
            </TarjetaAlojamiento>
        </loggedContext.Provider>,
            { wrapper: MemoryRouter })

        const botonRedireccionador = renderizacionSimple.getByText("Ver más")
        fireEvent.click(botonRedireccionador)
        expect(renderizacionSimple).toMatchSnapshot()
    })
    test("Me lleva a la pagina de features", () => {
        const renderizacionSimple = mount(<loggedContext.Provider value={{ isLogged: true }}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" >
                        <TarjetaAlojamiento alojamiento={alojamiento}>
                        </TarjetaAlojamiento>
                    </Route>
                </Switch>
            </BrowserRouter>
        </loggedContext.Provider>,

            { wrapper: MemoryRouter })
        console.log(renderizacionSimple.html())
    })




})
