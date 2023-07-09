import React from "react";
import PropTypes from "prop-types";
import "./../../../../src/dev-profile.css";

Skill.propTypes = {};

function Skill(props) {
  const stylecss = {
    backgroundColor: props.SkillsBC,
    borderRadius: props.SkillsBr,
    fontFamily: props.SkillsFF,
  };

  const SkillText = () => {
    switch(props.Level) {
      case "advanced" : return props.SkillsTopic + "💪";
      case "intermediate" : return props.SkillsTopic + "👌";
      case "begineer" : return props.SkillsTopic + "👍";
    }
  }
  return (
    <div>
      <div style={stylecss}>{SkillText()}</div>
    </div>
  );
}

export default Skill;
