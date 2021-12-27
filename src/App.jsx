import "./styles/app-styles.css";

import { Home } from "./components/home/Home.jsx";
import { ParticlesBackground } from "./components/particlesBackground/ParticlesBackground.jsx";
import { Heading } from "./components/heading/Heading.jsx";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Home />
      <Heading title={"Resume"} description={"My Format Bio Details"} />
    </div>
  );
}

export default App;
