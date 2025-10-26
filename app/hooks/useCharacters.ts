import { CharacterFilter } from "rickmortyapi";
import { API } from "@/app/constants";

export const useCharacters = () => {
  function toQueryParams(filters?: CharacterFilter): string {
    if (!filters) return "";

    const queryObj: Record<string, string> = {};

    for (const [key, value] of Object.entries(filters)) {
      if (value !== undefined && value !== null) {
        queryObj[key] = String(value); // convertir número a string
      }
    }

    return new URLSearchParams(queryObj).toString();
  }
  const getAllCharacters = async (filters?: CharacterFilter | undefined) => {
    try {
      debugger;
      const params = toQueryParams(filters);
      const url = `${API}/characters?${params}`;
      const res = await fetch(url);
      const response = await res.json();
      debugger;
      return response?.data?.results || [];
    } catch (error) {
      throw error;
    }
  };

  return { getAllCharacters };
};
