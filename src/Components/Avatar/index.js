import React from "react";
import PropTypes from "prop-types";
import profilepic from "./../../Images/profilepic.jpg";
import "./../../../src/dev-profile.css";

Avatar.propTypes = {};

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={profilepic} alt="Avatar"></img>
    </div>
  );
}

export default Avatar;
