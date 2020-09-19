import React from "react";

const ContactItem = (props) => (
  <div className="mycontact__item">
    <img src={props.img} />
    <h6>{props.children}</h6>
  </div>
);

export default ContactItem;
