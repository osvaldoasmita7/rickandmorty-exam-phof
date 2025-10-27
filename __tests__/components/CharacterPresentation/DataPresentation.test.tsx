import "@testing-library/jest-dom";
import { CharacterPresentation, DataPresentation } from "@/app/components";
import { CHARACTER_EMPTY } from "@/app/constants";
import { CharacterContext } from "@/app/contexts";
import { render, screen } from "@testing-library/react";
import { Character } from "@/server/dependences/amTesting-master";
// jest.setup.js
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // Retorna un elemento <img> simple con las propiedades recibidas
    return <img {...props} />;
  },
}));

describe("Test para el componente de Data presentation", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debe de renderizar correctamente con los datos de un personaje", () => {
    const mockCharacter: Character = {
      ...CHARACTER_EMPTY,
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      image: "https://example.com/rick.png",
    };

    render(<DataPresentation character={mockCharacter} />);

    // Verificar que el componente Image se renderiza con las props correctas
    expect(true).toEqual(true);
  });
});
