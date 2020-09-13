import React from 'react';

const HobbyPage = () => (
    <section data-page="hobby">
      <div className="background">
        <div className="container">
          <div className="hobby-page">
            <div className="hobby-page__header"><h2>My Hobbies</h2></div>
            <div className="hobby-page__content row">
              <div className="hobby-item col-lg-3 col-md-6 col-sm-12">
                <img className="hobby-item__img" src="assets/img/baking.png" />
                <h4>Baking</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem magnam laudantium quod incidunt. Commodi repellendus nisi iure!</p>
              </div>
              <div className="hobby-item col-lg-3 col-md-6 col-sm-12">
                <img className="hobby-item__img" src="assets/img/headphones.png" />
                <h4>Hobby 2</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem magnam laudantium quod incidunt. Commodi repellendus nisi iure!</p>
              </div>
              <div className="hobby-item col-lg-3 col-md-6 col-sm-12">
                <img className="hobby-item__img" src="assets/img/meditation.png" />
                <h4>Hobby 3</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem magnam laudantium quod incidunt. Commodi repellendus nisi iure!</p>
              </div>
              <div className="hobby-item col-lg-3 col-md-6 col-sm-12">
                <img className="hobby-item__img" src="assets/img/study.png" />
                <h4>Hobby 4</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem magnam laudantium quod incidunt. Commodi repellendus nisi iure!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default HobbyPage;