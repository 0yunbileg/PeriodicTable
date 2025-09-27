import React from "react"
import Image from "next/image"

interface Element {
  name: string
  appearance?: string
  atomic_mass: number
  boil?: number
  category: string
  density?: number
  discovered_by?: string
  melt?: number
  molar_heat?: number
  named_by?: string
  number: number
  period: number
  group?: number
  phase: string
  source: string
  bohr_model_image?: string
  bohr_model_3d?: string
  spectral_img?: string
  summary: string
  symbol: string
  xpos: number
  ypos: number
  wxpos?: number
  wypos?: number
  shells: number[]
  electron_configuration: string
  electron_configuration_semantic: string
  electron_affinity?: number
  electronegativity_pauling?: number
  ionization_energies: number[]
  "cpk-hex"?: string
  image?: {
    title: string
    url: string
    attribution: string
  }
}
interface Props {
  element: Element
  property: string
  onClick: (element: Element) => void
}

const TableItem: React.FC<Props> = ({ element, property, onClick }) => {
  let bgColor = "#f1f5f9"

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
    bgColor = colors[element.category] || "#e5e7eb"
  }

  if (property === "boil" && element.boil) {
    const max = 6000
    const intensity = Math.min(element.boil / max, 1)
    const red = Math.floor(255 * intensity)
    bgColor = `rgb(${red}, 100, 100)`
  }

  if (property === "melt" && element.melt) {
    const max = 3700
    const intensity = Math.min(element.melt / max, 1)
    const green = Math.floor(255 * intensity)
    bgColor = `rgb(100, ${green}, 100)`
  }

  if (property === "density" && element.density) {
    const max = 22
    const intensity = Math.min(element.density / max, 1)
    const blue = Math.floor(255 * intensity)
    bgColor = `rgb(100, 100, ${blue})`
  }

  if (property === "atomic_mass" && element.atomic_mass) {
    const max = 300
    const intensity = Math.min(element.atomic_mass / max, 1)
    const blue = Math.floor(255 * intensity)
    bgColor = `rgb(100, ${blue}, ${blue})`
  }

  return (
    <div
      key={element.number}
      className='p-1 rounded shadow text-center transition hover:scale-105 hover:shadow-lg min-w-[60px]'
      style={{ backgroundColor: bgColor }}
      onClick={() => onClick(element)}
    >
      <p className='m-0'>{element.number}</p>
      <p className='m-0 font-bold'>{element.symbol}</p>
      <p className='m-0 hidden xl:block'>{element.atomic_mass.toFixed(2)}</p>
    </div>
  )
}

export default TableItem
