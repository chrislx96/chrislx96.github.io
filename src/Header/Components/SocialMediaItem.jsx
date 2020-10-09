import React from "react";

const SocialMediaItem = (props) => (
  <>
    <a className="navbar-right__img" href={props.children} target="_blank">
      <img src={props.img} />
    </a>
  </>
);

export default SocialMediaItem;
