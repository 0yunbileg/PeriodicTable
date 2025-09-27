import Image from "next/image";
import Hero from "@/components/hero/hero";
import FunFacts from "@/components/homeSections/FunFacts";
import Discover from "@/components/homeSections/Discover";
import Mendeleev from "@/components/homeSections/Mendeleev";
import History from "@/components/homeSections/History";
import LatestNews from "@/components/homeSections/LatestNews";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Hero />
      <Discover />
      <FunFacts />
      <Mendeleev />
      <History />
      <LatestNews />
    </div>
  );
}
