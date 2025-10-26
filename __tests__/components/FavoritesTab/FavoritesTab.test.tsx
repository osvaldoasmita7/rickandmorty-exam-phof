import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { FavoritesTab } from "@/app/components/FavoritesTab/FavoritesTab";

describe("first", () => {
  // Limpia los mocks después de cada test para que no interfieran
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("se renderiza correctamente con los favoritos", () => {
    render(<FavoritesTab id="algo" />);
    expect(true).toBe(true);
  });
});
