import { Dispatch, SetStateAction } from "react";
import { Character, CharacterFilter } from "rickmortyapi";

export interface CharacterPresentationCardPropsInterface {
  character: Character | null | undefined;
}
export interface CharacterInterfaceContext {
  character: Character;
  characters: Character[];
  favorites: Character[];
  setCharacter: Dispatch<SetStateAction<Character>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  getCharacters: (filters?: CharacterFilter | undefined) => Promise<void>;
  getCharacter: (id: number) => Promise<void>;
  resetContext: () => void;
  removeFavorites: (id: number) => void;
  addFavorites: (characterSelected: Character) => void;
  nextCharacter: () => void;
  lastCharacter: () => void;
}
