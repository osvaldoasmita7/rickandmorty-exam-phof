import "@testing-library/jest-dom";
import { Character } from "rickmortyapi";
import { CharacterPresentation } from "@/app/components";
import { CHARACTER_EMPTY } from "@/app/constants";
import { CharacterContext } from "@/app/contexts";
import { render, screen } from "@testing-library/react";

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
// jest.setup.js
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // Retorna un elemento <img> simple con las propiedades recibidas
    return <img {...props} />;
  },
}));
// mockeamos los componentes hijos
jest.mock(
  "../../../app/components/CharacterPresentation/DataPresentation",
  () => ({
    DataPresentation: jest.fn(() => (
      <div data-testid="data-presentation-mock">Rick Sanchez</div>
    )),
  })
);

jest.mock(
  "../../../app/components/CharacterPresentation/StatusCharacter",
  () => ({
    StatusCharacter: jest.fn(() => (
      <div data-testid="status-character-mock">Alive</div>
    )),
  })
);

jest.mock("../../../app/components/ChangeCharacters/ChangeCharacters", () => ({
  ChangeCharacters: jest.fn(() => (
    <div data-testid="change-characters-mock">Change Characters</div>
  )),
}));

describe("first", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("se renderiza correctamente con los datos de un personaje", () => {
    const mockCharacter: Character = {
      ...CHARACTER_EMPTY,
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      image: "https://example.com/rick.png",
    };

    render(<CharacterPresentation character={mockCharacter} />, { wrapper });

    // Verificar que el componente Image se renderiza con las props correctas
    const imageElement = screen.getByAltText(`image_${mockCharacter.name}`);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockCharacter.image);

    // Verificar que los componentes hijos mockeados se renderizan
    expect(screen.getByTestId("change-characters-mock")).toBeInTheDocument();
    expect(screen.getByTestId("status-character-mock")).toBeInTheDocument();
    expect(screen.getByTestId("data-presentation-mock")).toBeInTheDocument();

    // Verificar que las props se pasaron correctamente a los componentes hijos
    expect(screen.getByTestId("status-character-mock")).toHaveTextContent(
      "Alive"
    );
    expect(screen.getByTestId("data-presentation-mock")).toHaveTextContent(
      "Rick Sanchez"
    );
  });
});
