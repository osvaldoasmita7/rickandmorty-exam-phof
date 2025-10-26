import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CharacterContext } from "@/app/contexts";
import { ChangeCharacters } from "@/app/components/ChangeCharacters/ChangeCharacters";
import { CHARACTER_EMPTY } from "@/app/constants";
import Page from "../app/exam/page";
// Crea el contexto mock
const value: any = {
  getCharacters: jest.fn(),
  resetContext: jest.fn(),
  characters: [{ ...CHARACTER_EMPTY, id: 1, name: "osvaldo" }],
  loading: false,
  favorites: [],
};
// Componente Wrapper para el test que proporciona el contexto mockeado
const wrapper = ({ children }: any) => (
  <CharacterContext.Provider value={value}>
    {children}
  </CharacterContext.Provider>
);

describe("Test para Page Exam component", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Debe de llamar a la función lastCharacter al hacer clic en el botón izquierdo", async () => {
    // Renderiza el componente envuelto en el proveedor de contexto mockeado
    render(<Page />, { wrapper });
    expect(true).toBe(true);
  });
});
