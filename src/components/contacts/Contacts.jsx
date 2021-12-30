import React from 'react'
import "./contacts.scss"
import { useState } from 'react';



const Contacts = () => {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

    return (
      <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your E-mail here" />
          <textarea placeholder="Please say something! "></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
    )
}

export default Contacts

