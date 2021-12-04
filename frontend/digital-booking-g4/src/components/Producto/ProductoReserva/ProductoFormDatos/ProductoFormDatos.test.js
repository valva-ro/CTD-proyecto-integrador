import ProductoFormDatos from "./ProductoFormDatos";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("ProductoFormDatos test", function () {
    test("Verificar Renderizado ProductoFormDatos", () => {
        render(<ProductoFormDatos setNombre={(coso) => ""}
            setApellido={(coso) => ""}
            setMail={(coso) => ""}
            setCiudad={(coso) => ""}
            setTextArea={(coso) => ""}
            setIsVacunadx={(coso) => ""}></ProductoFormDatos>)
        expect(screen.getByText("Completá tus datos")).toBeTruthy()
    })
})