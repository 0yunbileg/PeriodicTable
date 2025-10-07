"use client";
import { useState } from "react";
import QuizSection from "@/components/quiz/QuizSection";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { questions } from "@/public/quiz/questions";

export default function Quiz() {
  const [key, setKey] = useState("easy");

  return (
    <div className="container p-4 max-w-[50vw] flex justify-center">
      <div className="max-w-md mt-[65px]">
        <style>
          {`
            /* Active tab background and remove border */
            .nav-tabs .nav-link.active {
              background-color: #8fe64a !important;
              color: black !important;
            }

            /* Inactive tab text color */
            .nav-tabs .nav-link {
              color: #8fe64a !important;
            }
          `}
        </style>

        <Tabs
          id=""
          fill
          activeKey={key}
          onSelect={(k) => k && setKey(k)}
          className="mb-3"
        >
          <Tab className="mt-[40px]" eventKey="easy" title="Easy">
            <QuizSection questions={questions.easy} />
          </Tab>
          <Tab className="mt-[40px]" eventKey="medium" title="Medium">
            <QuizSection questions={questions.medium} />
          </Tab>
          <Tab className="mt-[40px]" eventKey="hard" title="Hard">
            <QuizSection questions={questions.hard} />
          </Tab>
          <Tab className="mt-[40px]" eventKey="advanced" title="Harder">
            <QuizSection questions={questions.advanced} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
