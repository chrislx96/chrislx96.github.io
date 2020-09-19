import React from "react";

const Item = (props) => (
  <div className="timeline__content__item">
    {props.children}
  </div>
);

export default Item;
