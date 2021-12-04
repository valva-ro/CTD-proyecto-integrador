import obtenerFechasParaEndpointBuscarPorFechas from "./obtenerFechasParaEndpointBuscarPorFechas"

describe("Obtener fechas para endpoint ", function () {
    test("Trae fecha nueva", () => {
        expect(obtenerFechasParaEndpointBuscarPorFechas(null)).toEqual(new Date)
    })
})