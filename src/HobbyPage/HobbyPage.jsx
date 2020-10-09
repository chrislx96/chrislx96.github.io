import React from "react";
import baking from "./assets/img/baking.png";
import headphones from "./assets/img/headphones.png";
import meditation from "./assets/img/meditation.png";
import study from "./assets/img/study.png";
import Header from "./Components/Header.jsx";
import HobbyItem from "./Components/HobbyItem.jsx";
import style from "./hobbyPage.scss";
import commonStyle from "../app.scss";



class HobbyPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const {currentPage} =  this.props;
    return (currentPage === "hobby")&&(
      <section data-page="hobby">
        <div className={commonStyle.background}>
          <div className={commonStyle.container}>
            <div className={style.hobbyPage}>
              <Header></Header>
              <div className={`${style.content} row`}>
                <HobbyItem 
                description="Baking ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem magnam laudantium quod incidunt. Commodi repellendus nisi iure!"
                img = {baking}
                >
                  Baking
                </HobbyItem>
                <HobbyItem 
                description="Music ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem magnam laudantium quod incidunt. Commodi repellendus nisi iure!"
                img = {headphones}
                >
                  Music
                </HobbyItem>
                <HobbyItem 
                description="Meditation ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem magnam laudantium quod incidunt. Commodi repellendus nisi iure!"
                img = {meditation}
                >
                  Meditation
                </HobbyItem>
                <HobbyItem 
                description="Study ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem magnam laudantium quod incidunt. Commodi repellendus nisi iure!"
                img = {study}
                >
                  Study
                </HobbyItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HobbyPage;
