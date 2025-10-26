import { Character } from "rickmortyapi";

import { NO_DATA_CHARACTER_ENUM } from "@/constants";

export const DataPresentation = ({
  gender,
  location,
  name,
  origin,
  type,
  episode,
  id,
  species,
}: Character) => {
  return (
    <div className="data-character" id={String(id)}>
      <h1>{name || NO_DATA_CHARACTER_ENUM.name}</h1>
      <h2>{type}</h2>
      <h2>{species}</h2>

      <div className="row text-center mt-1">
        <div className="flex-1">
          <h1>Origin</h1>
          <h2>{origin?.name || NO_DATA_CHARACTER_ENUM.origin}</h2>
        </div>
        <div className="flex-1">
          <h1>Location</h1>
          <h2>{location?.name || NO_DATA_CHARACTER_ENUM.location}</h2>
        </div>
        <div className="flex-1">
          <h1>Gender</h1>
          <h2>{gender || NO_DATA_CHARACTER_ENUM.gender}</h2>
        </div>
        <div className="flex-1">
          <h1>Episodes</h1>
          <h2>{episode?.length}</h2>
        </div>
      </div>
    </div>
  );
};
