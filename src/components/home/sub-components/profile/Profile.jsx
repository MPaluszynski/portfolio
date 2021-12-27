import { ProfileLinks } from "./ProfileLinks";
import { ProfileRoles } from "./ProfileRoles";
import { Buttons } from "../../../_reusableComponents/buttons/Buttons.jsx";
import "./profile-styles.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__details">
        <ProfileLinks />
        <div className="profile__details--name">
          <span className="primary-text">
            {" "}
            Hello, I'm <span className="highlighted-text">Maciek</span>
          </span>
        </div>
        <ProfileRoles />
        <Buttons />
      </div>
      <div className="profile__picture">
        <div className="profile__picture--background"></div>
      </div>
    </div>
  );
};
