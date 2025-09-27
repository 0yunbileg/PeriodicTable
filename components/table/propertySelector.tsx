"use client"
import React from "react"

interface PropertySelectorProps {
  property: string
  onChange: (value: string) => void
  className?: string
}

const PropertySelector: React.FC<PropertySelectorProps> = ({
  property,
  onChange,
  className,
}) => {
  let bgColorHighest = "#f1f5f9"
  let bgColorLowest = "#f1f5f9"

  if (property === "category") {
    const colors: Record<string, string> = {
      "noble gas": "#a3e635",
      "alkali metal": "#f87171",
      "alkaline earth metal": "#facc15",
      "transition metal": "#60a5fa",
      "post-transition metal": "#fbbf24",
      metalloid: "#34d399",
      "diatomic nonmetal": "#c084fc",
      lanthanide: "#fb923c",
      actinide: "#f472b6",
    }
    // bgColor = colors[element.category] || "#e5e7eb"
  }

  if (property === "boil") {
    bgColorHighest = `rgb(225, 100, 100)`
    bgColorLowest = `rgb(0, 100, 100)`
  }

  if (property === "melt") {
    bgColorHighest = `rgb(100, 225, 100)`
    bgColorLowest = `rgb(100, 0, 100)`
  }

  if (property === "density") {
    bgColorHighest = `rgb(100, 100, 225)`
    bgColorLowest = `rgb(100, 100, 0)`
  }

  if (property === "atomic_mass") {
    bgColorHighest = `rgb(100, 225, 225)`
    bgColorLowest = `rgb(100, 0, 0)`
  }

  return (
    <div className='flex gap-4'>
      <select
        value={property}
        onChange={(e) => onChange(e.target.value)}
        className={`mb-4 p-2 border rounded ${className || ""}`}
      >
        <option value='category'>Category</option>
        <option value='boil'>Boiling Point</option>
        <option value='melt'>Melting Point</option>
        <option value='density'>Density</option>
        <option value='atomic_mass'>Atomic Mass</option>
      </select>

      {property !== "category" && (
        <div>
          <div
            className={`flex justify-between px-4 items-center w-[400px] h-[40px] rounded-full overflow-hidden ${className}`}
            style={{
              background: `linear-gradient(to right, ${bgColorHighest}, ${bgColorLowest})`,
            }}
          >
            <span>Highest</span>
            <span>Lowest</span>
          </div>
        </div>
      )}

      <div>
        
      </div>
    </div>
  )
}

export default PropertySelector
