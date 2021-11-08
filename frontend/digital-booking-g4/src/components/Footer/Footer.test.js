import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer tests", function () {
  test("Se renderiza el footer mostrando el copyright", () => {
    const componente = render(<Footer/>);
    expect(componente.container).toHaveTextContent("©2021 Digital Booking");
  });
});
