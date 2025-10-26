import { InputSearch } from "@/app/components";
import { CharacterContext } from "@/app/contexts";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { getCharacter } from "rickmortyapi";
// Crea funciones mocks
const mockGetCharacters = jest.fn();

// Crea el contexto mock
const value: any = {
  getCharacters: mockGetCharacters,
};

// Componente Wrapper para el test que proporciona el contexto mockeado
const wrapper = ({ children }: any) => (
  <CharacterContext.Provider value={value}>
    {children}
  </CharacterContext.Provider>
);
describe("first", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("se renderiza correctamente con los favoritos", async () => {
    render(<InputSearch />, { wrapper });
    // Utiliza un `getByText` para buscar el elemento que contiene el texto "Algo".
    const element = screen.getByTestId("search");
    expect(element).toBeInTheDocument();
  });
});
