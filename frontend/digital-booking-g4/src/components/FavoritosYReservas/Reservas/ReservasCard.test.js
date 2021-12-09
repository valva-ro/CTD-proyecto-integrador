import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import loggedContext from '../../../contexts/loggedContext'
import ReservasCard from './ReservaCard'
import Router from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";

describe(" Reservas card Reserva test", function () {
    const alojamiento = {

        id: 1,
        nombre: "meliá",
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
            id: 2,
            imagenTitulo: "Baño,",
            imagenUrl: "https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Imagenes/banio.jpg"
        }, {
            id: 7,
            imagenTitulo: "Principal",
            imagenUrl: "https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Alojamientos/Producto1.jpg"
        }],

        caracteristicas: [{
            id: 2,
            nombre: "Piscina",
            icono: "fas fa-swimmer"
        }],
        direccion: "123"

    }
    const reserva = {
        id: 1,
        horaEntrada: 2,
        nombre: "este Es el nombre de la reserva",
        apellido: "Este es el apellido de la reserva",
        mail: "este es el mail de la reserva",
        fechaIngreso: "22-03-2022",
        fechaEgreso: "22-03-2022"
    }
    beforeAll(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: jest.fn(),
                goBack: jest.fn()
            }),
        }));
        global.localStorage = {
            i2x_token: 'someToken',
            getItem: function () {
                return 'someToken'
            }
        };
        localStorage.setItem("id", 1)

    })

    test("Renderiza Default", () => {
        const renderizacionSimple = render(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" >
                        <loggedContext.Provider value={{ isLogged: true }}>
                            <ReservasCard alojamiento={alojamiento} reserva={reserva}></ReservasCard>
                        </loggedContext.Provider>
                    </Route>
                </Switch>
            </BrowserRouter>,
            { wrapper: MemoryRouter })
        expect(renderizacionSimple).toMatchSnapshot()

    })
})