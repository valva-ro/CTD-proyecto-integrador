import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import Layout from "./Layout";
import loggedContext from "../../contexts/loggedContext";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Profile tests", function () {
  let componente;

  beforeEach(() => {
    componente = render(
      <loggedContext.Provider value={{ isLogged: true }}>
        <Layout>Hola Mundo</Layout>
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );
  })

  test("Se renderiza el Layout con los children", () => {
    expect(componente.container).toHaveTextContent("Hola Mundo");
  });

  test("Devuelve el Layout correctamente", () => {
    expect(componente).toMatchSnapshot();
  });
});
