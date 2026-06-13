import Cursor from "@/app/components/Cursor";
import Aurora from "@/app/components/Aurora";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";
import Work from "@/app/components/Work";
import About from "@/app/components/About";
import Stack from "@/app/components/Stack";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home(){
  return (
    <main>
      <Cursor />
      <Aurora />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Stack />
      <Contact />
      <Footer />
    </main>
  )
}
