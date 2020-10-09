import React from "react";
import style from "./title.scss";

const Title = (props) => (
  <>
    <div className={style.title}>
      <h3>{props.children}</h3>
    </div>
  </>
);

export default Title;
