import { useParams } from "react-router";
import Layout from "../components/layout/Layout";
import CategoryList from "../components/shared/CategoryList";
import xx99 from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx99T from "../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import xx99M from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

import xx99Mark1 from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx99Mark1Tab from "../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import xx99Mark1Mob from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";

import Picture from "../components/shared/Picture";
import NewProduct from "../components/shared/NewProduct";
import Heading2 from "../components/shared/Heading2";
import Description from "../components/shared/Description";
import Span from "../components/shared/Span";
import Button from "../components/shared/Button";
import { useContext, useEffect, useState } from "react";
import AudioPhilleContext from "../context/audioPhileContext";

const ProductDetails = () => {
  // const { id } = useParams();
  const { getProduct, product, isLoading } = useContext(AudioPhilleContext);

  useEffect(() => {
    getProduct("yx1-earphones");
    console.log(product);
  }, []);

  return (
    <Layout>
      <section
        className="px-1const getProduct = (id) => {
    const product = state.products.filter((product) => {
      return product.id === id;
    });

    dispatch({
      type: GET_PRODUCT,
      payload: product[0],
    });
  };

  getProduct();0 xl:px-0 xl:max-w-screen-xxl xl:mx-auto"
      >
        {/* ************************** */}
        <div className="py-8 bg-opacity-50">Go Back</div>
        {/* ******************************** */}

        {/* ************************************** */}
        <section className="xl:flex xl:justify-between">
          <Picture desktopImg={xx99} tabletImg={xx99T} mobileImg={xx99M} classList="rounded xl" />
          <div>
            <NewProduct />
            <Heading2 productName={product.name} productCategory="" />
            <Description description={product.description} />
            <span className="inline-block font-bold text-3xl mb-12">{`$${product.price}`}</span>
            <div className=" sm:flex items-center">
              <div className="mb-8 flex items-center sm:mb-0 sm:mr-4">
                <Span text="-" classList="text-white-400 " />
                <Span text="0" />
                <Span text="+" classList="text-white-400" />
              </div>
              <input
                type="button"
                value="ADD TO CART"
                className="py-6 px-14 font-bold text-xl tracking-widest leading-7 bg-brown-100 hover:bg-brown-200 text-white-300"
              />
            </div>
          </div>
        </section>
        {/* ********************************************** */}

        {/* ************* FEATURES *********************** */}
        <section className="mt-32">
          <h3 className="font-bold leading-36 text-3xxl mb-10">FEATURES</h3>
          <Description description={product.features} />
          <Description description={product.features1} />
        </section>

        <section className="my-32">
          <h3 className="font-bold leading-36 text-3xxl mb-10">IN THE BOX</h3>
          <div>
            <span>1x</span>
            <span>Headphone Unit</span>
          </div>
          <div>
            <span>2x</span>
            <span>Replacement Earcups</span>
          </div>
          <div>
            <span>1x</span>
            <span>User Manual</span>
          </div>
          <div>
            <span>1x</span>
            <span>3.5mm 5m Audio Cable</span>
          </div>
        </section>

        <section className="grid gap-y-8 mb-48">
          <Picture
            // desktopImg={product.gallery.first.desktop}
            // tabletImg={product.gallery.first.tablet}
            mobileImg={product.image.mobile}
            classList=""
          />

          {/* <img src={product[0]} alt="" /> */}

          {/* <Picture
            desktopImg={product.second.desktop}
            tabletImg={product.second.tablet}
            mobileImg={product.second.mobile}
          /> */}
          {/* <Picture
            desktopImg={product.third.desktop}
            tabletImg={product.third.tablet}
            mobileImg={product.third.mobile}
          /> */}
        </section>

        <section className="text-center mb-28">
          <h3 className="font-bold leading-36 text-3xxl mb-16">YOU MAY ALSO LIKE</h3>
          <div className="mb-20">
            <Picture desktopImg={xx99Mark1} tabletImg={xx99Mark1Tab} mobileImg={xx99Mark1Mob} />
            <h3 className="font-bold leading-36 text-3xx my-14">IN THE BOX</h3>
            <Button classList="bg-brown-100 text-white-100 hover:bg-brown-200" />
          </div>
          <div className="mb-20">
            <Picture desktopImg={xx99Mark1} tabletImg={xx99Mark1Tab} mobileImg={xx99Mark1Mob} />
            <h3 className="font-bold leading-36 text-3xx my-14">IN THE BOX</h3>
            <Button classList="bg-brown-100 text-white-100 hover:bg-brown-200" />
          </div>
          <div className="mb-20">
            <Picture desktopImg={xx99Mark1} tabletImg={xx99Mark1Tab} mobileImg={xx99Mark1Mob} />
            <h3 className="font-bold leading-36 text-3xx my-14">IN THE BOX</h3>
            <Button classList="bg-brown-100 text-white-100 hover:bg-brown-200" />
          </div>
        </section>
      </section>
      <CategoryList />
    </Layout>
  );
};

export default ProductDetails;
