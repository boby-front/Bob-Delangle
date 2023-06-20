import React from "react";
import "../../components/contact/contact.css";
import phone from "../../assets/logo_skill/phone.png";
import mail from "../../assets/logo_skill/mail.png";
import In from "../../assets/logo_skill/in.png";

const Contact = () => {
  return (
    <article className="article-contact" id="contact">
      <h1 className="textCenter">Contacts</h1>
      <div className="line"></div>
      <p className="textCenter">
        Besoin d'informations ? Un projet ? Discutons en !
      </p>

      <section className="groupe-contacts">
        <a
          href="tel:+33675533646"
          className="link-contact affiche-link vasille-effect"
        >
          <img src={phone} alt="" className="phone " />
        </a>

        <a
          href="mailto:delanglebob38@gmail.com"
          className="link-contact affiche-link vasille-effect"
        >
          <img src={mail} alt="" className="mail" />
        </a>

        <a
          href="https://www.linkedin.com/in/bob-delangle-520ba5252/"
          target="_blank"
          className=" vasille-effect"
        >
          <img src={In} alt="" />
        </a>
      </section>
    </article>
  );
};

export default Contact;
