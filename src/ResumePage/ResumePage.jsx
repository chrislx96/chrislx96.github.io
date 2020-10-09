import React from "react";
import Header from "./Components/Header.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Timeline from "./Components/Timeline/Timeline.jsx";
import style from "./resumePage.scss";
import commonStyle from "../app.scss";

class ResumePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentPage } = this.props;
    return (
      currentPage === "resume" && (
        <section data-page="resume">
          <div className={commonStyle.background}>
            <div className={commonStyle.container}>
              <div className={style.resumePage}>
                <Header />
                <Timeline />
                <Skills />
              </div>
            </div>
          </div>
        </section>
      )
    );
  }
}

export default ResumePage;
