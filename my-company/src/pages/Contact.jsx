import { useState } from "react";
import React from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <button
          style={{
            textAlign: "center",
            backgroundColor: "blue",
            border: "none",
            paddin: "10px 10px",
            color: "white",
            borderRadius: "10px",
          }}
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
