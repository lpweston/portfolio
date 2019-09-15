import React from "react";

const Contact = () => {
  const sendForm = e => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div id="contact" className="box">
      <h2>Contact</h2>
      <form id="contact-form" onSubmit={sendForm}>
        <label>
          Name:
          <input type="text" key="name" required />
        </label>
        <br></br>
        <br></br>
        <label>
          Email:
          <input
            type="text"
            key="email"
            required
            pattern="[\w._-]+@[\w._-]+\.[\w._-]+"
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Message:
          <br></br>
          <textarea key="message" rows="10" cols="40"></textarea>
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
