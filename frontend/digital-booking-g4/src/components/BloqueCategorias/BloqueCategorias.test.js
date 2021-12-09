import React from "react";
import BloqueCategorias from "./BloqueCategorias";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import { configure, mount } from "enzyme";
import currentFilterContext from "../../contexts/currentFilterContext"


describe("Bloque Categoria test", function () {
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
    test("Renderiza Por default", () => {
        const variable = render(<currentFilterContext.Provider value={{ currentCity, setCurrentCity, currentCategory, setCurrentCategory, currentDateRange, setcurrentDateRange }}>
            <BloqueCategorias></BloqueCategorias>
        </currentFilterContext.Provider>)
        expect(variable).toMatchSnapshot()
    })
})
