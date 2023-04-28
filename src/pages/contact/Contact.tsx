import { ImMobile2 } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

import "./contact.css";
import { Butto } from "../../components/button/Button";
import Min from "../../components/min/Min";
import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

type Props = {};

function Contact({}: Props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef<HTMLFormElement>(null!);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_fev6wn7",
        "template_pxso46i",
        form.current,
        "QU9PW2vVvLMnJzkwn"
      )
      .then(
        (result) => {
          console.log("sent", result.text);
          if (result.text === "OK") {
            alert("Your Message has been submit");
            form.current.reset();
          } else {
            alert("Error happened when submitting the form");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    event.value = "";
  };

  return (
    <div className="contact__container">
      <Min name="Contact" />
      <div className="middle contact__wrapper">
        <img src="" alt="" />
        <div className="contact__grid">
          <div className="contact__item">
            <ImMobile2 className="contact__icon" />
            <h3 className="contact__detail">+256741811908</h3>
            <p className="contact__lo">Monday - Friday from 7am - 5pm</p>
          </div>
          <div className="contact__item">
            <GoLocation className="contact__icon" />
            <h3 className="contact__detail">Kampala, Uganda</h3>
            <p className="contact__lo">Central Division</p>
          </div>
          <div className="contact__item">
            <HiOutlineMail className="contact__icon" />
            <h3 className="contact__detail">samsonlwanga2@gmail.com</h3>
            <p className="contact__lo">Contact me every time!</p>
          </div>
        </div>
      </div>
      <div className="contact__form">
        <div className="form__div">
          <div className="form__head">
            <h2 className="form__title">Get In Touch</h2>
            <div className="form__link"></div>
          </div>

          <form ref={form} onSubmit={handleSubmit}>
            <div className="form__inputz">
              <input
                type="text"
                className="form__input"
                placeholder="Enter your name"
                name="name"
              />
              <br />
              <input
                type="email"
                className="form__input"
                placeholder="Enter your email"
                name="email"
              />
              <br />
              <textarea
                name="message"
                id=""
                cols={30}
                rows={10}
                className="form__input"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <Butto name="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
