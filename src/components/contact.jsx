import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-main">
        <form className="form-div" action="/">
          <div className="form-sub-div-1">
            <div className="form-input-div">
              <label className="contact-input-label" htmlFor="first-name">
                <b>First Name</b>
              </label>
              <input
                type="text"
                className="contact-input-field"
                placeholder="First Name"
              />
            </div>
            <div className="form-input-div">
              <label className="contact-input-label" htmlFor="last-name">
                <b>Last Name</b>
              </label>
              <input
                type="text"
                className="contact-input-field"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-sub-div-2">
            <div className="form-input-div">
              <label className="contact-input-label" htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                className="contact-input-field"
                placeholder="Email Address"
              />
            </div>
            <div className="form-input-div">
              <label className="contact-input-label" htmlFor="subject">
                <b>Subject</b>
              </label>
              <input
                type="text"
                className="contact-input-field"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="form-input-div">
            <label className="contact-input-label" htmlFor="msg"><b>Your Message</b></label>
            <textarea
              className="msg-field"
              type="textarea"
              placeholder="Your message"
              wrap='hard'
            />
          </div>
          <div className="form-button-div">
            <button type="submit" className="form-button">Submit</button>
        </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
