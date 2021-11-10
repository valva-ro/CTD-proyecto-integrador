import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Searcher from "./Searcher";
import currentCityContext from "../../contexts/currentCityContext";

describe("Searcher tests", function () {
  let currentCity = "";
  let setCurrentCity = (city) => (currentCity = city);
  let searcher = render(
    <currentCityContext.Provider value={{ currentCity, setCurrentCity }}>
      <Searcher />
    </currentCityContext.Provider>
  );
  
  test("Devuelve el searcher correctamente", () => {
    expect(searcher.container).toHaveTextContent(
      "Busca ofertas en hoteles, casas y mucho más"
    );
  });

  test("El searcher contiene 1 h2 con el titulo", () => {
    // let node = searcher.find("h2");
    // expect(node.length).toEqual(1);
  });
});
