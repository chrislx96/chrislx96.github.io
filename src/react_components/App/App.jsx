import React from 'react';
import Header from '../Header/Header.jsx';
import IntroPage from '../IntroPage/IntroPage.jsx';
import ResumePage from '../ResumePage/ResumePage.jsx';
import HobbyPage from '../HobbyPage/HobbyPage.jsx';
import ContactPage from '../ContactPage/ContactPage.jsx';
import Footer from '../Footer/Footer.jsx';

const App = () => (
    <>
      <Header />
        <main>
          <IntroPage />
          <ResumePage />
          <HobbyPage />
          <ContactPage />
        </main>  
      <Footer />   
    </>
);

export default App;
    