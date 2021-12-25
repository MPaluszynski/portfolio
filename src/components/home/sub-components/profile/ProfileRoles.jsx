import Typical from "react-typical";
import "./profile-styles.css";

export const ProfileRoles = () => {
  return (
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
              "IT Engineering Student 🎓",
              1500,
              "Possess Full-Stack Skills 🌌",
              1500,
            ]}
          />
        </h1>
        <span className="profile__details--roles-tagline">
          Knack for building web applications with front- and back-end
          operations
        </span>
      </span>
    </div>
  );
};
