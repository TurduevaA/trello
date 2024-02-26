import React, { useState } from "react";
import { Button } from "./ui/Button";
import { TrelloForm } from "./TrelloForm";

export const TrelloColumn = () => {
  const [column, setColumn] = useState(false);
  const handleButtonColumn = () => {
    setColumn(true);
  };
  return (
    <div>
      {column ? (
        <TrelloForm />
      ) : (
        // <div>
        <Button onClick={handleButtonColumn}>Добавьте еще одну колонку</Button>
        // {/* </div> */}
      )}
    </div>
  );
};
