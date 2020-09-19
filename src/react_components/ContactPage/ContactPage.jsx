import React from 'react';
import Header from './Components/Header.jsx';
import ContactForm from './Components/ContactForm.jsx';
import MyDetails from './Components/MyDetails/MyDetails.jsx';


const ContactPage = () => (
    <section data-page="contact">
      <div className="background">
        <div className="container">
          <div className="contact-page">
            <Header/>
            <div className="contact-page__content row">
              <MyDetails/>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default ContactPage;