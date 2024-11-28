import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or suggestions, feel free to reach out to us. We're here to help you!</p>

     
      <p>Our customer support is available 24/7 to assist you with anything you need.</p>

      <ul>
        <li><strong>Email:</strong> support@swiggyclone.com</li>
        <li><strong>Phone:</strong> +1 234 567 890</li>
        <li><strong>Address:</strong> 123 Food Street, Gourmet City, USA</li>
      </ul>

      
      <p>Stay connected with us on social media:</p>

      <ul>
        <li><strong>Facebook:</strong> facebook.com/swiggyclone</li>
        <li><strong>Instagram:</strong> instagram.com/swiggyclone</li>
        <li><strong>Twitter:</strong> twitter.com/swiggyclone</li>
      </ul>

      <p>Have any feedback? Fill out the form below, and we'll get back to you!</p>

      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" required />

        <label>Email:</label>
        <input type="email" placeholder="Your Email" required />

        <label>Message:</label>
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
