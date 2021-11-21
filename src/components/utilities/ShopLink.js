import Arrow from "../assets/shared/desktop/icon-arrow-right.svg";

const ShopLink = () => {
  return (
    <li className="flex">
      <a className="mr-5" href="/shop">
        Shop Now
      </a>
      <img src={Arrow} alt="" />
    </li>
  );
};

export default ShopLink;
