"use client";

import CircleButton from "@/components/CircleButton";
import Flashcard from "@/components/Flashcard";
import SubmitButton from "@/components/SubmitButton";
import TextField from "@/components/TextField";
import { FlashcardType } from "@/interfaces";
import { useState } from "react";

const Home = () => {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);
  const [side, setSide] = useState<"term" | "definition">("term");
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [term, setTerm] = useState<string>("");
  const [definition, setDefinition] = useState<string>("");
  return (
    <div className="px-4 py-8 h-screen">
      <h1 className="text-2xl">Quizlet</h1>
      {flashcards.length > 0 && (
        <Flashcard
          flashcard={flashcards[currentCard]}
          side={side}
          setSide={setSide}
        />
      )}
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFlashcards([
            ...flashcards,
            { definition: definition, term: term },
          ]);
          setTerm("");
          setDefinition("");
        }}
      >
        <TextField field={term} setField={setTerm} />
        <TextField field={definition} setField={setDefinition} />
        <SubmitButton />
      </form>
    </div>
  );
};

export default Home;
