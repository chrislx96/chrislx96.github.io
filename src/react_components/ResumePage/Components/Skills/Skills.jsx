import React from "react";
import Title from "../Skills/Components/Title.jsx";
import Item from "../Skills/Components/Item.jsx";

const Skills = () => (
  <div className="resume-page__skill row">
    <div className="skill-block col-md-6 col-sm-12">
      <Title>Skill A</Title>

      <Item proficiency="10%">Sub-skill A1</Item>
      <Item proficiency="20%">Sub-skill A2</Item>
      <Item proficiency="30%">Sub-skill A3</Item>
    </div>
    <div className="skill-block col-md-6 col-sm-12">
      <Title>Skill B</Title>

      <Item proficiency="40%">Sub-skill B1</Item>
      <Item proficiency="50%">Sub-skill B2</Item>
      <Item proficiency="60%">Sub-skill B3</Item>
    </div>
  </div>
);

export default Skills;
