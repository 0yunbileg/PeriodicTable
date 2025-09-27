"use client";
import React from "react";
import { ExternalLink } from "lucide-react"; // optional icon for links

const newsData = [
  {
    id: 1,
    year: 2023,
    description:
      "Scientists confirmed new isotopes of superheavy elements, expanding research on the “island of stability.”",
    link: "https://www.nature.com/articles/d41586-023-00123-4",
  },
  {
    id: 2,
    year: 2022,
    description:
      "Research shows Carbon-based materials like graphene may revolutionize electronics and energy storage.",
    link: "https://www.science.org/graphene-research",
  },
  {
    id: 3,
    year: 2021,
    description:
      "Nobel Prize awarded for advances in quantum chemistry, helping predict properties of unknown elements.",
    link: "https://www.nobelprize.org/prizes/chemistry/2021/summary/",
  },
  {
    id: 4,
    year: "Ongoing",
    description:
      "Educational platforms now integrate interactive 3D periodic tables, helping students explore trends visually.",
    link: null,
  },
];

const LatestNews = () => {
  return (
    <div className="container mx-auto my-12 px-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#8FE64A]">
        Latest News & Discoveries
      </h1>
      <div className="flex flex-col mt-[32px] gap-[20px]">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="scaleScrollAnimation p-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[#8FE64A] font-bold text-lg">
                {news.year}
              </span>
              {news.link && (
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-[#8FE64A] hover:text-[#DFFF9C] transition-colors"
                >
                  Source <ExternalLink size={14} className="ml-1" />
                </a>
              )}
            </div>
            <p className="text-white">{news.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 italic text-white/70 text-center">
        Fun Fact: Despite being over <strong>150 years old</strong>, the
        periodic table remains a living document, with new elements synthesized
        and discoveries constantly refining our understanding of matter.
      </p>
    </div>
  );
};

export default LatestNews;
