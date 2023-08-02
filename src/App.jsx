import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Details from "./Components/Details";
import Features from "./Components/Features";

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#FFEAD9]">
      <Header />
      <Hero />
      <Details />
      <Features />
    </div>
  );
};

export default App;
