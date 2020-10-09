import React from "react";
import style from "./contactItem.scss";

const ContactItem = (props) => (
  <div className={style.item}>
    <img className={style.img} src={props.img} />
    <h6>{props.children}</h6>
  </div>
);

export default ContactItem;
