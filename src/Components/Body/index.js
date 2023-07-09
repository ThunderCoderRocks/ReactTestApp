import React from "react";
import PropTypes from "prop-types";
import "./../../../src/dev-profile.css";

Body.propTypes = {};

function Body(props) {
  const intro =
    "If you're seeking a dynamic Senior Software Engineer with a relentless drive for excellence, I am confident that my skill set and dedication will make a valuable addition to your team.";
  return (
    <div>
      <div class="data">{intro}</div>
    </div>
  );
}

export default Body;
