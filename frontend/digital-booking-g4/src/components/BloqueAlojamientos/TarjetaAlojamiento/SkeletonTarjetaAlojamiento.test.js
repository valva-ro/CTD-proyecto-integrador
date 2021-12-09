import SkeletonTarjetaAlojamiento from "./SkeletonTarjetaAlojamiento";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react"

describe("Skeleton Tarjeta Alojamiento test", function () {

    test("Renderiza Componente Por default", () => {
        const renderizacionSimple = render(<SkeletonTarjetaAlojamiento></SkeletonTarjetaAlojamiento>)
        expect(renderizacionSimple).toMatchSnapshot()
    })

})