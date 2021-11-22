import React from "react";
import IMG from "../images";
import List from "./List";

const Footer = () => {
  const Links = ["HOME", "HEADPHONES", "SPEAKER", "EARPHONES"];

  return (
    <footer
      className="
    bg-black-100 text-white-100 
    text-center px-10 pb-20
    md:text-left
    "
    >
      <div></div>
      <div className="max-w-screen-xxl mx-auto">
        <nav className="pt-20 lg:flex lg:justify-between lg:items-center">
          <div className="mb-16">
            <img
              src={IMG.shared.logo}
              alt="logo"
              className="w-1/25 mx-auto md:mr-auto md:ml-0 cursor-pointer"
            />
          </div>

          <ul className="mb-16 md:flex">
            {Links.map((link, id) => {
              return <List key={id} text={link} classList="mb-6 md:mr-14 lg:mr-0 lg:ml-14" />;
            })}
          </ul>
        </nav>
        <div>
          <p className="mb-16 opacity-50 lg:w-1/2">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>

          <div className="md:flex justify-between">
            <p className="opacity-50 font-bold">Copyright 2021. All Rights Reserved</p>

            <ul className="social-icons">
              {/* ************ */}
              {/* SVG FACEBOOK */}
              <li className="facebook"></li>
              {/* *********** */}
              {/* SVG TWITTER */}
              <li className="twitter"></li>
              {/* ************* */}
              {/* SVG INSTAGRAM */}
              <li className="instagram"></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
