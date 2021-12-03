import { useState, useEffect, Fragment, useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import Logo from "../../assets/shared/desktop/logo.svg";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import List from "./List";
import CategoryList from "../shared/CategoryList";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { toggleDisplayCart, cart } = useContext(CartContext);

  const handleClick = (params) => {
    toggleDisplayCart();
  };

  useEffect(() => {
    navOpen
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflowY = "scroll");
  }, [navOpen]);

  const handleOnClick = () => {
    setNavOpen(!navOpen);
  };

  const Links = ["home", "headphones", "speakers", "earphones"];

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

        <div
          onClick={handleOnClick}
          className="cursor-pointer flex items-center md:mr-20 lg:hidden"
        >
          <img src={Hamburger} alt="" />
        </div>

        {/* LOGO */}

        <a href="/">
          <img src={Logo} alt="logo" />
        </a>

        {/* NAV MENU */}

        <ul className="hidden lg:flex lg:item-center lg:ml-auto">
          {Links.map((link, id) => {
            if (id === 0) {
              return <List key={id} text={link.toUpperCase()} link="/" classList="mr-14" />;
            } else {
              return (
                <List key={id} text={link.toUpperCase()} link={`/${link}`} classList="mr-14" />
              );
            }
          })}
        </ul>

        {/* CART IMAGE */}

        <div onClick={handleClick} className="cursor-pointer md:ml-auto relative">
          {cart.length > 0 && (
            <div className="absolute -right-3 -top-4 px-2 text-lg rounded-xl text-white-100 bg-brown-100">
              {cart.length}
            </div>
          )}
          <img src={IconCart} alt="" />
        </div>
      </nav>

      {navOpen && (
        <nav className="z-10 bg-white-300 fixed overflow-y-scroll w-screen h-screen left-0 top-40 md:max-h-100 md:overflow-hidden xl:hidden">
          <CategoryList classList="my-32 " />
        </nav>
      )}
    </Fragment>
  );
};

export default Nav;
