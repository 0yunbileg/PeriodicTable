"use client";
import React from "react";
import Image from "next/image";

interface Element {
  name: string;
  appearance?: string;
  atomic_mass: number;
  boil?: number;
  category: string;
  density?: number;
  discovered_by?: string;
  melt?: number;
  molar_heat?: number;
  named_by?: string;
  number: number;
  period: number;
  group?: number;
  phase: string;
  source: string;
  bohr_model_image?: string;
  bohr_model_3d?: string;
  spectral_img?: string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  wxpos?: number;
  wypos?: number;
  shells: number[];
  electron_configuration: string;
  electron_configuration_semantic: string;
  electron_affinity?: number;
  electronegativity_pauling?: number;
  ionization_energies: number[];
  "cpk-hex"?: string;
  image?: {
    title: string;
    url: string;
    attribution: string;
  };
}

interface Props {
  selectedElement: Element | null;
  onClose: () => void;
}

const Details: React.FC<Props> = ({ selectedElement, onClose }) => {
  return (
    <div className="hidden lg:flex flex-col w-96 p-6 bg-black/70 backdrop-blur-md text-white shadow-[0_0_30px_rgba(143,230,74,0.4)] rounded-2xl m-4 mt-5">
      {selectedElement && (
        <>
          {/* Symbol + Atomic Number */}
          <div className="!font-bold text-[#8FE64A] flex items-center justify-between mb-4">
            <div>
              <h2 className="text-4xl font-extrabold text-[#8FE64A]">
                {selectedElement.symbol}
              </h2>
              <p className="text-sm opacity-80">#{selectedElement.number}</p>
            </div>

            {/* Bohr Model */}
            {selectedElement.bohr_model_image && (
              <Image
                src={selectedElement.bohr_model_image}
                alt={`${selectedElement.name} Bohr model`}
                width={80}
                height={80}
                className="rounded-lg shadow-md"
              />
            )}
          </div>

          {/* Real Element Image */}
          {selectedElement.image?.url && (
            <div className="mb-4 flex flex-col items-center">
              <Image
                src={selectedElement.image.url}
                alt={selectedElement.image.title || selectedElement.name}
                width={160}
                height={160}
                className="rounded-xl shadow-lg object-contain"
              />
              {selectedElement.image.attribution && (
                <p className="mt-2 text-xs text-gray-400 text-center">
                  {selectedElement.image.attribution}
                </p>
              )}
            </div>
          )}

          {/* Info */}
          <h3 className="text-xl font-semibold mb-2">{selectedElement.name}</h3>
          <p className="text-sm italic opacity-80 mb-4">
            {selectedElement.category}
          </p>

          <div className="space-y-1 text-sm">
            <p>
              <strong className="text-[#8FE64A]">Atomic Mass:</strong>{" "}
              {selectedElement.atomic_mass}
            </p>
            <p>
              <strong className="text-[#8FE64A]">
                Electron Configuration:
              </strong>{" "}
              {selectedElement.electron_configuration}
            </p>
          </div>

          {/* Summary */}
          <p className="mt-4 text-sm leading-relaxed">
            {selectedElement.summary}
          </p>

          <div className="flex w-full justify-between items-center">
            {/* Source */}
            {selectedElement.source && (
              <a
                href={selectedElement.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[#8FE64A] hover:underline text-sm"
              >
                Learn more ↗
              </a>
            )}

            <button
              className="self-end mb-2 px-3 py-1 text-sm !rounded-full bg-[#8FE64A] text-black font-semibold hover:bg-[#7ED957] transition"
              onClick={onClose}
            >
              ✕ Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
