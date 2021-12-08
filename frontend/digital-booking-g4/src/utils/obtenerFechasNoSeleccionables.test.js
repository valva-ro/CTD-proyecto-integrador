import obtenerFechasNoSeleccionables from "./obtenerFechasNoSeleccionables";
describe("obtenerFechasNoSeleccionables test", function () {
    const fechaReferencia = new Date

    const arraySinFechas = []

    const arrayConFechasAnteriores = [(new Date).setDate((new Date).getDate() - 1), (new Date).setDate((new Date).getDate() - 2), (new Date).setDate((new Date).getDate() - 3), (new Date).setDate((new Date).getDate() - 4), (new Date).setDate((new Date).getDate() - 5), (new Date).setDate((new Date).getDate() - 6)]
    const arrayConFechasPosteriores = [(new Date).setDate((new Date).getDate() + 1), (new Date).setDate((new Date).getDate() + 2), (new Date).setDate((new Date).getDate() + 3), (new Date).setDate((new Date).getDate() + 4), (new Date).setDate((new Date).getDate() + 5), (new Date).setDate((new Date).getDate() + 6)]
    const arrayConFechasAnterioresPosteriores = [(new Date).setDate((new Date).getDate() - 1), (new Date).setDate((new Date).getDate() - 2), (new Date).setDate((new Date).getDate() - 3), (new Date).setDate((new Date).getDate() - 4), (new Date).setDate((new Date).getDate() - 5), (new Date).setDate((new Date).getDate() - 6), (new Date).setDate((new Date).getDate() + 1), (new Date).setDate((new Date).getDate() + 2), (new Date).setDate((new Date).getDate() + 3), (new Date).setDate((new Date).getDate() + 4), (new Date).setDate((new Date).getDate() + 5), (new Date).setDate((new Date).getDate() + 6)]

    const fechasAnteriores = arrayConFechasAnteriores.map((fecha) => new Date(fecha))
    const fechasPosteriores = arrayConFechasPosteriores.map((fecha) => new Date(fecha))
    const fechasAnterioresPosteriores = arrayConFechasAnterioresPosteriores.map((fecha) => new Date(fecha))

    let numeroDiasAbloquear = 63

    while (numeroDiasAbloquear != 6) {
        fechasAnteriores.push(new Date((new Date).setDate((new Date).getDate() - numeroDiasAbloquear)))
        fechasPosteriores.push(new Date((new Date).setDate((new Date).getDate() + numeroDiasAbloquear)))
        fechasAnterioresPosteriores.push(new Date((new Date).setDate((new Date).getDate() - numeroDiasAbloquear)))
        fechasAnterioresPosteriores.push(new Date((new Date).setDate((new Date).getDate() + numeroDiasAbloquear)))
        numeroDiasAbloquear = numeroDiasAbloquear - 1
    }
    fechasAnteriores.sort((a, b) => a - b)
    fechasPosteriores.sort((a, b) => a - b)
    fechasAnterioresPosteriores.sort((a, b) => a - b)




    test("No trae fecha", () => {
        expect(obtenerFechasNoSeleccionables(fechaReferencia, arraySinFechas)).toEqual([])
    })
    test("Trae fechas anteriores", () => {
        const fechasTraidas = obtenerFechasNoSeleccionables(fechaReferencia, arrayConFechasAnteriores).map((fecha) => {
            fecha.toDateString()
        })
        const fechasAcomparar = fechasAnteriores.map((fecha) => {
            fecha.toDateString()
        })

        expect(fechasTraidas).toEqual(fechasAcomparar)
    })
    test("Trae fechas posteriores", () => {
        const fechasTraidas = obtenerFechasNoSeleccionables(fechaReferencia, arrayConFechasPosteriores).map((fecha) => {
            fecha.toDateString()
        })
        const fechasAcomparar = fechasPosteriores.map((fecha) => {
            fecha.toDateString()
        })
        expect(fechasTraidas).toEqual(fechasAcomparar)
    })
    test("Trae fechas anteriores y posteriores", () => {
        const fechasTraidas = obtenerFechasNoSeleccionables(fechaReferencia, arrayConFechasAnterioresPosteriores).map((fecha) => {
            fecha.toDateString()
        })
        const fechasAcomparar = fechasAnterioresPosteriores.map((fecha) => {
            fecha.toDateString()
        })
        expect(fechasTraidas).toEqual(fechasAcomparar)
    })

})