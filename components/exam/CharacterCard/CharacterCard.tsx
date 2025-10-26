import Image from "next/image";
import { Character } from "rickmortyapi";
import { LikeButton } from "../General/LikeButton";
import { IMAGE } from "@/constants";
import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "@/contexts";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  const [liked, setLiked] = useState(false);
  const { setCharacter, addFavorites, removeFavorites, favorites } =
    useContext(CharacterContext);
  const { id, name, image } = character;
  const changeCharacter = () => setCharacter(character);
  const changeLikeState = (like: boolean = false) => {
    if (!!like) addFavorites(character);
    else removeFavorites(character.id);
    setLiked(like);
  };

  return (
    <div key={id} className="character-card" onClick={changeCharacter}>
      <h1 className="text-in-line">{name}</h1>
      <Image
        width={100}
        height={100}
        src={image || IMAGE}
        alt={`image_${name}`}
        className="margin-image-card"
      ></Image>
      <LikeButton isLiked={liked} onClick={changeLikeState} />
    </div>
  );
};
