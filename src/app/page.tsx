"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
