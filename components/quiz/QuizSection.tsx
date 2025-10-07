"use client";

import React, { useState, useMemo, useRef } from "react";

interface QuizSectionPrompt {
  questions: { question: string; options: string[]; answer: string }[];
}

const QuizSection = ({ questions }: QuizSectionPrompt) => {
  const [retryKey, setRetryKey] = useState(0);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const correctSound = useRef<HTMLAudioElement | null>(null);
  const wrongSound = useRef<HTMLAudioElement | null>(null);

  const randomQuestions = useMemo(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, [questions, retryKey]);

  const question = randomQuestions[current];

  function handleAnswer(option: string) {
    setSelected(option);

    if (option === question.answer) {
      setScore((s) => s + 1);
      correctSound.current?.play();
    } else {
      wrongSound.current?.play();
    }

    setTimeout(() => {
      if (current + 1 < randomQuestions.length) {
        setCurrent((c) => c + 1);
        setSelected("");
      } else {
        setFinished(true);
      }
    }, 700);
  }

  function handleRetry() {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setFinished(false);
    setRetryKey((k) => k + 1);
  }

  if (finished) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold mb-4">Quiz finished!</h2>
        <p className="text-lg">
          You scored {score} / {randomQuestions.length}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-[#b4e55c] !rounded-lg hover:bg-[#8fe64a] transition"
          onClick={handleRetry}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-sm md:w-md mx-auto p-6 rounded-2xl shadow-lg bg-white/20 backdrop-blur">
      <audio ref={correctSound} src="/audios/correct.mp3" preload="auto" />
      <audio ref={wrongSound} src="/audios/wrong.mp3" preload="auto" />
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className={`w-full p-3 !rounded-lg transition
            ${
              selected
                ? option === question.answer
                  ? "bg-[#8fe64a] text-black"
                  : option === selected
                  ? "bg-[#f77f7f] text-white"
                  : "bg-gray-200 text-black"
                : "bg-[#b4e55c] hover:bg-gray-200  text-black"
            }`}
            disabled={!!selected}
          >
            {option}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-300">
        Question {current + 1} / {randomQuestions.length}
      </p>
    </div>
  );
};

export default QuizSection;
