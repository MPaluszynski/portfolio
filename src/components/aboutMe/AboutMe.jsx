import "./about-styling.css";
import { aboutHighlightsArray } from "../../assets/data/arrays";
import { aboutMeDescription } from "../../assets/data/variables";
import { Heading } from "../_reusableComponents/heading/Heading.jsx";

export const AboutMe = () => {
  const renderedArray = aboutHighlightsArray.map((highlight) => {
    return <div key={highlight.id}>{highlight.name}</div>;
  });

  return (
    <div className="about-me">
      <Heading title={"About Me"} description={"Why Choose Me"} />;
      <div className="about-me__card">
        <>
          <div className="about-me__card--photo"></div>
          <div className="about-me__card--details">
            <div className="about-me__card--details--description">
              {aboutMeDescription}
            </div>
            <div className="about-me__card--details--highlights">
              {renderedArray}
            </div>
          </div>
        </>
        <div className="profile__details--options">
          <button className="btn primary-btn">Hire Me</button>
          <a
            href={"files/cvpl.pdf"}
            target={"_blank"}
            download={"cvpl.pdf"}
            rel={"noreferrer"}
          >
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};
