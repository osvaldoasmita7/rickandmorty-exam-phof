import { render } from "@testing-library/react";
import PageExam from "../app/page";
describe("Test para la página de examen", () => {
  test("Debe de renderear el componente", () => {
    render(<PageExam />);
    expect(true).toBe(true);
  });
});
