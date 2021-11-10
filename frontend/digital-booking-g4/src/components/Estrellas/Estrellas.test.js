import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import Estrellas from "./Estrellas";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Estrellas tests", function () {
  test("El componente renderiza 5 estrellas", () => {
    let estrellas = shallow(<Estrellas />);
    let node = estrellas.find("i");
    expect(node.length).toEqual(5);
  });

  test("El componente renderiza 3 estrellas llenas si el puntaje es 6", () => {
    let estrellas = shallow(<Estrellas puntaje={6} />);
    let estrellasLlenas = estrellas.find(".estrellaLlena");
    let estrellasVacias = estrellas.find(".estrellaVacia");
    expect(estrellasLlenas.length).toEqual(3);
    expect(estrellasVacias.length).toEqual(2);
  });

  test("El componente renderiza 0 estrellas llenas si el puntaje es 0", () => {
    let estrellas = shallow(<Estrellas puntaje={0} />);
    let estrellasVacias = estrellas.find(".estrellaVacia");
    expect(estrellasVacias.length).toEqual(5);
  });

  test("El componente renderiza 4 estrellas llenas si el puntaje es 8.5", () => {
    let estrellas = shallow(<Estrellas puntaje={8.5} />);
    let estrellasLlenas = estrellas.find(".estrellaLlena");
    let estrellasVacias = estrellas.find(".estrellaVacia");
    expect(estrellasLlenas.length).toEqual(4);
    expect(estrellasVacias.length).toEqual(1);
  });
});
