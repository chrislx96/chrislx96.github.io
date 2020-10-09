import React from "react";
import Item from "./Components/Item.jsx";
import Title from "./Components/Title.jsx";
import style from "./timeline.scss";

const Timeline = () => (
  <div className={`${style.timelineContainer} row`}>
    <div className={`${style.timeline} col-md-6 col-sm-12`}>
      <Title>Education</Title>
      <div className={style.content}>
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
    <div className={`${style.timeline} col-md-6 col-sm-12`}>
      <Title>Work</Title>
      <div className={style.content}>
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
  </div>
);

export default Timeline;
