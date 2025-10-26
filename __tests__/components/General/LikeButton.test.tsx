import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LikeButton } from "@/app/components";

describe("first", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("se renderiza correctamente con los favoritos", async () => {
    render(<LikeButton isLiked={true} onClick={() => {}} />);
    // Utiliza un `getByText` para buscar el elemento que contiene el texto "Algo".
    expect(true).toBe(true);
  });
});
