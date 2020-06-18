import React from "react";
import useStyles from "./headerStyle";
function Header(props) {
  const clasess = useStyles();
  return (
    <div>
      <h1 className={clasess.headerColor}>{props.headLine}</h1>
    </div>
  );
}
export default Header;
