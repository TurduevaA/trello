import { DescriptionItem } from "./DescriptionItem";
import { TrelloListItem } from "./ui/TrelloListItem";

export const TrelloItem = ({ id, description }) => {
  return (
    <div>
      {description.map((item) => (
        <DescriptionItem key={item.id} {...item} />
      ))}
      <TrelloListItem id={id} />
    </div>
  );
};
