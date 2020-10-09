import React from "react";
import Header from "./Components/Header.jsx";
import ContactForm from "./Components/ContactForm.jsx";
import MyDetails from "./Components/MyDetails/MyDetails.jsx";
import style from "./contactPage.scss";
import commonStyle from "../app.scss";
class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentPage } = this.props;
    return (
      currentPage === "contact" && (
        <section data-page="contact">
          <div className={commonStyle.background}>
            <div className={commonStyle.container}>
              <div className={style.contactPage}>
                <Header />
                <div className={`${style.content} row`}>
                  <MyDetails />
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    );
  }
}
export default ContactPage;
