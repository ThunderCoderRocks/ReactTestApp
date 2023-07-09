import React from 'react';
import PropTypes from 'prop-types';
import Skill from "./Skill/index";

Skills.propTypes = {

};

const profileData = [
    {
      skill:"ReactJs",
      level: "advanced",
      color: "#C3DCAF",
      SkillsBr: "25px",
      SkillsFF: "cursive"
    },
    {
      skill:"Javascript",
      level: "intermediate",
      color: "#E84F33",
      SkillsBr: "25px",
      SkillsFF: "cursive"
    },
    {
      skill:"AspNetCore",
      level: "begineer",
      color: "#60DAFB",
      SkillsBr: "25px",
      SkillsFF: "cursive"
    }
  ]

  
  
function Skills(props) {
    return (
        <div className={"skill"}>
          {
            profileData.map((item)=>{
              return <Skill SkillsTopic={item.skill} Level={item.level} SkillsBC={item.color} SkillsBr={item.SkillsBr} SkillsFF={item.SkillsFF}></Skill>
            })
          }
            {/* <Skill
                SkillsTopic={"JavaScript 💪"}
                SkillsBC={"yellow"}
                SkillsBr={"25px"}
                SkillsFF={"cursive"}
            ></Skill>

            <Skill
                SkillsTopic={"ReactJs 😁"}
                SkillsBC={"lightgreen"}
                SkillsBr={"25px"}
                SkillsFF={"cursive"}
            ></Skill>

            <Skill
                SkillsTopic={"AspNetCore 💪"}
                SkillsBC={"lightcoral"}
                SkillsBr={"25px"}
                SkillsFF={"cursive"}
            ></Skill> */}
        </div>
    );
}

export default Skills;