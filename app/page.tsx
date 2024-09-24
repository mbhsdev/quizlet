"use client";

import CircleButton from "@/components/CircleButton";
import Flashcard from "@/components/Flashcard";
import { FlashcardType } from "@/interfaces";
import { useState } from "react";

const Home = () => {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([
    { definition: "A", term: "B" },
    { definition: "C", term: "D" },
    { definition: "E", term: "F" },
  ]);
  const [side, setSide] = useState<"term" | "definition">("term");
  const [currentCard, setCurrentCard] = useState<number>(0);
  return (
    <div className="px-4 py-8 h-screen">
      <h1 className="text-2xl">Quizlet</h1>
      <h2>{currentCard}</h2>
      <Flashcard
        flashcard={flashcards[currentCard]}
        side={side}
        setSide={setSide}
      />
      <div className="flex flex-row justify-between">
        <CircleButton
          onClick={() => {
            console.log("Left");
            if (currentCard > 0) setCurrentCard(currentCard - 1);
          }}
          text="<"
        />
        <CircleButton
          onClick={() => {
            console.log("Right");
            if (currentCard < flashcards.length - 1)
              setCurrentCard(currentCard + 1);
          }}
          text=">"
        />
      </div>
    </div>
  );
};

export default Home;
