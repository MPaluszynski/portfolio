import Typical from "react-typical";
import "./profile-styles.css";

export const ProfileRoles = () => {
  return (
    <div className="profile__details--roles">
      <span className="primary-text">
        {" "}
        <h3>
          {" "}
          <Typical
            loop={Infinity}
            steps={[
              "Hard-working Coder 💻",
              1250,
              "React.js Developer ⚛️",
              1250,
              "Process Automation Specialist 📲",
              1250,
              "IT Engineering Student 🎓",
              1250,
            ]}
          />
        </h3>
        <span className="profile__details--roles-tagline">
          Passion for building web applications with front- and back-end
          operations
        </span>
      </span>
    </div>
  );
};
