"use client";
import React from "react";
import Image from "next/image";
import { Award } from "lucide-react"; // optional icon

const Mendeleev = () => {
  return (
    <div className="container mx-auto my-12 px-4 flex flex-col md:flex-row items-center gap-8 text-white">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <Image
          className="rounded-2xl shadow-lg"
          src="/images/mendeleev/Mendeleev.webp"
          alt="Dmitri Mendeleev"
          width={500}
          height={500}
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 max-w-lg scaleScrollAnimation">
        <h2 className="flex items-center text-3xl font-bold mb-4">
          <Award className="mr-2 text-[#8FE64A]" size={32} /> Who Invented the
          Periodic Table
        </h2>

        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Dmitri Mendeleev (1834–1907)</strong> created the first
            widely recognized periodic table in{" "}
            <span className="text-[#8FE64A]">1869</span>.
          </li>
          <li>
            Arranged <strong>63 known elements</strong> by{" "}
            <strong>atomic mass</strong>, spotting patterns in their properties.
          </li>
          <li>
            Predicted undiscovered elements like <strong>Gallium</strong> and{" "}
            <strong>Germanium</strong> accurately.
          </li>
        </ul>

        <p className="mt-4 italic bg-white/10 p-3 rounded-md text-[#8FE64A]">
          Fun Fact: Mendeleev initially used <strong>cardboard cards</strong> to
          arrange elements.
        </p>
      </div>
    </div>
  );
};

export default Mendeleev;
