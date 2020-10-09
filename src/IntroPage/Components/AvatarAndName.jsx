import React from "react";
import avatar from './assets/img/spongeBob.png';
import style from "./avatarAndName.scss"

const AvatarAndName = () => (
  <>
    <img className={style.avatar} src={avatar} />
    <div className={style.nameAndPosition}>
      <h2>SpongeBob Squarepants</h2>
      <p>Krusty Krab fry cook</p>
    </div>
  </>
);

export default AvatarAndName;
