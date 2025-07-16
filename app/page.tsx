import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
      <Hero/>
      <Grid/>
    </div>
    </main>
    
  );
}
