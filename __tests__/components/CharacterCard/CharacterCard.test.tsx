import "@testing-library/jest-dom";
import { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CharacterCard } from "@/app/components/CharacterCard/CharacterCard";
import { CharacterContext } from "@/app/contexts"; // Asegúrate de que la ruta sea correcta
import { CHARACTER_EMPTY } from "@/app/constants";

// 1. Mockear el componente LikeButton
jest.mock("../../../app/components/General/LikeButton", () => ({
  LikeButton: (props: any) => {
    // Al hacer un mock, puedes controlar las props y simular el comportamiento
    // En este caso, llamaremos a una función mockeada en el click
    return (
      <button data-testid="like-button" onClick={() => props.onClick(true)} />
    );
  },
}));

describe("CharacterCard component", () => {
  // Crea mocks para las funciones del contexto
  const mockAddFavorites = jest.fn();
  const mockRemoveFavorites = jest.fn();
  const mockSetCharacter = jest.fn();
  const value: any = {
    setCharacter: mockSetCharacter,
    addFavorites: mockAddFavorites,
    removeFavorites: mockRemoveFavorites,
    favorites: [],
  };
  // Componente Wrapper para el test que proporciona el contexto mockeado
  const CustomWrapper = ({ children }: any) => (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );

  // Limpia los mocks después de cada test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("llama a la función addFavorites al hacer click en el botón LikeButton", async () => {
    const character = {
      ...CHARACTER_EMPTY,
      id: 1,
      name: "Rick Sanchez",
    };

    // Renderiza el componente dentro del contexto mockeado
    render(<CharacterCard character={character} />, { wrapper: CustomWrapper });
    // Accede al botón mockeado usando el `data-testid`
    const likeButton = screen.getByTestId("like-button");

    await act(async () => {
      // Simula el clic del usuario
      await userEvent.click(likeButton);
    });

    await waitFor(async () => {
      // Verifica que la función addFavorites haya sido llamada
      expect(mockAddFavorites).toHaveBeenCalledWith(character);
      expect(mockRemoveFavorites).not.toHaveBeenCalled();
    });

    // Simula el clic del usuario
    await userEvent.click(likeButton);
  });
});
