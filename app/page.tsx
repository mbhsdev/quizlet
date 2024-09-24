"use client";

import { Flashcard } from "@/interfaces";
import { useState } from "react";

const Home = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([
    { definition: "A", term: "B" },
    { definition: "C", term: "D" },
    { definition: "E", term: "F" },
  ]);
  const [side, setSide] = useState<"term" | "definition">("term");
  const [currentCard, setCurrentCard] = useState<number>(0);
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl">Quizlet</h1>
      <button
        onClick={() =>
          side === "term" ? setSide("definition") : setSide("term")
        }
      >
        {side}
      </button>
      <h2>{currentCard}</h2>
      {flashcards.map((card) => {
        return (
          <>
            <h2>{card.term}</h2>
            <p>{card.definition}</p>
          </>
        );
      })}
    </div>
  );
};

export default Home;
