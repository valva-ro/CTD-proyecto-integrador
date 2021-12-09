import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Searcher from "./Searcher";
import currentFilterContext from "../../contexts/currentFilterContext";



describe("Searcher tests", function () {


  test("Devuelve el searcher correctamente", () => {
    const searcher = render(
      <currentFilterContext.Provider value={{ currentCity: "", setCurrentDateRange: () => { } }}>
        <Searcher ></Searcher>
      </currentFilterContext.Provider>
    );
    expect(searcher.container).toHaveTextContent(

      "Busca ofertas en hoteles, casas y mucho más"

    );
  });

  test("El searcher contiene 1 h2 con el titulo", () => {
    // let node = searcher.find("h2");
    // expect(node.length).toEqual(1);
  });
});
