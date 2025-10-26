import { useContext } from "react";
import { CharacterContext } from "@/app/contexts";
import { SearchIcon } from "@primer/octicons-react";

export const InputSearch = () => {
  const { getCharacters } = useContext(CharacterContext);
  const searchCharacters = (name: string) => getCharacters({ name });

  return (
    <div className="row content-center h-10 h-sm-auto margin-vertical-30 margin-vertical-sm-1">
      <div className="search-box">
        <SearchIcon />
        <input
          id="search"
          data-testid="search"
          type="text"
          placeholder="Find your character..."
          onChange={(event) => searchCharacters(event.currentTarget.value)}
        />
      </div>
    </div>
  );
};
