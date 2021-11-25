import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {
    createSerializer
} from "enzyme-to-json";
import obtenerClasificacion from "./obtenerClasificacion"

Enzyme.configure({
    adapter: new Adapter()
});
expect.addSnapshotSerializer(createSerializer({
    mode: "deep"
}));
describe("ObtenerClasificacion Test", function () {
    test("Arroja algun tipo de error", () => {
        expect(obtenerClasificacion(0))
    })

    test("Arroja un valor valido", () => {
        expect(obtenerClasificacion(1)).toBe("Malo")
        expect(obtenerClasificacion(2)).toBe("Regular")
        expect(obtenerClasificacion(3)).toBe("Bueno")
        expect(obtenerClasificacion(4)).toBe("Muy bueno")
        expect(obtenerClasificacion(5)).toBe("Excelente")
    })
    test("Arroja 'sin calificacion'", () => {
        expect(obtenerClasificacion(0)).toBe("Sin calificaciones")
    })

})