import React from "react";

const Item = (props) => (
  <div className="skill-block__item">
    <h4>{props.children}</h4>
    <div className="skill-percentage">
      <div
        className="skill-percentage__bar"
        style={{
          width: props.proficiency,
        }}
      ></div>
    </div>
  </div>
);

export default Item;
