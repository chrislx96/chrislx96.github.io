import React from "react";
import Header from "./Header/Header.jsx";
import IntroPage from "./IntroPage/IntroPage.jsx";
import ResumePage from "./ResumePage/ResumePage.jsx";
import HobbyPage from "./HobbyPage/HobbyPage.jsx";
import ContactPage from "./ContactPage/ContactPage.jsx";
import Footer from "./Footer/Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "intro",
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(targetPage) {
    return (event) => {
      event.preventDefault();
      this.setState({
        currentPage: targetPage,
      });
    };
  }

  render() {
    const { currentPage } = this.state;
    return (
      <main>
        <Header currentPage = {currentPage} onNavItemClick={this.changePage} />
        <section>
          <IntroPage currentPage={currentPage} />
          <ResumePage currentPage={currentPage} />
          <HobbyPage currentPage={currentPage} />
          <ContactPage currentPage={currentPage} />
        </section>
        <Footer />
      </main>
    );
  }
}
export default App;
