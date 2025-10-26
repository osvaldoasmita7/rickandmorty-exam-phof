import { BEHAVIOR } from "@/app/constants";
import { DirectionTypeEnum } from "@/app/enums";
import { directionType } from "@/app/types";

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
