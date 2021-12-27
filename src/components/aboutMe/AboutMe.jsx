import "./about-styling.css";
import { aboutHighlightsArray } from "../../assets/data/arrays";
import { aboutMeDescription } from "../../assets/data/variables";
import { Heading } from "../_reusableComponents/heading/Heading.jsx";
import { Buttons } from "../_reusableComponents/buttons/Buttons";

export const AboutMe = () => {
  const renderedArray = aboutHighlightsArray.map((highlight) => {
    return <div key={highlight.id}>{highlight.name}</div>;
  });

  return (
    <div className="about-me">
      <Heading title={"About Me"} description={"Why Choose Me"} />
      <div className="about-me__card">
        <div className="about-me__card--photo"></div>
        <div className="about-me__card--details">
          <div className="about-me__card--details--description">
            {aboutMeDescription}
          </div>
          <div className="about-me__card--details--highlights">
            <span>Here are a few highlights</span>
            {renderedArray}
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
};
