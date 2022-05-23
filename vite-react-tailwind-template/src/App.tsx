import React from "react";
import "./App.css";
import Features from "./components/Features";
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

          <div className="container mx-auto pb-8">
            <Fifty />
          </div>
          <div className="block p-6 shadow-lg bg-gray-700 mb-10 py-20">
            <p className="md:w-2/3 md:leading-10 text-white container mx-auto pb-8 text-xl  md:text-4xl px-3 md:px-12 text-center">
              Each project is assigned an estimator, project manager and site
              foreman who work cohesively to follow the landscaping project
              through from start to finish. Commercial landscaping projects
              often involve many stakeholders and this approach means
              expectations, budgets and deadlines are respected and met.{" "}
            </p>
          </div>
          <div className="container mx-auto pb-8">
            <Features />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
