import React from 'react';

const Contact = () => {
  return (
    <>
    <header className="sub-header">
       <h1>Contact Us</h1>
       </header> 


      <section className="location" data-aos="flip-left">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.196818117216!2d74.32519217465075!3d31.518753847223593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190488fcc9700b%3A0xbb6e16062b9b11ad!2sMuslim%20Town%20Mor%20Flyover%2C%20Gulberg%20III%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702103303181!5m2!1sen!2s"
          width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col" data-aos="flip-right">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>MUSLIM MOR NEAR CANAL STATION</h5>
                <p>LAHORE, PUNJAB, PAKISTAN</p>
              </span>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+923466523938</h5>
                <p>MONDAY TO FRIDAY, 11AM TO 11PM</p>
              </span>
            </div>

            <div>
              <i className="fa fa-envelope-o"></i>
              <span>
                <h5>gkaoun2@gmail.com</h5>
                <p>EMAIL US YOUR QUERY</p>
              </span>
            </div>
          </div>

          <div className="contact-col" data-aos="flip-left">
            <form className="contact-form" autoComplete="active" action="contact.php" method="post">
              <input type="text" placeholder="Enter your name" name="name" required />
              <input type="email" placeholder="Enter your Email" name="email" required />
              <input type="text" placeholder="Enter your Subject" name="subject" required />
              <textarea rows="8" placeholder="Enter your comment" name="comment" required></textarea>
              <button type="submit" className="hero-butn red-butn">Enroll Now</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
