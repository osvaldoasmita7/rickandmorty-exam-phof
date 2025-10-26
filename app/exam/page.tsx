"use client";
import { useContext, useEffect } from "react";
import { Character } from "rickmortyapi";

import { CharacterPresentation, Form } from "@/components/exam";
import { CharacterCard } from "@/components/exam/CharacterCard/CharacterCard";
import { InputSearch } from "@/components/exam/General/InputSearch";
import { Scroll } from "@/components/exam/Scroll/Scroll";
import { Logo } from "@/components/exam/General/Logo";

import { CHARACTER_EMPTY } from "@/constants";
import { CharacterContext } from "@/contexts";
import { FavoritesTab } from "@/components/exam/FavoritesTab/FavoritesTab";

const page = () => {
  const { character, getCharacters, characters, loading, resetContext } =
    useContext(CharacterContext);

  useEffect(() => {
    getCharacters();
    // Clean component
    return () => {
      resetContext();
    };
  }, []);

  return (
    <Form>
      <div className="row">
        <div className="flex-1 hidden-sm"></div>
        <Logo />
      </div>
      <div className="flex-container form-display mt-1 margin-sm-0 ">
        <CharacterPresentation {...(character || CHARACTER_EMPTY)} />

        <div className="flex-1 position-relative order-list" id="list">
          <InputSearch />
          <Scroll>
            {characters.map((character: Character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
            {!characters.length && <h1>Characters not found.</h1>}
            {loading && <h1>Loading</h1>}
          </Scroll>
          <FavoritesTab id={"list-fab"} />
        </div>
        <FavoritesTab id={"list-fab-all"} />
      </div>
    </Form>
  );
};

export default page;
