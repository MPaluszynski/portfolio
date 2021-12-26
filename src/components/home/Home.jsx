import { Profile } from "./sub-components/profile/Profile.jsx";
import { Footer } from "./sub-components/footer/Footer.jsx";
import { Navbar } from "./sub-components/navbar/Navbar.jsx";

import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
};
