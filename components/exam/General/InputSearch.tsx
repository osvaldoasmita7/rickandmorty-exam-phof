import { CharacterContext } from "@/contexts";
import { SearchIcon } from "@primer/octicons-react";
import { useContext } from "react";

export const InputSearch = () => {
  const { getCharacters } = useContext(CharacterContext);
  const searchCharacters = (name: string) => getCharacters({ name });

  return (
    <div className="row content-center h-10 h-sm-auto margin-vertical-30 margin-vertical-sm-1">
      <div className="search-box">
        <SearchIcon />
        <input
          type="text"
          placeholder="Find your character..."
          onKeyDown={(event) => searchCharacters(event.currentTarget.value)}
        />
      </div>
    </div>
  );
};
