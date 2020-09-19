import React from 'react';
import Header from './Components/Header.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Timeline from './Components/Timeline/Timeline.jsx';

const ResumePage = () => (
    <section data-page="resume">
      <div className="background">
        <div className="container">
          <div className="resume-page">
            <Header/>
            <Timeline/>
            <Skills/>

          </div>
        </div>
      </div>
    </section>
);

export default ResumePage;