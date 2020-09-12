import React from 'react';

const IntroPage = () => (
    <section data-page="intro">
      <div className="background">
        <div className="container">
          <div className="intro-page row">
            <div className="intro-page__left col-md-4 col-sm-12">
              <img className="avatar" src="assets/img/spongeBob.png" />
              <div className="name-and-position">
                <h2>SpongeBob Squarepants</h2>
                <p>Krusty Krab fry cook</p>
              </div>
            </div>
            <div className="intro-page__right col-md-8 col-sm-12">
              <div className="intro-content row">
                <div className="intro-content__about-me">
                  <h3>Who am I?</h3>
                  <p>Hello! I’m SpongeBob Squarepants. I work at the Krusty Krab, Bikini Bottom's most popular
                    restaurant, where I am a fry cook and prepare all food served at the restaurant, most notably
                    Krabby Patties.</p>
                </div>
                <div className="intro-content__info row">
                  <div className="col-4"><b>Age: </b></div><div className="col-8">34</div>
                  <div className="col-4"><b>Residence:  </b></div><div className="col-8">Pacific Ocean</div>
                  <div className="col-4"><b>Address:</b> </div><div className="col-8">124 Conch Street, Bikini Bottom, Pacific Ocean </div>
                  <div className="col-4"><b>E-mail: </b></div><div className="col-8">spongeBob@gmail.com</div>
                  <div className="col-4"><b>Phone:</b></div><div className="col-8">2333333333 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default IntroPage;