import "./navbar-styles.css";

export const NavbarLink = (props) => {
  const handleClick = () => {
    props.setClickedIndex(props.index);
  };
  return (
    <span className={props.class} onClick={handleClick}>
      {props.name}
    </span>
  );
};
