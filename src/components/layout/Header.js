import { useContext } from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import CartContext from "../../context/cart/cartContext";

const Header = () => {
  const { cartIsOpen } = useContext(CartContext);
  return (
    <header className="bg-black-100 p-7 relative">
      <Nav />
      {cartIsOpen && <Cart />}
    </header>
  );
};

export default Header;
