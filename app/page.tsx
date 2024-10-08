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
      <h1 className="text-4xl">Quizlet Clone</h1>
      <p className="mb-8">MBHS Dev Club Tutorial</p>
      {flashcards.length > 0 && (
        <>
          <Flashcard
            flashcard={flashcards[currentCard]}
            side={side}
            setSide={setSide}
          />
          <div className="flex flex-row justify-between w-1/2 mt-8">
            <CircleButton
              onClick={() => {
                console.log("Left");
                if (currentCard > 0) setCurrentCard(currentCard - 1);
              }}
              text="<"
            />
            <p>Card: {currentCard}</p>
            <CircleButton
              onClick={() => {
                console.log("Right");
                if (currentCard < flashcards.length - 1)
                  setCurrentCard(currentCard + 1);
              }}
              text=">"
            />
          </div>
        </>
      )}

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
        className="mt-8"
      >
        <h2 className="text-lg mb-2">Add New Card</h2>
        <div className="flex items-center justify-between w-[500px] mb-2">
          <h3>Term</h3>
          <TextField field={term} setField={setTerm} />
        </div>
        <div className="flex items-center justify-between w-[500px] mb-2">
          <h3>Definition</h3>
          <TextField field={definition} setField={setDefinition} />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default Home;
