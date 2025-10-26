import "@testing-library/jest-dom";

import { renderHook } from "@testing-library/react";
import { useCharacters } from "@/app/hooks/useCharacters";
global.fetch = jest.fn();
describe("useCharacters hook tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Test get characters with params", async () => {
    const { getAllCharacters } = useCharacters();
    const mockResponse = {
      data: {
        results: [
          { id: 1, name: "Rick Sanchez" },
          { id: 2, name: "Rickety Cricket" },
        ],
      },
    };
    // Configurar el mock de fetch para simular una respuesta exitosa
    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    // rendereamos el hook
    renderHook(() => useCharacters());
    // Ejecutamos función de traer personajes
    const response = await getAllCharacters();
    // Validamos
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(response).toBe(mockResponse.data.results);
  });
  it("Test get characters", async () => {
    const { getAllCharacters } = useCharacters();
    const mockResponse = {
      data: {
        results: [
          { id: 1, name: "Rick Sanchez" },
          { id: 2, name: "Rickety Cricket" },
        ],
      },
    };
    // Configurar el mock de fetch para simular una respuesta exitosa
    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const { result } = renderHook(() => useCharacters());
    const response = await getAllCharacters({ name: "rick" });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(response).toBe(mockResponse.data.results);
  });
  it("Test get empty characters", async () => {
    const { getAllCharacters } = useCharacters();
    const mockResponse = {
      data: {
        results: null,
      },
    };
    // Configurar el mock de fetch para simular una respuesta exitosa
    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    renderHook(() => useCharacters());
    const response = await getAllCharacters({ name: "rick" });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(response).toEqual([]);
  });
  it("Test to get an error", async () => {
    const { getAllCharacters } = useCharacters();
    try {
      renderHook(() => useCharacters());
      const response = await getAllCharacters();
      expect(response).toBe("No debió de ejecutarse correcto");
    } catch (error) {
      const errorMessage =
        "Cannot read properties of undefined (reading 'json')";
      // @ts-expect-error
      expect(error?.message).toBe(errorMessage);
    }
  });
});
