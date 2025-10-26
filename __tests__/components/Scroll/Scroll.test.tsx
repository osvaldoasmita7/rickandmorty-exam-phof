import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Scroll } from "@/app/components";

describe("first", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("se renderiza correctamente con los favoritos", async () => {
    render(<Scroll>Algo</Scroll>);
    // Utiliza un `getByText` para buscar el elemento que contiene el texto "Algo".
    const element = screen.getByText("Algo");
    expect(element).toBeInTheDocument();
  });
});
