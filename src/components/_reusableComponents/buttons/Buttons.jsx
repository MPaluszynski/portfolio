import "./buttons-styles.css";

export const Buttons = () => {
  return (
    <div className="buttons">
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
