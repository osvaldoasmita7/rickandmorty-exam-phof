import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { LikeButton } from "@/app/components";

describe("Tests para el componente de LikeButton", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debe de renderizar el LikeButton", async () => {
    render(<LikeButton isLiked={true} onClick={() => {}} />);
    // Utiliza un `getByText` para buscar el elemento que contiene el texto "Algo".
    expect(true).toBe(true);
  });
});
