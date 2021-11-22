import IMG from "../images";

const ShopLink = () => {
  return (
    <li className="flex items-center hover:text-brown-100">
      <a className="mr-5 uppercase text-xl tracking-widest font-bold opacity-50" href="/shop">
        Shop
      </a>
      <img src={IMG.shared.arrow} alt="" className="w-2 h-4" />
    </li>
  );
};

export default ShopLink;
