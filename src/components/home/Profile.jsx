import Typical from "react-typical";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__details">
        <div className="profile__details--colz">
          <a
            href="https://www.linkedin.com/in/maciej-paluszy%C5%84ski-527771190/"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/MPaluszynski"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fa fa-github-square"></i>
          </a>
        </div>
        <div className="profile__details--name">
          <span className="primary-text">
            {" "}
            Hello I'm <span className="highlighted-text">Maciek</span>
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
                  "Hard Working Coder",
                  1000,
                  "React.js Developer",
                  1000,
                  "Business Process Developer",
                  1000,
                  "IT Engineering student",
                  1000,
                  "Full-stack skills",
                  1000,
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
