import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createSerializer } from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from "./Header";
import loggedContext from "../../contexts/loggedContext";
import { configure, mount } from "enzyme";


configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Header tests en la home", function () {
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useLocation: jest.fn(() => {
        return location = {
          pathname: "/register"
        }
      })

    }))
  })
  const userInformation = {
    nombre: "Natalie",
    apellido: "Albaca"
  }

  test("Se renderiza el componente Profile cuando el usuario está logueado", () => {
    render(
      <loggedContext.Provider value={{ isLogged: true, userInformation }}>
        <Header />
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.getAllByText(userInformation.nombre + " " + userInformation.apellido)).toBeTruthy();
  });

  test("No se renderiza el componente contenido cuando el usuario no está logueado", () => {
    render(
      <loggedContext.Provider value={{ isLogged: false }}>
        <Header />
      </loggedContext.Provider>,
      { wrapper: MemoryRouter }
    );

    expect(screen.queryAllByText(`${userInformation.nombre} ${userInformation.apellido}`)[0]).toBeUndefined();
  });

  test("Al hacer click en la X se cierra la sesión del usuario", () => {
    let isLogged = true;
    const setIsLogged = (vaino) => {
      isLogged = vaino
    }
    const renderizacionSimple = mount(
      <MemoryRouter>
        <loggedContext.Provider value={{ isLogged, setIsLogged, userInformation }}>
          <Header />
        </loggedContext.Provider>
      </MemoryRouter>

    );

    expect(isLogged).toBeTruthy();

    const botonCerrar = renderizacionSimple.find("span").at(1)
    botonCerrar.simulate('click')
    renderizacionSimple.update()

  });
});
