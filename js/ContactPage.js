import React from 'react';

const ContactPage = () => (
    <section data-page="contact">
      <div className="background">
        <div className="container">
          <div className="contact-page">
            <div className="contact-page__header"><h2>Contact</h2></div>
            <div className="contact-page__content row">
              <div className="mycontact col-md-6 col-sm-12">
                <h3>Get in Touch</h3>
                <img className="mycontact__map" src="assets/img/map.png" />
                <div className="mycontact__item">
                  <img src="assets/img/location.png" />
                  <h6>Bikini Bottom</h6>
                </div>
                <div className="mycontact__item">
                  <img src="assets/img/mail.png" />
                  <h6>spongeBob@gmail.com</h6>
                </div>
                <div className="mycontact__item">
                  <img src="assets/img/phone.png" />
                  <h6>+23 2333 3333</h6></div>
                <div className="mycontact__item">
                  <img src="assets/img/tick.png" />
                  <h6>Hire Me!</h6>
                </div>
              </div>
              <div className="myform col-md-6 col-sm-12">
                <h3>Contact Form</h3>
                <form action="" method="POST">
                  <p>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="fullname" placeholder="Full Name Please" required />
                  </p>
                  <p>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email Please" required />
                  </p>
                  <p>
                    <label htmlFor="tel">Telephone:</label>
                    <input type="tel" id="tel" name="tel" placeholder="XXX-XXX-XXXX" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                  </p>
                  <p>
                    <label htmlFor="messages">Messages: </label>
                    <textarea id="messages" name="messages" cols="22" rows="4"></textarea>
                  </p>
                  <p>                  
                    <input type="submit" value="Submit" />
                  </p>
                </form> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default ContactPage;