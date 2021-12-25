import "./profile-styles.css";

export const ProfileOptions = () => {
  return (
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
  );
};
