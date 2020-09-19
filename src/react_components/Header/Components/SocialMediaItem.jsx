import React from "react";

const SocialMediaItem = (props) => (
  <>
    <a href={props.children} target="_blank">
      <img src={props.img} />
    </a>
  </>
);

export default SocialMediaItem;
