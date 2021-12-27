import { Icon } from "../../../_reusableComponents/icon/Icon.jsx";
import "./profile-styles.css";

export const ProfileLinks = () => {
  return (
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
  );
};
