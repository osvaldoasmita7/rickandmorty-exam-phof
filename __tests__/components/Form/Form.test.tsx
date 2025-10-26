import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Form } from "@/app/components";

describe("first", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("se renderiza correctamente con los favoritos", () => {
    render(<Form>Algo</Form>);
    // Utiliza un `getByText` para buscar el elemento que contiene el texto "Algo".
    const element = screen.getByText("Algo");

    // Asegúrate de que el elemento se encuentre en el documento.
    expect(element).toBeInTheDocument();
  });
});
