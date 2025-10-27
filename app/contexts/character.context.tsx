"use client";
import React, { createContext, useState, useMemo } from "react";
import {
  Character,
  CharacterFilter,
} from "@/server/dependences/amTesting-master";
import { CHARACTER_EMPTY } from "@/app/constants";
import { CharacterInterfaceContext } from "@/app/interfaces";
import { useCharacters } from "@/app/hooks";

interface Props {
  children: React.ReactNode;
}
const INITIAL_STATE: Character = CHARACTER_EMPTY;

export const CharacterContext = createContext<CharacterInterfaceContext>({
  character: INITIAL_STATE,
  characters: [],
  favorites: [],
  setCharacter: () => {},
  setLoading: () => {},
  resetContext: () => {},
  getCharacters: async (): Promise<void> => {},
  loading: false,
  removeFavorites: () => {},
  addFavorites: () => {},
  nextCharacter: () => {},
  lastCharacter: () => {},
  setCharacters: () => {},
});
export const CharacterProvider = ({ children }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [character, setCharacter] = useState<Character>(INITIAL_STATE);

  const [favorites, setFavorites] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { getAllCharacters } = useCharacters();

  const resetContext = () => {
    setCharacters([]);
    setCharacter(INITIAL_STATE);
    setFavorites([]);
    setLoading(false);
  };
  const getCharacters = async (
    filters?: CharacterFilter | undefined
  ): Promise<void> => {
    setLoading(true);
    try {
      const response = await getAllCharacters(filters);
      setCharacters([...response]);
    } catch (error) {
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };
  const addFavorites = (characterSelected: Character) => {
    const find = favorites.find((x) => x.id === characterSelected.id);
    if (!find) setFavorites((prev) => [...prev, characterSelected]);
  };
  const removeFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((x) => x.id !== id));
  };
  const nextCharacter = () => {
    if (!characters.length) return;
    if (character.id) {
      const index = characters.findIndex((x) => x.id === character.id);
      if (
        index > -1 &&
        index < characters.length &&
        index + 1 <= characters.length - 1
      ) {
        setCharacter(characters[index + 1]);
      }
    } else {
      setCharacter(characters[0]);
    }
  };
  const lastCharacter = () => {
    if (!characters.length) return;
    if (character.id) {
      const index = characters.findIndex((x) => x.id === character.id);
      if (index > -1 && index < characters.length && index - 1 >= 0) {
        setCharacter(characters[index - 1]);
      }
    } else {
      setCharacter(characters[0]);
    }
  };

  const memoizedValue = useMemo(
    () => ({
      character,
      setCharacter,
      loading,
      setLoading,
      getCharacters,
      characters,
      resetContext,
      favorites,
      addFavorites,
      removeFavorites,
      lastCharacter,
      nextCharacter,
      setCharacters,
    }),
    [
      character,
      setCharacter,
      loading,
      setLoading,
      getCharacters,
      characters,
      resetContext,
      favorites,
      addFavorites,
      removeFavorites,
      lastCharacter,
      nextCharacter,
      setCharacters,
    ]
  );

  return (
    <CharacterContext.Provider value={memoizedValue}>
      {children}
    </CharacterContext.Provider>
  );
};
