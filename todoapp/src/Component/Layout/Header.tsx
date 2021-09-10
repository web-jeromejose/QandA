import React from "react";

import logo from "../images/jjlogo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <a href="/" className="navbar-brand" rel="noopener noreferrer">
          <img
            src={logo}
            alt=""
            style={{
              width: "100px",
            }}
          />
        </a>

        <a className="navbar-brand" href="/">
          <h1>Todo App</h1>
        </a>
      </nav>
    </header>
  );
};
export default Header;
