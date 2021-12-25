import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";
import * as GoIcons from "react-icons/go";

const nameMapping = {
  Bs: BsIcons,
  Vs: VscIcons,
  Go: GoIcons,
};

export const Icon = (props) => {
  const { iconName, size, color } = props;

  const Icon = nameMapping[iconName.slice(0, 2)][iconName];

  return (
    <div
      style={{
        fontSize: size,
        color: color,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Icon />
    </div>
  );
};
