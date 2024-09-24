import { Flashcard } from "@/interfaces";
import { useState } from "react";

const Home = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>();
  return <h1>Quizlet</h1>;
};

export default Home;
