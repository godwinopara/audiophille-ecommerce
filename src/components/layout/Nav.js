import React, { Fragment } from "react";
import Logo from "../../assets/shared/desktop/logo.svg";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import List from "./List";

const Nav = () => {
  const Links = ["HOME", "HEADPHONES", "SPEAKER", "EARPHONES"];

  return (
    <Fragment>
      <nav
        className="
        nav-bar
        flex justify-between item-center 
        px-3
        py-14
        md:justify-center
        lg:max-w-screen-xxl mx-auto 
        lg:px-0 
        "
      >
        {/* HAMBURGER MENU*/}

        <div className="cursor-pointer flex items-center md:mr-20 lg:hidden">
          <img src={Hamburger} alt="" />
        </div>

        {/* LOGO */}

        <a href="/">
          <img src={Logo} alt="logo" />
        </a>

        {/* NAV MENU */}

        <ul className="hidden lg:flex lg:item-center lg:ml-auto">
          {Links.map((link, id) => {
            return <List text={link} classList="mr-14" />;
          })}
        </ul>

        {/* NAV FOR TABLET AND MOBILE */}
        <ul className="hidden">
          <List text="Home" />
          <List text="Headphones" />
          <List text="Speakers" />
          <List text="Earphones" />
        </ul>

        {/* CART IMAGE */}

        <div className="cursor-pointer md:ml-auto ">
          <img src={IconCart} alt="" />
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
