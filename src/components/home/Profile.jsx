import Typical from "react-typical";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__details">
          <div className="profile__details--colz"></div>
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
                  1250,
                  "React/React Native Dev",
                  1250,
                  "Business Process Developer",
                  1250,
                  "IT Engineering student",
                  1250,
                  "Full-stack skills",
                  1250,
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
            target="_blank"
            download={"cvpl.pdf"}
            rel="noreferrer"
          >
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};
