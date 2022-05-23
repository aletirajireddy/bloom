import React from "react";
import "./App.css";
import Fifty from "./components/Fifty";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="app-wrapper bg-gray-200">
      <div className="min-h-full">
        <header>
          <Navigation />
        </header>
        <main>
          <Hero />
          <div className="container mx-auto py-8">
            <Fifty />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
