import Button from "../shared/Button";
import Description from "../shared/Description";
import Heading2 from "../shared/Heading2";
import NewProduct from "../shared/NewProduct";
import Picture from "../shared/Picture";

const ProductList = ({
  productName,
  productCategory,
  productDetails,
  desktopImg,
  tabletImg,
  mobileImg,
  flexReverse,
}) => {
  return (
    <section className={`mb-48 xl:flex xl:items-center xl:gap-x-48 ${flexReverse}`}>
      {/* <div
        className={`h-100 bg-cover bg-center bg-no-repeat  bg-white-100 rounded-xl 
        md:w-full md:h-150 md:bg-contain xl:h-200 xl:flex-1
        ${classList}
      `}
      >
        {/********** PRODUCT BACKGROUND IMAGE **************/}
      {/* </div> */}
      <div className="w-6/12">
        <Picture
          desktopImg={desktopImg}
          tabletImg={tabletImg}
          mobileImg={mobileImg}
          classList="rounded-xl"
        />
      </div>

      {/* ************************************* */}
      {/* *********** PRODUCT INFO ************ */}
      <div className="xl:text-left xl:flex-1">
        <NewProduct />
        <Heading2 productName={productName} productCategory={productCategory} />
        <Description
          classList="text-black-100 md:w-4/5 md:mx-auto xl:mx-0 xl:w-full"
          description={productDetails}
        />
        <Button classList="bg-brown-100 text-white-100 hover:bg-brown-200" />
      </div>
      {/************ PRODUCT INFO END **********/}
    </section>
  );
};
export default ProductList;
