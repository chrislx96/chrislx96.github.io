import React from "react";
import style from "./hobbyItem.scss";

const HobbyItem = (props) => (
  <div className={`${style.hobbyItem} col-lg-3 col-md-6 col-sm-12`}>
    <img className={style.hobbyImg} src={props.img} />
    <h4>{props.children}</h4>
    <p>
      {props.description}
    </p>
  </div>
);

export default HobbyItem;
