import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: value === '' || (name === 'email' && !validateEmail(value)) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name === '',
      email: formData.email === '' || !validateEmail(formData.email),
      message: formData.message === '',
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      // Submit form or handle successful validation
      console.log('Form data:', formData);
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <span className="error">This field is required</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <span className="error">Invalid email address</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {errors.message && <span className="error">This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
