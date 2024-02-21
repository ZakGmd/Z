import Image from "next/image";
import Hero from "./ui/heroSection";
import Nav from "./ui/navBar";

export default function Home() {
  return (
    <main className="">
        <Nav/>
        <Hero/> 
    </main>
  );
}
