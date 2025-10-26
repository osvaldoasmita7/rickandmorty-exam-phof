import { useScroll } from "@/hooks";
import { ChevronDownIcon, ChevronUpIcon } from "@primer/octicons-react";
import { CONTAINER_LIST_CHARACTERS } from "@/constants/containers";
import { DirectionTypeEnum } from "@/enums";

interface Props {
  children: React.ReactNode;
}
export const Scroll = ({ children }: Props) => {
  const { DOWN, UP } = DirectionTypeEnum;
  const { scrollContainer } = useScroll(CONTAINER_LIST_CHARACTERS);

  return (
    <section>
      <button
        className="buttons-scroll-vertical-align"
        onClick={() => scrollContainer(UP)}
      >
        <ChevronUpIcon />
      </button>
      <div
        className="characters-container container-size"
        id={CONTAINER_LIST_CHARACTERS}
      >
        {children}
      </div>
      <button
        className="buttons-scroll-vertical-align button-scroll-down"
        onClick={() => scrollContainer(DOWN)}
      >
        <ChevronDownIcon />
      </button>
    </section>
  );
};
