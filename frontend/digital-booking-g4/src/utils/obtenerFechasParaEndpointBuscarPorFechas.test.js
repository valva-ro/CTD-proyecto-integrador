import obtenerFechasParaEndpointBuscarPorFechas from "./obtenerFechasParaEndpointBuscarPorFechas"
import formatearFecha from "./formatearFecha"
describe("Obtener fechas para endpoint ", function () {
    test("Trae fecha nueva", () => {
        expect(obtenerFechasParaEndpointBuscarPorFechas(null)).toEqual(formatearFecha(new Date))
    })
    test("Traer fecha apartir de un string ", function () {
        expect(obtenerFechasParaEndpointBuscarPorFechas("2010-08-17 12:09:36")).toEqual(formatearFecha("2010-08-17 12:09:36"))
    })

})