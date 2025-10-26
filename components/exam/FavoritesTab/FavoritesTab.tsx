import { CharacterContext } from "@/contexts";
import { useContext } from "react";
interface Props {
  id: string;
}
export const FavoritesTab = ({ id }: Props) => {
  const { favorites } = useContext(CharacterContext);
  return (
    <div style={{ flex: 1, display: "grid" }} id={id}>
      <div className="fav-tab dropdown">
        <div className="dropdown-content">
          {favorites.map((fav) => (
            <div
              key={fav.id}
              className="text-in-line"
              style={{
                backgroundColor: "#9C9C9C",
                marginBottom: 2,
                width: "100%",
              }}
            >
              {fav?.name}
            </div>
          ))}
          {!favorites.length && (
            <div
              className="text-in-line"
              style={{
                backgroundColor: "#9C9C9C",
                marginBottom: 2,
                width: "100%",
              }}
            >
              Not favorites
            </div>
          )}
        </div>
        <div id="title-dropdown">FAVS</div>
      </div>
    </div>
  );
};
