import Typical from "react-typical";
import { Icon } from "../../../icon/Icon";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__details">
        <div className="profile__details--links">
          <a
            href="https://www.linkedin.com/in/maciej-paluszy%C5%84ski-527771190/"
            target={"_blank"}
            rel="noreferrer"
            className="link"
          >
            <Icon iconName={"BsLinkedin"} size={"3em"} color={"#0e76a8"} />
          </a>
          <a
            href="https://github.com/MPaluszynski"
            target={"_blank"}
            rel="noreferrer"
            className="link"
          >
            <Icon iconName={"GoMarkGithub"} size={"3em"} color={"#333"} />
          </a>
        </div>
        <div className="profile__details--name">
          <span className="primary-text">
            {" "}
            Hello, I'm <span className="highlighted-text">Maciek</span>
          </span>
        </div>
        <div className="profile__details--roles">
          <span className="primary-text">
            {" "}
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Passionate Coder 💻",
                  1500,
                  "React.js Developer ⚛️",
                  1500,
                  "Process Automation Specialist 📲",
                  1500,
                  "IT Engineering student 🎓",
                  1500,
                  "Full-stack skills 🌌",
                  1500,
                ]}
              />
            </h1>
            <span className="profile__details--roles-tagline">
              Passion for building web applications with front and back end
              operations
            </span>
          </span>
        </div>
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
      <div className="profile__picture">
        <div className="profile__picture--background"></div>
      </div>
    </div>
  );
};
