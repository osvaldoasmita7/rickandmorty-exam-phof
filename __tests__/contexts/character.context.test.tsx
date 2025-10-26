import "@testing-library/jest-dom";

import { renderHook, act, waitFor } from "@testing-library/react";
import { Character } from "rickmortyapi";
import { CHARACTER_EMPTY } from "@/app/constants";
import { CharacterContext, CharacterProvider } from "@/app/contexts";
import { useContext } from "react";

// Mockeamos fetch
global.fetch = jest.fn();
// Mockeamos el hook de useCharacters ya que lo usamos
const mockGetAllCharacters = jest.fn();

jest.mock("../../app/hooks", () => ({
  useCharacters: () => ({
    getAllCharacters: mockGetAllCharacters,
  }),
}));

// Creamos nuestro describe
describe("CharacterProvider context", () => {
  // Limpiamos los mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debe agregar un personaje a favoritos cuando se llama a addFavorites", () => {
    // Renderizamos el contexto para usarlo y pasamos el proveedor original
    const { result } = renderHook(() => useContext(CharacterContext), {
      wrapper: CharacterProvider,
    });

    // Creamos variable de valor para probar
    const characterToAdd: Character = {
      ...CHARACTER_EMPTY,
      id: 1,
      name: "Osvaldo",
    };

    // Con el act forzamos a que se renderee el contexto
    act(() => {
      // Añadimos a favoritos
      result.current.addFavorites(characterToAdd);
    });

    // Verificamos que haya salido bien
    expect(result.current.favorites).toEqual([characterToAdd]);

    // Volvemos a ejecutar para ver que no se haya duplicado
    act(() => {
      result.current.addFavorites(characterToAdd);
    });

    // Verificamos que haya salido bien
    expect(result.current.favorites).toEqual([characterToAdd]);
  });
  test("debe remover un personaje a favoritos cuando se llama a removeFavorites", () => {
    // Renderizamos el contexto para usarlo y pasamos el proveedor original
    const { result } = renderHook(() => useContext(CharacterContext), {
      wrapper: CharacterProvider,
    });

    // Creamos variable de valor para probar
    const characterToAdd: Character = {
      ...CHARACTER_EMPTY,
      id: 1,
      name: "Osvaldo",
    };

    // Con el act forzamos a que se renderee el contexto
    act(() => {
      // Añadimos a favoritos
      result.current.addFavorites(characterToAdd);
      result.current.removeFavorites(characterToAdd.id);
    });

    // Verificamos que haya salido bien
    expect(result.current.favorites).toEqual([]);
  });

  test("debe resetear los valores del contexto", () => {
    // Renderizamos el contexto para usarlo y pasamos el proveedor original
    const { result } = renderHook(() => useContext(CharacterContext), {
      wrapper: CharacterProvider,
    });

    // Con el act forzamos a que se renderee el contexto
    act(() => {
      // Añadimos a favoritos
      result.current.resetContext();
    });

    // Verificamos que haya salido bien
    expect(result.current.favorites).toEqual([]);
    expect(result.current.characters).toEqual([]);
    expect(result.current.character).toEqual(CHARACTER_EMPTY);
    expect(result.current.loading).toEqual(false);
  });
  test("debe retornar el personaje anterior", () => {
    // Renderizamos el contexto para usarlo y pasamos el proveedor original
    const { result } = renderHook(() => useContext(CharacterContext), {
      wrapper: CharacterProvider,
    });
    const list: Character[] = [
      { ...CHARACTER_EMPTY, id: 1, name: "osvaldo" },
      { ...CHARACTER_EMPTY, id: 2, name: "francisco" },
      { ...CHARACTER_EMPTY, id: 3, name: "ponce" },
    ];

    // Probamos cuando no hay personajes
    // Ejecutamos para obtener ya actualizado la lista de los personajes
    act(() => {
      // Ejecuto la función de last character
      result.current.lastCharacter();
    });
    expect(result.current.character).toEqual(CHARACTER_EMPTY);

    // Con el act forzamos a que se renderee el contexto
    act(() => {
      // Añado los personajes
      result.current.setCharacters(list);
    });

    // Verificamos que haya salido bien
    expect(result.current.characters).toEqual(list);

    // Ejecutamos para obtener ya actualizado la lista de los personajes
    // Volvemos a ejecutar el anterior porque ya existe el personaje para tomar la rama del if
    act(() => {
      // Ejecuto la función de last character
      result.current.lastCharacter();
    });
    expect(result.current.character).toEqual(list[0]);

    // Seteamos otro personaje diferente
    act(() => {
      // Ejecuto la función de last character
      result.current.setCharacter(list[2]);
    });
    expect(result.current.character).toEqual(list[2]);

    // Volvemos a ejecutar el anterior porque ya existe el personaje para tomar la rama del if
    act(() => {
      // Ejecuto la función de last character
      result.current.lastCharacter();
    });
    expect(result.current.character).toEqual(list[1]);

    // Volvemos a ejecutar el anterior porque ya existe el personaje para ver que sea el último
    act(() => {
      // Ejecuto la función de last character
      result.current.lastCharacter();
    });
    expect(result.current.character).toEqual(list[0]);

    // Volvemos a ejecutar el anterior porque ya existe el personaje para ver que sea siga siendo el último
    act(() => {
      // Ejecuto la función de last character
      result.current.lastCharacter();
    });
    expect(result.current.character).toEqual(list[0]);
  });

  test("debe retornar el personaje siguiente", () => {
    // Renderizamos el contexto para usarlo y pasamos el proveedor original
    const { result } = renderHook(() => useContext(CharacterContext), {
      wrapper: CharacterProvider,
    });
    const list: Character[] = [
      { ...CHARACTER_EMPTY, id: 1, name: "osvaldo" },
      { ...CHARACTER_EMPTY, id: 2, name: "francisco" },
      { ...CHARACTER_EMPTY, id: 3, name: "ponce" },
    ];

    // Probamos cuando no hay personajes
    // Ejecutamos para obtener ya actualizado la lista de los personajes
    act(() => {
      // Ejecuto la función de last character
      result.current.nextCharacter();
    });
    expect(result.current.character).toEqual(CHARACTER_EMPTY);

    // Con el act forzamos a que se renderee el contexto
    act(() => {
      // Añado los personajes
      result.current.setCharacters(list);
    });

    // Verificamos que haya salido bien
    expect(result.current.characters).toEqual(list);

    // Ejecutamos para obtener ya actualizado la lista de los personajes
    // Volvemos a ejecutar el anterior porque ya existe el personaje para tomar la rama del if
    act(() => {
      // Ejecuto la función de last character
      result.current.nextCharacter();
    });
    expect(result.current.character).toEqual(list[0]);

    // Volvemos a ejecutar el anterior porque ya existe el personaje para tomar la rama del if
    act(() => {
      // Ejecuto la función de last character
      result.current.nextCharacter();
    });
    expect(result.current.character).toEqual(list[1]);

    // Volvemos a ejecutar el anterior porque ya existe el personaje dos
    act(() => {
      // Ejecuto la función de last character
      result.current.nextCharacter();
    });
    expect(result.current.character).toEqual(list[2]);
    // Volvemos a ejecutar el anterior porque ya existe el personaje para que siga siendo el último
    act(() => {
      // Ejecuto la función de last character
      result.current.nextCharacter();
    });
    expect(result.current.character).toEqual(list[2]);
  });
  test("debe retornar todos los personajes", async () => {
    // Renderizamos el contexto para usarlo y pasamos el proveedor original
    const { result } = renderHook(() => useContext(CharacterContext), {
      wrapper: CharacterProvider,
    });
    const list: Character[] = [
      { ...CHARACTER_EMPTY, id: 1, name: "osvaldo" },
      { ...CHARACTER_EMPTY, id: 2, name: "francisco" },
      { ...CHARACTER_EMPTY, id: 3, name: "ponce" },
    ];
    const mockResponse = {
      data: {
        results: list,
      },
    };
    //
    mockGetAllCharacters.mockResolvedValueOnce(list);
    // Configurar el mock de fetch para simular una respuesta exitosa
    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    // Ejecutamos la función
    await act(async () => {
      // Ejecuto la función de last character
      await result.current.getCharacters();
    });

    await waitFor(() => {
      expect(result.current.characters).toEqual(list);
    });
    expect(mockGetAllCharacters).toHaveBeenCalledTimes(1);
  });
  test("debe retornar un error al traer personajes", async () => {
    // Renderizamos el contexto para usarlo y pasamos el proveedor original
    const { result } = renderHook(() => useContext(CharacterContext), {
      wrapper: CharacterProvider,
    });
    // Ejecutamos la función
    await act(async () => {
      // Ejecuto la función de last character
      await result.current.getCharacters();
    });

    await waitFor(() => {
      expect(result.current.characters).toEqual([]);
    });
    expect(mockGetAllCharacters).toHaveBeenCalledTimes(1);
  });
});
