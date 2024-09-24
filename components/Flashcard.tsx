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
      className="border border-black w-1/2 h-1/2 flex flex-col justify-center items-center rounded-md"
    >
      {side === "term" ? (
        <p>{flashcard.term}</p>
      ) : (
        <p>{flashcard.definition}</p>
      )}
    </div>
  );
};

export default Flashcard;
