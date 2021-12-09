import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Profile from "./Profile";
import loggedContext from "../../contexts/loggedContext";
import { configure, mount } from "enzyme";
import { createSerializer } from "enzyme-to-json";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
const userInformation = {
  nombre: "n",
  apellido: "a"
}



describe("Profile tests", function () {
  test("Se renderiza el componente mostrando nombre y apellido", () => {
    const componente = render(
      <loggedContext.Provider value={{ isLogged: true, userInformation }}>
        <Profile
        />
      </loggedContext.Provider>
    );

    expect(componente.getByText(userInformation.nombre.toUpperCase() + " " + userInformation.apellido.toUpperCase())).toBeTruthy

  });

  test("Se renderiza el componente mostrando las iniciales", () => {
    const componente = render(
      <loggedContext.Provider value={{ isLogged: true, userInformation }}>
        <Profile />
      </loggedContext.Provider>
    );
    expect(componente.getByText(userInformation.nombre.toUpperCase() + userInformation.apellido.toUpperCase())).toBeTruthy

  });
});
