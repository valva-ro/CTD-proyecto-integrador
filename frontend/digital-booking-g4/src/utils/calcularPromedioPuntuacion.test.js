import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {
    createSerializer
} from "enzyme-to-json";
import calcularPromedioPuntuacion from "./calcularPromedioPuntuacion"
Enzyme.configure({
    adapter: new Adapter()
});
expect.addSnapshotSerializer(createSerializer({
    mode: "deep"
}));
describe("ObtenerClasificacion Test", function () {
    const arrayIdeal = [{
        puntuacion: 0
    }, {
        puntuacion: 1
    }, {
        puntuacion: 2
    }, {
        puntuacion: 3
    }]
    const arrayUnDato = [{
        puntuacion: 1
    }]
    const arraySinDatos = [{

    }]
    const arrayConLetras = [{
        puntuacion: "a"
    }]
    const arrayConFalse = [{
        puntuacion: false
    }]
    test("Valida entre varios numeros y saca un preomedio natural", () => {
        expect(calcularPromedioPuntuacion(arrayIdeal)).toBe(2)
    })
    test("Valida entre un solo dato", () => {
        expect(calcularPromedioPuntuacion(arrayUnDato)).toBe(1)
    })
    test("Valida entre un solo dato", () => {
        expect(calcularPromedioPuntuacion(arraySinDatos)).toBeFalsy()
    })
    test("Valida entre datos no numericos", () => {
        expect(calcularPromedioPuntuacion(arrayConLetras)).toBeNaN()
        expect(calcularPromedioPuntuacion(arrayConFalse)).toBeFalsy()
    })
})