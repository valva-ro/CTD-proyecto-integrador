import BloqueAlojamientos from "./BloqueAlojamientos"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount, shallow } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import currentFilterContext from "../../contexts/currentFilterContext"

describe("Bloque Alojamiento test", function () {
    let currentCity = ""
    const setCurrentCity = (word) => {
        currentCity = word
    }
    let currentCategory = ""
    const setCurrentCategory = (word) => {
        currentCategory = word
    }
    let currentDateRange = {
        fechaInicio: null,
        fechaFin: null
    }
    const setcurrentDateRange = (fechaInicio, fechaFin) => {
        currentDateRange.fechaInicio = fechaInicio
        currentDateRange.fechaFin = fechaFin
    }
    let reset = ""
    const setReset = (variable) => {
        reset = variable
    }



    test("Renderiza esqueletons", () => {
        const renderizar = async () => {
            const variable = render(<currentFilterContext.Provider value={{ currentCity, setCurrentCity, currentCategory, setCurrentCategory, currentDateRange, setcurrentDateRange }}>
                <BloqueAlojamientos setReset={setReset}></BloqueAlojamientos>
            </currentFilterContext.Provider>)
            return new Promise(variabla => {
                return variabla(variable)
            })
        }
        try {
            renderizar().then((result) =>
                expect(result).toMatchSnapshot()
            )
        } catch (error) {
            console.log(error);
        }


    })
    test("Renderizacion por default", async () => {

        const renderizacionSimple = render(<currentFilterContext.Provider value={{ currentCity, setCurrentCity, currentCategory, setCurrentCategory, currentDateRange, setcurrentDateRange }}>
            <BloqueAlojamientos setReset={setReset}></BloqueAlojamientos>
        </currentFilterContext.Provider>)
        expect(renderizacionSimple).toMatchSnapshot()
    })
})