import CircleButton from "@/components/CircleButton";
import Flashcard from "@/components/Flashcard";
import SubmitButton from "@/components/SubmitButton";
import TextField from "@/components/TextField";
import { FlashcardType } from "@/interfaces";
import { useState } from "react";

const Home = () => {
  return (
    <div className="px-4 py-8 h-screen">
      <h1 className="text-4xl">Quizlet Clone</h1>
      <p className="mb-8">MBHS Dev Club Tutorial</p>
    </div>
  );
};

export default Home;
