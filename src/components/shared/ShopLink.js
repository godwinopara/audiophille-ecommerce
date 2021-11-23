import IMG from "./images";

const ShopLink = () => {
  return (
    <div className="flex items-center hover:text-brown-100">
      <a className="mr-5 uppercase text-xl tracking-widest font-bold opacity-50" href="/shop">
        Shop
      </a>
      <img src={IMG.shared.arrow} alt="" className="w-2 h-4" />
    </div>
  );
};

export default ShopLink;
