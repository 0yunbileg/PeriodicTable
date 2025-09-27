import React from "react";
import Image from "next/image";

export const Features = [
  {
    id: 1,
    title: "Visual Insights",
    description:
      "Interactive color-coding highlights groups, periods, and element types.",
    image: "/images/discover/atom.jpg",
  },
  {
    id: 2,
    title: "Comprehensive Data",
    description:
      "Each element includes key information like atomic number, symbol, electron configuration, and physical properties.",
    image: "/images/discover/graph.jpg",
  },
  {
    id: 3,
    title: "Real-world Applications",
    description:
      "Learn how each element is used in everyday life, industry, and cutting-edge science.",
    image: "/images/discover/plant.jpg",
  },
];

const Discover = () => {
  return (
    <div className="container relative text-white">
      <h1 className="text-3xl font-bold text-center">Discover the Elements</h1>
      <div className="flex flex-col md:flex-row mt-[32px] gap-[40px]">
        <div className="w-full flex flex-col gap-[40px] my-auto">
          {Features.map((feature) => (
            <div
              key={feature.id}
              className={
                feature.id === 2
                  ? `fromLeftScrollAnimation flex items-center rounded-md gap-4`
                  : `fromRightScrollAnimation flex items-center rounded-md gap-4`
              }
              style={{
                flexDirection: feature.id === 2 ? "row-reverse" : "row",
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div style={{ textAlign: feature.id === 2 ? "right" : "left" }}>
                <h2 className="text-xl font-semibold">{feature.title}</h2>
                <p className="text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-full flex justify-center md:justify-end">
          <Image
            className="rounded-2xl"
            src="/images/discover/man-studying.jpg"
            alt="man studying elements"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
