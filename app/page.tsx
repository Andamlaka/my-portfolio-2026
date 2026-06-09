import Aurora from "@/app/components/Aurora";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";

export default function Home(){
  return (
    <main>
      <Aurora />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <Hero />
      <Marquee />
    </main>
  )
}