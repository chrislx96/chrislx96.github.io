import React from "react";
import Item from "./Components/Item.jsx";
import Title from "./Components/Title.jsx";

const Timeline = () => (
  <div className="resume-page__timeline row">
    <div className="timeline col-md-6 col-sm-12">
      <Title>Education</Title>
      <div className="timeline__content">
        <Item>
          A. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
          consequuntur iste blanditiis aperiam soluta itaque neque.
        </Item>
        <Item>
          B. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
          consequuntur iste blanditiis aperiam soluta itaque neque.
        </Item>
        <Item>
          C. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
          consequuntur iste blanditiis aperiam soluta itaque neque.
        </Item>
      </div>
    </div>
    <div className="timeline col-md-6 col-sm-12">
      <Title>Work</Title>
      <Item>
        D. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
        consequuntur iste blanditiis aperiam soluta itaque neque.
      </Item>
      <Item>
        E. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
        consequuntur iste blanditiis aperiam soluta itaque neque.
      </Item>
      <Item>
        F. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
        consequuntur iste blanditiis aperiam soluta itaque neque.
      </Item>
    </div>
  </div>
);

export default Timeline;
