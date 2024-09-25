import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Grains Store</span>
        <a href="/" className="link link-hover text-white">Home</a>
        <a href="/cart" className="link link-hover text-white">Cart</a>
        <a href="/feedback" className="link link-hover text-white">Feedback</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <p className="text-white">grainsgrow@gmail.com</p>
        <p className="text-white">9865084204</p>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover text-white">Terms of use</a>
        <a href="/" className="link link-hover text-white">Privacy policy</a>
        <a href="/" className="link link-hover text-white">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
