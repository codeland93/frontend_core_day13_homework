import React from 'react';
import './Contact.css'; // Importing CSS for styling

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Email: johnwick@example.com</p> {/* Replace with your email */}
      <p>LinkedIn: <a href="https://www.linkedin.com/in/johnwick/">johnwick</a></p> {/* Replace with your LinkedIn */}
    </section>
  );
};

export default Contact;
