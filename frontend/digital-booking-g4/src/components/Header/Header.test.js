import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import loggedContext from "../../contexts/loggedContext";

const perfilEsperado = {
  nombre: "Bruno",
  apellido: "Rodriguez",
};

describe("Header tests en la home", function () {

  test("Se renderiza el componente Profile cuando el usuario está logueado", () => {
    render(
      <loggedContext.Provider value={{ isLogged: true }}>
        <Header />
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.queryAllByText(`${perfilEsperado.nombre} ${perfilEsperado.apellido}`)[0]).toBeInTheDocument();
  });

  test("No se renderiza el componente contenido cuando el usuario no está logueado", () => {
    render(
      <loggedContext.Provider value={{ isLogged: false }}>
        <Header />
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.queryAllByText(`${perfilEsperado.nombre} ${perfilEsperado.apellido}`)[0]).toBeUndefined();
  });

  test("Al hacer click en la X se cierra la sesión del usuario", () => {
    let isLogged = true;
    const setIsLogged = boolean => isLogged = boolean;
    render(
      <loggedContext.Provider value={{ isLogged, setIsLogged }}>
        <Header />
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(isLogged).toBeTruthy();

    const btnCerrarSesion = screen.queryAllByTestId("btnCerrarSesion")[0];
    fireEvent.click(btnCerrarSesion);

    expect(isLogged).toBeFalsy();
  });
});
