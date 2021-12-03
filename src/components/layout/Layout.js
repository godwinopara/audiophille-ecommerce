import { Fragment, useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import Cart from "./Cart";

const Layout = ({ children }) => {
  const { cartIsOpen } = useContext(CartContext);
  return (
    <Fragment>
      <header className="bg-black-100 p-7 relative">
        <Nav />
        {cartIsOpen && <Cart />}
      </header>
      <main className="lg:px-0">{children}</main>
      <About />
      <Footer />
    </Fragment>
  );
};

export default Layout;
