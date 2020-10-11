import React from "react";
//In react we can use the a tag, we have to use the link which comes form the react-router-dom
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 style={headerStyle}> TodoList</h1>
      <Link style={LinkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={LinkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const LinkStyle = {
  color: "#000000",
  textDecoration: "none",
};

export default Header;
