import React from "react";
import useStyles from "./headerStyle";
function Header() {
  const clasess = useStyles();
  return (
    <div>
      <h1 className={clasess.headerColor}>React Movie App</h1>
    </div>
  );
}
export default Header;
