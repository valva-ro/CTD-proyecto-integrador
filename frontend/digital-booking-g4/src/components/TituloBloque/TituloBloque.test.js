import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import TituloBloque from "./TituloBloque";
import loggedContext from "../../contexts/loggedContext";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("TituloBloque tests", function () {
  let componente;

  beforeEach(() => {
    componente = render(
      <loggedContext.Provider value={{ isLogged: true }}>
        <TituloBloque>Hola Mundo</TituloBloque>
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );
  });

  test("Se renderiza el TituloBloque con los children", () => {
    expect(componente.container).toHaveTextContent("Hola Mundo");
  });

  test("Devuelve el TituloBloque correctamente", () => {
    expect(componente).toMatchSnapshot();
  });
});
