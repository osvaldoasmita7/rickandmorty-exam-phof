import Image from "next/image";
import { Character } from "rickmortyapi";

import { CHARACTER_EMPTY, IMAGE } from "@/constants";

import { DataPresentation } from "./DataPresentation";
import { StatusCharacter } from "./StatusCharacter";
import { ChangeCharacters } from "../ChangeCharacters/ChangeCharacters";

export const CharacterPresentation = (
  character: Character | null | undefined
) => {
  return (
    <div className="flex-1 relative-container order-card margin-0 margin-sm-n1  ">
      <ChangeCharacters />
      <Image
        src={character?.image || IMAGE}
        alt={`image_${character?.name}`}
        layout="fill"
        objectFit="cover"
        className="image-presentation"
      ></Image>

      <div className="content-overlay row-reverse">
        <StatusCharacter status={character?.status} />
        <DataPresentation {...(character || CHARACTER_EMPTY)} />
      </div>
    </div>
  );
};
