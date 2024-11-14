// src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email address:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
