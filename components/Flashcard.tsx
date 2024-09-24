import { FlashcardType } from "@/interfaces";

const Flashcard = ({
  flashcard,
  side,
  setSide,
}: {
  flashcard: FlashcardType;
  side: "term" | "definition";
  setSide: (side: "term" | "definition") => void;
}) => {
  return (
    <div
      onClick={() =>
        side === "term" ? setSide("definition") : setSide("term")
      }
    >
      {side === "term" ? (
        <h2>{flashcard.term}</h2>
      ) : (
        <p>{flashcard.definition}</p>
      )}
    </div>
  );
};

export default Flashcard;
