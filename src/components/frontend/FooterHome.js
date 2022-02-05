import React from "react";
import "./FooterHome.css";

function FooterHome() {
  return (
    <div className="footerHome" id="futer">
      <div className="footerHome-content">
        <div className="footerHome-section about">
          <h1 className="logo-text">
            Sport<span>Line</span>
          </h1>
          <p>
            Our mission is what drives us to do everything possible to expand
            human potential. We do that by creating groundbreaking sport
            innovations, by making our products more sustainably, by building a
            creative and diverse global team and by making a positive impact in
            communities where we live and work.
          </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i>&nbsp; 381-315-389
            </span>
            <span>
              <i className="fas fa-envelope"></i>&nbsp; info@sportline.com
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footerHome-section links">
          <h2>Quick Links</h2>
          <ul>
            <a href="#">
              <li>Events</li>
            </a>
            <a href="#">
              <li>Team</li>
            </a>
            <a href="#">
              <li>Mentores</li>
            </a>
            <a href="#">
              <li>Gallery</li>
            </a>
            <a href="#">
              <li>Terms and Coditions</li>
            </a>
          </ul>
        </div>
        <div className="footerHome-section contact-form">
          <h2>Contact us</h2>
          <br />
          <form action="indexNaslovna.html" method="post">
            <input
              type="email"
              name="email"
              className="text-input contact-input"
              placeholder="Your email adress..."
            />
            <textarea
              name="message"
              className="text-input contact-input"
              placeholder="Your message..."
            ></textarea>
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footerHome-bottom">
        &copy; SportLine.com | Designed by Marko and Danilo
      </div>
    </div>
  );
}

export default FooterHome;
