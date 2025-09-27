"use client"
import React from "react"
import { useEffect, useState } from "react"
import TableItem from "./tableItem"
import Details from "./details"
import PropertySelector from "./propertySelector"

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

const Table: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([])
  const [property, setProperty] = useState<string>("category")
  const [selectedElement, setSelectedElement] = useState<Element | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"
      )
      const data = await res.json()
      setElements(data.elements)
    }
    fetchData()
  }, [])

  const handleSelect = (element: Element) => {
    setSelectedElement(element)
    setSidebarOpen(true)
  }

  const handleCloseSidebar = () => {
    setSidebarOpen(false)
    setSelectedElement(null)
  }

  return (
    <div className='flex'>
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          sidebarOpen ? "lg:mr-2" : ""
        }`}
      >
        <h1 className='text-2xl font-bold mb-4'>Periodic Table</h1>

        <PropertySelector property={property} onChange={setProperty} />

        <div className='grid grid-cols-18 gap-2 min-w-[1220px]'>
          {elements.map((element) => (
            <div
              key={element.number}
              style={{
                gridColumnStart: element.xpos,
                gridRowStart: element.ypos,
              }}
            >
              <TableItem
                key={element.number}
                element={element}
                property={property}
                onClick={handleSelect}
              />
            </div>
          ))}
        </div>
      </div>

      {sidebarOpen && (
        <Details
          selectedElement={selectedElement}
          onClose={handleCloseSidebar}
        />
      )}
    </div>
  )
}

export default Table
