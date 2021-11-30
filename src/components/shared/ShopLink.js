import { Link } from "react-router-dom";
import IMG from "./images";

const ShopLink = ({ path }) => {
  return (
    <div className="flex items-center hover:text-brown-100">
      <Link className="mr-5 uppercase text-xl tracking-widest font-bold opacity-50" to={`/${path}`}>
        Shop
      </Link>
      <img src={IMG.shared.arrow} alt="" className="w-2 h-4" />
    </div>
  );
};

export default ShopLink;
