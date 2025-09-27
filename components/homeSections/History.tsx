"use client";
import React from "react";
import { Calendar, Award, Star } from "lucide-react";
import Image from "next/image";

const timelineData = [
  {
    id: 1,
    title: "Early Attempts",
    period: "1800–1860s",
    icon: Calendar,
    points: [
      "Scientists like Dmitri Dobereiner grouped elements into “triads” based on properties.",
      "John Newlands (1864) proposed the Law of Octaves, noting patterns every 8 elements.",
    ],
    image: "/images/periodic-tables/pt1.png",
  },
  {
    id: 2,
    title: "Mendeleev’s Breakthrough",
    period: "1869",
    icon: Award,
    points: [
      "First systematic, predictive periodic table.",
      "Organized elements by atomic mass with periodic trends in chemical properties.",
    ],
    image: "/images/periodic-tables/pt2.png",
  },
  {
    id: 3,
    title: "Modern Table",
    period: "1913–1950s",
    icon: Star,
    points: [
      "Henry Moseley (1913) reordered elements by atomic number, resolving inconsistencies.",
      "Discovery of noble gases (1890s) and actinides/lanthanides expanded the table.",
      "The modern table now has 7 periods and 18 groups, including synthetic elements like Oganesson (Og, 118).",
    ],
    image: "/images/periodic-tables/pt3.webp",
  },
];

const History = () => {
  return (
    <div className="container text-white">
      <h1 className="text-3xl font-bold text-center mb-8">
        History of the Periodic Table
      </h1>
      <div className="flex flex-col space-y-8 mt-[32px]">
        {timelineData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              className="scaleScrollAnimation flex justify-between"
              key={item.id}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="bg-[#8FE64A] p-3 rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent size={24} color="#000000" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-[#8FE64A]">
                    {item.title}
                  </h3>
                  <span className="text-gray-300 italic text-sm">
                    {item.period}
                  </span>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-white">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="justify-end w-1/3 hidden md:flex">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg mt-4 md:mt-0"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
