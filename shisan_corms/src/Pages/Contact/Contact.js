import React from "react";
import "../../Styles/Contact.css";

export default function Contact() {
  return (
    <div className="section__container contact__container card" id="contact">
      <div className="contact__content">
        <h2 className="section__header">Contact Us</h2>
        <p>
          Reach our location here :
        </p>
        <br />
       
      </div>
      <div className="contact__map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.034577006415!2d80.24966947463288!3d13.033470113519702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b505c10c3b%3A0x9fab9853732aabf3!2sShisan%20Technologies!5e0!3m2!1sen!2sin!4v1698478410771!5m2!1sen!2sin"
          width="100%"
          height="450px"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          title="Shisan Technologies Location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
