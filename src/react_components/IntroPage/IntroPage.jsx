import React from 'react';
import AboutMe from './Components/AboutMe.jsx';
import AvatarAndName from './Components/AvatarAndName.jsx';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo.jsx';

const IntroPage = () => (
    <section data-page="intro">
      <div className="background">
        <div className="container">
          <div className="intro-page row">
            <div className="intro-page__left col-md-4 col-sm-12">
              <AvatarAndName/>
            </div>
            <div className="intro-page__right col-md-8 col-sm-12">
              <div className="intro-content row">
                <AboutMe/>
                <PersonalInfo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default IntroPage;