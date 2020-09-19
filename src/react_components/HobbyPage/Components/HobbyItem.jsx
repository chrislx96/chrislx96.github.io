import React from "react";

const HobbyItem = (props) => (
  <div className="hobby-item col-lg-3 col-md-6 col-sm-12">
    <img className="hobby-item__img" src={props.img} />
    <h4>{props.children}</h4>
    <p>
      {props.description}
    </p>
  </div>
);

export default HobbyItem;
