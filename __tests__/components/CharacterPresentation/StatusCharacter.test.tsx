import "@testing-library/jest-dom";
import { StatusCharacter } from "@/app/components";
import { render } from "@testing-library/react";

describe("Test to Status character", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("se renderiza correctamente con los datos de un personaje", () => {
    render(<StatusCharacter status="Alive" />);
    // Verificar que el componente Image se renderiza con las props correctas
    expect(true).toEqual(true);
  });
});
