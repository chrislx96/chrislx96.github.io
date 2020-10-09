import React from "react";
import style from "./item.scss";

const Item = (props) => (
  <div className={style.skillItem}>
    <h4>{props.children}</h4>
    <div className={style.skillBar}>
      <div
        className={style.skillProficiency}
        style={{
          width: props.proficiency,
        }}
      ></div>
    </div>
  </div>
);

export default Item;
