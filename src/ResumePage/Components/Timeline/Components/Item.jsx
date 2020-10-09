import React from "react";
import style from "./item.scss"

const Item = (props) => (
  <div className={style.timelineItem}>
    {props.children}
  </div>
);

export default Item;
