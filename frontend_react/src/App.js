import React from "react";
// prettier-ignore
import { About, Footer, Header, Skills, Testimonial, Work, Education } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Education />

      <Footer />
    </div>
  );
};

export default App;
