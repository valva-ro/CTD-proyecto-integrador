import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, getByTestId } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";
import loggedContext from "../../contexts/loggedContext";

describe("Login tests", function () {
  test("Se renderiza un input para el mail y otro para la contraseña", () => {
    const componente = render(
      <loggedContext.Provider value={{ isLogged: false }}>
        <Login/>
      </loggedContext.Provider>,
      { wrapper: MemoryRouter });
    expect(componente.container).toHaveTextContent("Correo electrónico");
    expect(componente.container).toHaveTextContent("Contraseña");
  });  
  
  test("Se renderiza un botón para iniciar sesión", () => {
    const componente = render(
      <loggedContext.Provider value={{ isLogged: false }}>
        <Login/>
      </loggedContext.Provider>,
      { wrapper: MemoryRouter });
    expect(getByTestId(componente.container, "loginBtn")).toBeEnabled();
  });
  
  test("Se renderiza un link para redirigir a la página de registro", () => {
    const componente = render(
      <loggedContext.Provider value={{ isLogged: false }}>
        <Login/>
      </loggedContext.Provider>,
      { wrapper: MemoryRouter });
    expect(componente.container).toHaveTextContent("¿Aún no tienes cuenta?");
    expect(componente.container).toHaveTextContent("Registrate");
  });
});
