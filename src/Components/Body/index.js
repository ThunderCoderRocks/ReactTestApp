import React from "react";
import PropTypes from "prop-types";
import "./../../../src/dev-profile.css";

Body.propTypes = {};

function Body(props) {
  const intro =
    "Introducing an Exceptional Senior Software Engineer: With a profound expertise in ReactJS, JavaScript, and DotnetCore, I am a seasoned professional ready to make an impact as a Senior Software Engineer. With a proven track record of delivering outstanding solutions, I possess a deep understanding of web development and the ability to build robust, scalable applications. My strong command over modern front-end frameworks, coupled with my extensive experience in back-end development, empowers me to create seamless user experiences while ensuring optimal performance. I thrive in collaborative environments, leveraging my leadership skills to guide teams and exceed project goals. As a passionate problem-solver, I continuously strive to stay abreast of the latest technologies and industry best practices, enabling me to drive innovation and deliver results that surpass expectations. If you're seeking a dynamic Senior Software Engineer with a relentless drive for excellence, I am confident that my skill set and dedication will make a valuable addition to your team.";
  return (
    <div>
      <div class="data">{intro}</div>
    </div>
  );
}

export default Body;
