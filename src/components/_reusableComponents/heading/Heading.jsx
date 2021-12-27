import "./heading-styles.css";

export const Heading = (props) => {
  return (
    <div className="heading">
      <div className="heading__title">
        <span>{props.title}</span>
      </div>
      <div className="heading__description">
        <span>{props.description}</span>
      </div>
      <div className="heading__separator">
        <div className="heading__separator--line">
          <div className="heading__separator--blob"></div>
        </div>
      </div>
    </div>
  );
};
