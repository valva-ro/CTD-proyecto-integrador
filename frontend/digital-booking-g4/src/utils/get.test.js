import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import get from "./get"
Enzyme.configure({
    adapter: new Adapter()
});
describe("Get test", function () {
    test("Trae informacion existente", () => {
        expect(get("categorias")).not.toBeNull()
    })
    test("Recibe error", () => {
        expect(get("")).toBeTruthy()
    })
})