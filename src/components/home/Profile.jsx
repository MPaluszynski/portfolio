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
                  "1111",
                  1000,
                  "2222",
                  1000,
                  "3333",
                  1000,
                  "4444",
                  1000,
                  "5555",
                  1000,
                ]}
              />
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};
