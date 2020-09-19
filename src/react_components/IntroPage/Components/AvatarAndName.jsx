import React from "react";
import avatar from '../../../assets/img/spongeBob.png';

const AvatarAndName = () => (
  <>
    <img className="avatar" src={avatar} />
    <div className="name-and-position">
      <h2>SpongeBob Squarepants</h2>
      <p>Krusty Krab fry cook</p>
    </div>
  </>
);

export default AvatarAndName;
