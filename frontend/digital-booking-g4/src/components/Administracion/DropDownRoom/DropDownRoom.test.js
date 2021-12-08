import DropDownRoom from "./DropDownRoom"
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import Enzyme from "enzyme";


Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Drop Down Room test", function () {

    const dropItems = [
        "Principal",
        "Habitación doble",
        "Habitación simple",
        "Baño",
        "Jacuzzi",
        "Cocina",
        "Hall de entrada",
        "Balcón",
        "Piscina",
        "Churrasquera",
        "Cochera",
        "Patio",
        "Sala de estar",
        "Comedor",
        "Recepción",
        "Ambientes compartidos"
    ]


    test("Testea renderización sin ningun dato arrojado", () => {
        let valua = ""
        const input = {
            target: {
                value: valua
            }
        }
        const renderizacionSinNada = render(
            <DropDownRoom rooms={dropItems} input={input}></DropDownRoom>
        );

        expect(renderizacionSinNada).toMatchSnapshot()
    });
    test("Testea renderización con input de una letra", () => {
        let valua = "u"
        const input = {
            target: {
                value: valua
            }
        }
        render(
            <DropDownRoom rooms={dropItems} input={input}></DropDownRoom>
        );


        expect(screen.getByText("Churrasquera"))
        expect(screen.getByText("Jacuzzi"))
    });
});

