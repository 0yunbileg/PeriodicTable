"use client";
import React from "react";
import { Box, Zap, Star, Cloud, Sun, Moon } from "lucide-react";

const Facts = [
  {
    id: 1,
    element: "Gold (Au)",
    fact: "is so dense that 1 cubic foot weighs ~1,206 lbs (~547 kg).",
    icon: "Star",
  },
  {
    id: 2,
    element: "Oxygen (O)",
    fact: "makes up 21% of Earth’s atmosphere.",
    icon: "Cloud",
  },
  {
    id: 3,
    element: "Hydrogen (H)",
    fact: "is the most abundant element in the universe.",
    icon: "Zap",
  },
  {
    id: 4,
    element: "Carbon (C)",
    fact: "is the basis for all known life on Earth.",
    icon: "Box",
  },
  {
    id: 5,
    element: "Helium (He)",
    fact: "is the second most abundant element in the universe.",
    icon: "Sun",
  },
  {
    id: 6,
    element: "Iron (Fe)",
    fact: "is the most common element on Earth by mass.",
    icon: "Moon",
  },
];

const iconMap: { [key: string]: React.FC<{ size?: number; color?: string }> } =
  {
    Box,
    Zap,
    Star,
    Cloud,
    Sun,
    Moon,
  };

const FunFacts = () => {
  return (
    <div className="container relative text-white">
      <h1 className="text-3xl font-bold text-center">
        Fun Facts about the Elements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[32px]">
        {Facts.map((fact) => {
          const IconComponent = iconMap[fact.icon];
          return (
            <div
              key={fact.id}
              className="scaleScrollAnimation flex flex-col items-center p-4 border border-white rounded-md text-center gap-2"
            >
              <IconComponent size={48} color="#8FE64A" />
              <p className="text-white">
                <span className="font-bold">{fact.element}</span> {fact.fact}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FunFacts;
