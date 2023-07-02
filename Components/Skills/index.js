import React from "react";
import PropTypes from "prop-types";
import "./../../../src/dev-profile.css";

Skills.propTypes = {};

function Skills(props) {
  const stylecss = {
    backgroundColor: props.SkillsBC,
    borderRadius: props.SkillsBr,
    fontFamily: props.SkillsFF,
  };
  return (
    <div>
      <div style={stylecss}>{props.SkillsTopic}</div>
    </div>
  );
}

export default Skills;
