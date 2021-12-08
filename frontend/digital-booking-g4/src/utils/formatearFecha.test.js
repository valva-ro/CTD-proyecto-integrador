import formatearFecha from "./formatearFecha"

describe("formatearFecha test", function () {
    test("Formatea fecha apartir de un string", function () {
        expect(formatearFecha("2010-08-17 12:09:36")).toEqual(mockDeLaFuncion(new Date("2010/08/17 12:09:36")))
    })
    test("Formatea fecha apartir de fecha", function () {
        expect(formatearFecha(new Date)).toEqual(mockDeLaFuncion(new Date))
    })
})
function mockDeLaFuncion(date) {
    return date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
        .replaceAll("/", "-")
        .split("-")
        .reverse()
        .join("-")

}