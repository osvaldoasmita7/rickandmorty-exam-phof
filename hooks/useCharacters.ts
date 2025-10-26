import { getCharacters, getCharacter, CharacterFilter } from "rickmortyapi";

import { SUCCESS_CODE } from "@/constants/general";

export const useCharacters = () => {
  const getAllCharacters = async (filters?: CharacterFilter | undefined) => {
    try {
      const response = await getCharacters(filters);
      return response?.data?.results || [];
    } catch (error) {
      throw error;
    }
  };
  const getOneCharacter = async (id: number) => {
    try {
      const resp = await getCharacter(id);
      if (resp.status === SUCCESS_CODE && resp.data) return resp.data;
      return null;
    } catch (error) {
      throw error;
    }
  };
  return { getAllCharacters, getOneCharacter };
};
