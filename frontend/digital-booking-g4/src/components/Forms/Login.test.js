import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";
import loggedContext from "../../contexts/loggedContext";


describe("Login tests", function () {
  const context = {
    isLogged: false,
    setIsLogged: (boolean) => (this.isLogged = boolean),
  };

  test("Se renderiza un input para el mail y otro para la contraseña", () => {
    const { isLogged } = context;
    const componente = render(
      <loggedContext.Provider value={{ isLogged }}>
        <Login />
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );
    expect(componente.container).toHaveTextContent("Correo electrónico");
    expect(componente.container).toHaveTextContent("Contraseña");
  });

  test("Se renderiza un botón para iniciar sesión", () => {
    const { isLogged } = context;
    render(
      <loggedContext.Provider value={{ isLogged }}>
        <Login />
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );
    expect(screen.queryByTestId("loginBtn")).toBeEnabled();
  });

  test("Se renderiza un link para redirigir a la página de registro", () => {
    const { isLogged } = context;
    const componente = render(
      <loggedContext.Provider value={{ isLogged }}>
        <Login />
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );
    expect(componente.container).toHaveTextContent("¿Aún no tienes cuenta?");
    expect(componente.container).toHaveTextContent("Registrate");
  });

  test("Iniciar sesión con datos válidos", () => {
    const { isLogged, setIsLogged } = context;
    render(
      <loggedContext.Provider value={{ isLogged, setIsLogged }}>
        <Login />
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );
    const mailInput = "";     // TODO: obtener y setear este input
    const passwordInput = ""; // TODO: obtener y setear este input

    const loginBtn = screen.queryByTestId("loginBtn");
    fireEvent.click(loginBtn);
    // expect(isLogged).toBeTruthy();
  });
});
