import React from 'react';

const ResumePage = () => (
    <section data-page="resume">
      <div className="background">
        <div className="container">
          <div className="resume-page">
            <div className="resume-page__header"><h2>Resume</h2></div>
            <div className="resume-page__timeline row">
              <div className="timeline col-md-6 col-sm-12">
                <div className="timeline__title"><h3>Education</h3></div>
                <div className="timeline__content">
                  <div className="timeline__content__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequuntur iste blanditiis aperiam soluta itaque neque.</div>
                  <div className="timeline__content__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequuntur iste blanditiis aperiam soluta itaque neque.</div>
                  <div className="timeline__content__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequuntur iste blanditiis aperiam soluta itaque neque.</div>
                </div>
              </div> 
              <div className="timeline col-md-6 col-sm-12">
                <div className="timeline__title"><h3>Work</h3></div>
                <div className="timeline__content">
                  <div className="timeline__content__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequuntur iste blanditiis aperiam soluta itaque neque.</div>
                  <div className="timeline__content__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequuntur iste blanditiis aperiam soluta itaque neque.</div>
                  <div className="timeline__content__item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequuntur iste blanditiis aperiam soluta itaque neque.</div>
                </div>
              </div> 
            </div>
            <div className="resume-page__skill row">
              <div className="skill-block col-md-6 col-sm-12">
                <div className="skill-block__title"><h3>Skill 1</h3></div>
                <div className="skill-block__item">
                  <h4>Design Skill</h4>
                  <div className="skill-percentage">
                    <div className="skill-percentage__skill1"></div>
                  </div>
                </div>
                <div className="skill-block__item">
                  <h4>Design Skill</h4>
                  <div className="skill-percentage">
                    <div className="skill-percentage__skill2"></div>
                  </div>
                </div>
                <div className="skill-block__item">
                  <h4>Design Skill</h4>
                  <div className="skill-percentage">
                    <div className="skill-percentage__skill3"></div>
                  </div>
                </div>
              </div> 
              <div className="skill-block col-md-6 col-sm-12">
                <div className="skill-block__title"><h3>Skill 2</h3></div>
                <div className="skill-block__item">
                  <h4>Design Skill</h4>
                  <div className="skill-percentage">
                    <div className="skill-percentage__skill4"></div>
                  </div>
                </div>
                <div className="skill-block__item">
                  <h4>Design Skill</h4>
                  <div className="skill-percentage">
                    <div className="skill-percentage__skill5"></div>
                  </div>
                </div>
                <div className="skill-block__item">
                  <h4>Design Skill</h4>
                  <div className="skill-percentage">
                    <div className="skill-percentage__skill6"></div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default ResumePage;