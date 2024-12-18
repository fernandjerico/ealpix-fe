import { Features } from "@/app/_sections/Features";
import { Header } from "@/app/_sections/Header";
import { Hero } from "@/app/_sections/Hero";
import { FindKidsLocation } from "@/app/_sections/FindKidsLocation";
import { Footer } from "@/app/_sections/Footer";
import { EalpixToken } from "@/app/_sections/EalpixToken";
import { Faq } from "@/app/_sections/Faq";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <FindKidsLocation />
      <EalpixToken />
      <Faq />
      <Footer />
    </div>
  );
}
