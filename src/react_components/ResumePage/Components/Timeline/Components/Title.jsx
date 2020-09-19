import React from "react";

const Title = (props) => (
  <>
    <div className="timeline__title">
      <h3>{props.children}</h3>
    </div>
  </>
);

export default Title;
