import React from "react";
import PersonalInfoItem from "./Components/PersonalnfoItem.jsx";
import style from "./personalInfo.scss";

const PersonalInfo = () => (
  <div className={ style.personalInfo,"row"}>
    <PersonalInfoItem header="Age:" data="34" />
    <PersonalInfoItem header="Residence:" data="Pacific Ocean" />
    <PersonalInfoItem
      header="Address:"
      data="124 Conch Street, Bikini Bottom, Pacific Ocean"
    />
    <PersonalInfoItem header="E-mail:" data="spongeBob@gmail.com" />
    <PersonalInfoItem header="Phone:" data="2333333333" />
  </div>
);

export default PersonalInfo;
