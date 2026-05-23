import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Shelf from "@/components/Shelf";
import Process from "@/components/Process";
import Studio from "@/components/Studio";
import Journal from "@/components/Journal";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow">
        <Hero />
        <Shelf />
        <Process />
        <Studio />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
