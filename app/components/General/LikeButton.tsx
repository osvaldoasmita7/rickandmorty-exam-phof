import { HeartIcon } from "@primer/octicons-react";
interface PropsInterface {
  isLiked: boolean;
  onClick: (like?: boolean) => void;
}
export const LikeButton = ({ isLiked = false, onClick }: PropsInterface) => {
  const isLikeActive = () => (isLiked ? "like" : "unlike");
  return (
    <div className="content-center">
      <div className="row" onClick={() => onClick(!isLiked)}>
        <HeartIcon key="heart" className={`heart-icon-${isLikeActive()}`} />
        <span className="margin-text-like text-like">{isLikeActive()}</span>
      </div>
    </div>
  );
};
