import React from "react";
import PropTypes from "prop-types";
import "./../../../src/dev-profile.css";
import Avatar from "./../../Components/Avatar/index";
import Body from "./../../Components/Body/index";
import Skills from "./../../Components/Skills/index";
import Header from "./../../Components/Name/index";

DevProfile.propTypes = {};

function DevProfile(props) {
  return (
    <div>
      <div class="card">
        <Avatar></Avatar>
        <Header></Header>
        <Body></Body>
        <Skills></Skills>
      </div>
    </div>
  );
}

export default DevProfile;
