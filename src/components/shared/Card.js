import ShopLink from "./ShopLink";

const Card = ({ img, categoryName, path }) => {
  return (
    <li className="bg-white-100 rounded-xl p-10 relative h-64  flex flex-col justify-center items-center">
      <img
        src={img}
        alt="product card"
        className="w-52 h-auto absolute -top-20
      "
      />
      <p className="font-bold text-2xl tracking-widest mb-7 mt-14">{categoryName}</p>
      <ShopLink path={path} />
    </li>
  );
};

export default Card;
