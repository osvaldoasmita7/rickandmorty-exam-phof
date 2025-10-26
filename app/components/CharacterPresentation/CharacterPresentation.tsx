import Image from "next/image";
import { Character } from "rickmortyapi";

import {
  DataPresentation,
  StatusCharacter,
} from "@/app/components/CharacterPresentation/";
import { ChangeCharacters } from "@/app/components/ChangeCharacters/";

import { CHARACTER_EMPTY, IMAGE } from "@/app/constants";

interface Props {
  character: Character | null | undefined;
}
export const CharacterPresentation = ({ character }: Props) => {
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
        <DataPresentation character={character || CHARACTER_EMPTY} />
      </div>
    </div>
  );
};
