import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
      formErrors.email = 'Invalid email';
    }
    if (!formData.message) formErrors.message = 'Message is required';
    setErrors(formErrors);
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
