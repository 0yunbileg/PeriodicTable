"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="container mt-[60px] relative text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore the Universe
          </h1>
          <p className="text-lg mb-8">
            Discover the building blocks of the universe with our interactive
            Periodic Table. Learn properties, uses, and fun facts — all in one
            place.
          </p>
          <button
            className="p-3 !border-none bg-[#8FE64A] hover:bg-[#7ED957] hover:scale-108 transition !rounded-full font-semibold"
            onClick={() => router.push("/periodic-table")}
          >
            Start Exploring
          </button>
        </div>

        {/* Right Video */}
        <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0 rounded-xl shadow-lg"
            src="https://www.youtube-nocookie.com/embed/8Are9dDbW24?autoplay=1&mute=1&controls=0&start=93&loop=1&playlist=8Are9dDbW24"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
