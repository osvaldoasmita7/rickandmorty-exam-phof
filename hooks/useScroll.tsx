import { BEHAVIOR } from "@/constants";
import { DirectionTypeEnum } from "@/enums";
import { directionType } from "@/types";

export const useScroll = (id: string) => {
  const pixelsByClick = 150;
  const scrollContainer = (direction: directionType) => {
    const container = document.getElementById(id);
    if (!container) return;
    const scrollAmount = pixelsByClick;
    container.scrollBy({
      top: direction === DirectionTypeEnum.UP ? -scrollAmount : scrollAmount,
      behavior: BEHAVIOR,
    });
  };
  return { scrollContainer };
};
