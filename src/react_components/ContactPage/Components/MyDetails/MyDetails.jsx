import React from "react";
import map from '../../../../assets/img/map.png';
import location from '../../../../assets/img/location.png';
import mail from '../../../../assets/img/mail.png';
import phone from '../../../../assets/img/phone.png';
import tick from '../../../../assets/img/tick.png';
import Title from "./Components/Title.jsx";
import Map from "./Components/Map.jsx"
import ContactItem from "./Components/ContactItem.jsx";

const MyDetails = () => (
  <div className="mycontact col-md-6 col-sm-12">
    <Title/>
    <Map img={map}/>
    <ContactItem img ={location}>Bikini Bottom</ContactItem>
    <ContactItem img ={mail}>spongeBob@gmail.com</ContactItem>
    <ContactItem img ={phone}>+23 2333 3333</ContactItem>
    <ContactItem img ={tick}>Hire Me!</ContactItem>
  </div>
);

export default MyDetails;
