import React from "react";
import IMG from "../images";
import List from "./List";

const Footer = () => {
  const Links = ["HOME", "HEADPHONES", "SPEAKER", "EARPHONES"];

  return (
    <footer className="bg-black-100 text-white-100 text-center px-10 pb-20">
      <div></div>
      <nav className="pt-20">
        <div className="mb-16">
          <img src={IMG.shared.logo} alt="logo" className="w-1/25 mx-auto" />
        </div>

        <ul className="mb-16 grid place-items-center">
          {Links.map((link, id) => {
            if (id !== link.length - 1) {
              return <List key={id} text={link} classList="mb-6" />;
            } else {
              return <List key={id} text={link} />;
            }
          })}
        </ul>
      </nav>
      <div>
        <div>
          <p className="mb-16 opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <p className="opacity-50 font-bold">Copyright 2021. All Rights Reserved</p>
        </div>

        <ul className="social-icons">
          <li className="facebook"></li>
          <li className="twitter"></li>
          <li className="instagram"></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
