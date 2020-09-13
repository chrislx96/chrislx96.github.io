import React from 'react';
import Header from './Header.jsx';
import IntroPage from './IntroPage.jsx';
import ResumePage from './ResumePage.jsx';
import HobbyPage from './HobbyPage.jsx';
import ContactPage from './ContactPage.jsx';
import Footer from './Footer.jsx';

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
    