import "./styles/app-styles.css";

import { Home } from "./components/home/Home.jsx";
import { ParticlesBackground } from "./components/_reusableComponents/particlesBackground/ParticlesBackground.jsx";
import { AboutMe } from "./components/aboutMe/AboutMe.jsx";

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
