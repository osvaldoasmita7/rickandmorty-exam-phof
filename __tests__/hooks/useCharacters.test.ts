import "@testing-library/jest-dom";

import { renderHook } from "@testing-library/react";
import { useCharacters } from "@/app/hooks/useCharacters";
global.fetch = jest.fn();
describe("Test para el hook de useCharacters", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Debe de obtener un personaje con un parámetro", async () => {
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
  it("Debe de obtener personajes", async () => {
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
  it("Debe de traer vacio el arreglo de personajes", async () => {
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
  it("Debe de dar un error", async () => {
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
