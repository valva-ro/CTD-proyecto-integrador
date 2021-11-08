import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Profile from "./Profile";
import loggedContext from "../../contexts/loggedContext";

const perfilEnviado = {
  nombre: "pepe",
  apellido: "pepardo"
};
const perfilEsperado = {
  nombre: "Pepe",
  apellido: "Pepardo",
};

describe("Profile tests", function () {
  test("Se renderiza el componente mostrando nombre y apellido", () => {
    const componente = render(
      <loggedContext.Provider value={{ isLogged: true }}>
        <Profile
          nombre={perfilEnviado.nombre}
          apellido={perfilEnviado.apellido}
        />
      </loggedContext.Provider>
    );

    expect(componente.container).toHaveTextContent(
      `${perfilEsperado.nombre} ${perfilEsperado.apellido}`
    );
  });
    test("Se renderiza el componente mostrando las iniciales", () => {
    const componente = render(
      <loggedContext.Provider value={{ isLogged: true }}>
        <Profile
          nombre={perfilEnviado.nombre}
          apellido={perfilEnviado.apellido}
        />
      </loggedContext.Provider>
    );

    expect(componente.container).toHaveTextContent(`PP`);
  });
});
