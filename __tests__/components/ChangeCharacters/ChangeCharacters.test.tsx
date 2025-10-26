import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CharacterContext } from "@/app/contexts";
import { ChangeCharacters } from "@/app/components/ChangeCharacters/ChangeCharacters";

// Crea funciones mocks
const mockLastCharacter = jest.fn();
const mockNextCharacter = jest.fn();

// Crea el contexto mock
const value: any = {
  nextCharacter: mockNextCharacter,
  lastCharacter: mockLastCharacter,
};

// Componente Wrapper para el test que proporciona el contexto mockeado
const wrapper = ({ children }: any) => (
  <CharacterContext.Provider value={value}>
    {children}
  </CharacterContext.Provider>
);

describe("ChangeCharacters component", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("llama a la función lastCharacter al hacer clic en el botón izquierdo", async () => {
    // Renderiza el componente envuelto en el proveedor de contexto mockeado
    render(<ChangeCharacters />, { wrapper });

    // Accede al botón izquierdo por el rol de botones
    const buttons = screen.getAllByRole("button");
    // El primer botón es el de la izquierda
    const lastCharacterButton = buttons[0];

    // Simula el clic del usuario en el botón
    await userEvent.click(lastCharacterButton);

    // Espera que solo se haya llamado la de lastCharacter
    expect(mockLastCharacter).toHaveBeenCalledTimes(1);
    expect(mockNextCharacter).not.toHaveBeenCalled();
  });

  it("Llama a la función nextCharacter al dar click al botón derecho", async () => {
    render(<ChangeCharacters />, { wrapper });

    const buttons = screen.getAllByRole("button");
    const nextCharacterButton = buttons[1];

    await userEvent.click(nextCharacterButton);

    expect(mockNextCharacter).toHaveBeenCalled();
    expect(mockLastCharacter).not.toHaveBeenCalledTimes(1);
  });
});
