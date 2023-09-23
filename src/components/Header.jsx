import React from "react";
import PropTypes from "prop-types";

function Header({ text }) {
  const HeaderStyle = {
    backgroundColor: "rgba(0,0,0,.4)",
    color: "#ff6a95",
  };
  return (
    <header style={HeaderStyle}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback UI",
};
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
