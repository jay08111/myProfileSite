import React from "react";
import Introduce from "./components/Introduce";
import About from "./components/About";
import Career from "./components/Career";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <main className="main">
      <Header />
      <Introduce />
      <About />
      <Portfolio />
      <Career />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
