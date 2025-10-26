import { useContext } from "react";
import { CharacterContext } from "@/contexts";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

export const ChangeCharacters = () => {
  const { nextCharacter, lastCharacter } = useContext(CharacterContext);
  return (
    <div id="buttons-next">
      <button
        className="buttons-scroll-horizontal-align"
        onClick={() => lastCharacter()}
        style={{ zIndex: 1111 }}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className="buttons-scroll-horizontal-align-rigth"
        style={{ zIndex: 1111 }}
        onClick={() => nextCharacter()}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};
