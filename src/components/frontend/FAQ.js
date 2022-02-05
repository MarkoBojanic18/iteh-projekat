import React from "react";
import "./FAQ.css";

const Faq = () => {
  return (
    <div className="sectionFaq-faq">
      <div id="headFaq">
        <h1>Frequently asked questions(FAQ)</h1>
        <p id="undertitle">
          {" "}
          We love to hear a word from you. We are grateful for your trust and we
          are here to help you. Here are answers to the most common questions
          you have asked.
        </p>
      </div>
      <div className="conta">
        <div className="accordionFaq">
          <div className="accordionFaq-item" id="que1">
            <a className="accordionFaq-link" href="#que1">
              How can I get a free delivery on SportLine?
              <i class="fas fa-plus" id="plus"></i>
              <i class="fas fa-minus" id="minus"></i>
            </a>
            <div className="answer">
              <p>
                {" "}
                Getting your SportLine.com order delivered for free is simple!
                Free standard delivery is applied automatically (no promo code
                necessary) when your order subtotal meets our minimum order
                requirement ($100) before any delivery charges or taxes are
                applied, and after any discounts are applied.
              </p>
            </div>
          </div>
          <div className="accordionFaq-item" id="que2">
            <a className="accordionFaq-link" href="#que2">
              How will I know Sportline received my order?
              <i class="fas fa-plus" id="plus"></i>
              <i class="fas fa-minus" id="minus"></i>
            </a>
            <div className="answer">
              <p>
                {" "}
                We'll send you a confirmation email once your order has been
                placed and processed. The confirmation will contain your order
                number, your shipping address, and the tracking number. Please
                remember to check your spam folder. You will receive separate
                emails for product and Gift Card orders.
              </p>
            </div>
          </div>
          <div className="accordionFaq-item" id="que3">
            <a className="accordionFaq-link" href="#que3">
              What is the status of my refund?
              <i class="fas fa-plus" id="plus"></i>
              <i class="fas fa-minus" id="minus"></i>
            </a>
            <div className="answer">
              <p>
                {" "}
                Refunds will be issued back to your original form of payment
                within 14 days of when the return is processed. Normal bank
                processing times do apply and may take up to a full billing
                cycle. If you selected the eGift card refund option, please
                check your email after receiving your return confirmation email
                as your refund credit will arrive shortly after.
              </p>
            </div>
          </div>
          <div className="accordionFaq-item" id="que4">
            <a className="accordionFaq-link" href="#que4">
              How can I check the delivery status on my order?
              <i class="fas fa-plus" id="plus"></i>
              <i class="fas fa-minus" id="minus"></i>
            </a>
            <div className="answer">
              <p>
                {" "}
                To check the delivery status of your order, please visit the
                shipping carrier's and input your tracking number: Most items
                will be shipped FedEx. Occasionally items will be shipped via
                USPS as well.
              </p>
            </div>
          </div>
          <div className="accordionFaq-item" id="que5">
            <a className="accordionFaq-link" href="#que5">
              Refund something that is over 30 days old?
              <i class="fas fa-plus" id="plus"></i>
              <i class="fas fa-minus" id="minus"></i>
            </a>
            <div className="answer">
              <p>
                {" "}
                Unfortunately no, any purchases over 90 days old are not be
                eligible for a refund. *Face Covers are not eligible for returns
                or exchanges
              </p>
            </div>
          </div>
          <div className="accordionFaq-item" id="que6">
            <a className="accordionFaq-link" href="#que6">
              Can I exchange my purchase for something else?
              <i class="fas fa-plus" id="plus"></i>
              <i class="fas fa-minus" id="minus"></i>
            </a>
            <div className="answer">
              <p>
                {" "}
                If you’re not satisfied with the fit of your product, we would
                be happy to exchange it for different size. Just contact
                customer service at sportline.com/us/help. Please note that we
                currently cannot exchange for different color or different item.
                Merchandise must be new or unused with box/tags attached.
                Personalized items cannot be exchanged. Items must be exchanged
                no later than 90 days after delivery date. If you would prefer
                to process the exchange yourself, you have that option as well.
              </p>
            </div>
          </div>
          <div className="accordionFaq-item" id="que7">
            <a className="accordionFaq-link" href="#que7">
              When are promotional discounts applied?
              <i class="fas fa-plus" id="plus"></i>
              <i class="fas fa-minus" id="minus"></i>
            </a>
            <div className="answer">
              <p>
                {" "}
                You get them at check out. Just enter your valid promo code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
