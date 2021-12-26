import { useState } from "react";
import { navLinksArray } from "../../../../assets/data/arrays";
import { NavbarLink } from "./NavbarLink";
import "./navbar-styles.css";

export const Navbar = (props) => {
  const [clickedIndex, setClickedIndex] = useState("1");

  const renderedArray = navLinksArray.map((link) => {
    let clickedClass = "";
    if (link.id === clickedIndex) {
      clickedClass = "--clicked";
    }
    return (
      <NavbarLink
        key={link.id}
        index={link.id}
        name={link.name}
        class={`navbar__link${clickedClass}`}
        setClickedIndex={setClickedIndex}
      />
    );
  });
  return <div className="navbar">{renderedArray}</div>;
};
