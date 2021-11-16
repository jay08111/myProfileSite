import React from "react";
import {
  Introduce,
  About,
  Career,
  Header,
  Footer,
  Contact,
  Projects,
} from "./components/index";
function App() {
  return (
    <main className="main">
      <Header />
      <Introduce />
      <About />
      <Projects />
      <Career />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
