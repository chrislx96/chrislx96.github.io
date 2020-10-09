import React from "react";
import AboutMe from "./Components/AboutMe.jsx";
import AvatarAndName from "./Components/AvatarAndName.jsx";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo.jsx";
import style from "./introPage.scss";
import commonStyle from "../app.scss";

class IntroPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const {currentPage} =  this.props;
    return (currentPage === "intro")&&(
      <section data-page="intro">
        <div className={commonStyle.background}>
          <div className={commonStyle.container}>
            <div className={`${style.introPage} row`}>
              <div className={`${style.leftPage} col-md-4 col-sm-12`}>
                <AvatarAndName />
              </div>
              <div className={`${style.rightPage} col-md-8 col-sm-12`}>
                <div className={`${style.content} row`}>
                  <AboutMe />
                  <PersonalInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IntroPage;
