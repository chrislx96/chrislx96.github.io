import React from "react";
import style from "./contactForm.scss";

const ContactForm = () => (
  <div className={`${style.myform} col-md-6 col-sm-12`}>
    <h3>Contact Form</h3>
    <form action="" method="POST">
      <p>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="fullname"
          placeholder="Full Name Please"
          required
        />
      </p>
      <p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Please"
          required
        />
      </p>
      <p>
        <label htmlFor="tel">Telephone:</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          placeholder="XXX-XXX-XXXX"
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
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
);

export default ContactForm;
