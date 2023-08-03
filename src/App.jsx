import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Details from "./Components/Details";
import Features from "./Components/Features";
import Work from "./Components/Work";
import You from "./Components/You";

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#FFEAD9]">
      <Header />
      <Hero />
      <Details />
      <Features />
      <Work />
      <You />
    </div>
  );
};

export default App;
