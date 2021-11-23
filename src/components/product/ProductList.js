import Button from "../shared/Button";

const ProductList = ({ productName, productDetails, classList }) => {
  return (
    <section className="mb-48 xl:grid xl:grid-cols-2 xl:place-items-center xl:gap-x-48">
      <div
        className={`
        h-100 bg-auto bg-center bg-no-repeat  bg-white-100 rounded-xl 
        md:w-full md:h-150 md:bg-contain xl:h-200
        ${classList}
      `}
      >
        {/* Product Image */}
      </div>
      <div className="xl:text-left">
        <p className="text-brown-100 tracking-veryWide my-12 xl:mt-0">NEW PRODUCT</p>
        <h2 className="uppercase text-black-300 mb-10 text-4xxl leading-40 font-bold md:text-8xl md:leading-58">
          {productName}
          <br />
          HEADPHONES
        </h2>
        <p className="mb-10 md:w-4/5 md:mx-auto xl:mx-0 ">{productDetails}</p>
        <Button classList="bg-brown-100 text-white-100 hover:bg-brown-200" />
      </div>
    </section>
  );
};
export default ProductList;
