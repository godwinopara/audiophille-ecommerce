import React, { Fragment } from "react";
import Logo from "../../assets/shared/desktop/logo.svg";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";

const Nav = () => {
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
        {/* Hamburger Menu */}

        <div className="cursor-pointer flex items-center md:mr-20 lg:hidden">
          <img src={Hamburger} alt="" />
        </div>

        {/* Logo */}

        <a href="/">
          <img src={Logo} alt="logo" />
        </a>

        {/* Nav Menu */}

        <ul className="hidden lg:flex lg:item-center lg:ml-auto">
          <List text="Home" link />
          <List text="Headphones" />
          <List text="Speakers" />
          <List text="Earphones" />
        </ul>
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

const List = ({ text, link }) => {
  return (
    <li className="text-white-300 text-xl font-bold uppercase mr-14">
      <a className="hover:text-brown-100" href={`/${link}`}>
        {text}
      </a>
    </li>
  );
};
