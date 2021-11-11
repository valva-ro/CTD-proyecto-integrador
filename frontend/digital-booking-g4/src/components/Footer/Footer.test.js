import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import Footer from "./Footer";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Footer tests", function () {
  let footer;

  beforeEach(() => {
    footer = shallow(<Footer />);
  });

  test("Devuelve el footer correctamente", () => {
    expect(footer).toMatchSnapshot();
  });

  test("El footer contiene 1 p con el copyright", () => {
    let node = footer.find("p");
    expect(node.length).toEqual(1);
  });

  test("El footer contiene 4 iconos con las redes sociales", () => {
    let node = footer.find("i");
    expect(node.length).toEqual(4);
  });
});
