import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import obtenerFechasReservadas from "./obtenerFechasReservadas"
Enzyme.configure({
    adapter: new Adapter()
});
describe("Obtener fechas reservadas test", function () {
    test("Trae informacion existente", () => {
        expect(obtenerFechasReservadas()[0]).toEqual(new Date(2021, 11, 2))
    })
})