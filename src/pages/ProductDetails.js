import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import AudioPhilleContext from "../context/audioPhileContext";
import CartContext from "../context/cart/cartContext";

import Layout from "../components/layout/Layout";
import CategoryList from "../components/shared/CategoryList";
import Picture from "../components/shared/Picture";
import NewProduct from "../components/shared/NewProduct";
import Heading2 from "../components/shared/Heading2";
import Heading3 from "../components/shared/Heading3";
import Description from "../components/shared/Description";
import Span from "../components/shared/Span";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Table from "../components/shared/Table";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();
  const { getProduct, product, isLoading } = useContext(AudioPhilleContext);
  const { addToCart, cart } = useContext(CartContext);

  useEffect(() => {
    getProduct(slug);
    //eslint-disable-next-line
  }, [cart]);

  /* ADD THE ITEM TO THE CART */

  const handleClick = (e) => {
    e.preventDefault();
    addToCart({ name: product.cartName, image: product.cartImage, amount: `${product.price}` });
  };

  /* ******************* */

  if (isLoading) {
    return "loading.....";
  } else {
    return (
      <Layout>
        <section className="px-10 xl:px-0 xl:max-w-screen-xxl xl:mx-auto">
          {/* ************************** */}
          <div className="my-20 bg-opacity-50">
            <Link className="opacity-50" to={`/${product.category}`}>
              Go Back
            </Link>
          </div>
          {/* ******************************** */}

          {/* OVERLAY */}

          {/* ************************************** */}
          <section className="md:flex md:justify-between md: items-center">
            <div className="flex-1">
              <Picture
                desktopImg={product.image.desktop}
                tabletImg={product.image.tablet}
                mobileImg={product.image.mobile}
                classList="rounded xl"
              />
            </div>
            <div className="flex-1 md:ml-28 xl:ml-48">
              <NewProduct />
              <Heading2 productName={product.name} productCategory="" />
              <Description description={product.description} />
              <span className="inline-block font-bold text-3xl mb-12 tracking-widest uppercase">{`$${product.price}`}</span>
              <div className=" sm:flex items-center">
                <div className="mb-8 flex items-center sm:mb-0 sm:mr-4">
                  <Span text="-" classList="text-white-400 " />
                  <Span text="0" />
                  <Span text="+" classList="text-white-400" />
                </div>
                <Input
                  value="ADD TO CART"
                  classList="bg-brown-100 hover:bg-brown-200 text-white-300 font-bold"
                  onClick={handleClick}
                />
              </div>
            </div>
          </section>
          {/* ********************************************** */}

          {/* ************* FEATURES *********************** */}
          <section className="my-32 xl:flex justify-between ">
            <section className=" xl:flex-1 xl:mr-48">
              <Heading3 text="FEATURES" />
              <Description description={product.features} />
              <Description description={product.features1} />
            </section>

            <section className="md:mt-32 md:flex xl:flex-1 xl:block xl:mt-0 justify-center">
              <Heading3 text="IN THE BOX" classList="md:flex-1 md:mt-0 xl:mt-12" />
              <Table items={product.includes} />
            </section>
          </section>

          <section className="flex flex-col gap-y-8 mb-48 md:flex-row">
            <div className="flex flex-col justify-between md:mr-8">
              <Picture
                desktopImg={product.gallery.first.desktop}
                tabletImg={product.gallery.first.tablet}
                mobileImg={product.gallery.first.mobile}
                classList="rounded-xl mb-8"
              />

              <Picture
                desktopImg={product.gallery.second.desktop}
                tabletImg={product.gallery.second.tablet}
                mobileImg={product.gallery.second.mobile}
                classList="rounded-xl"
              />
            </div>
            <div className="h-full">
              <Picture
                desktopImg={product.gallery.third.desktop}
                tabletImg={product.gallery.third.tablet}
                mobileImg={product.gallery.third.mobile}
                classList="rounded-xl"
              />
            </div>
          </section>

          {/*LIST OTHER AVAILABLE PRODUCTS IN THE STORE */}

          <section className="text-center mb-28 lg:mb-64">
            <Heading3 text="you may also like" classList="mb-24" />
            <div className="md:grid md:grid-cols-3 md:gap-x-5 lg:gap-x-12">
              {product.others.map((otherProducts, id) => {
                return (
                  <div key={id} className="mb-20">
                    <Picture
                      desktopImg={otherProducts.image.desktop}
                      tabletImg={otherProducts.image.tablet}
                      mobileImg={otherProducts.image.mobile}
                      classList="rounded-xl"
                    />
                    <Heading3 text={otherProducts.name} />
                    <Button
                      classList="bg-brown-100 text-white-100 hover:bg-brown-200"
                      path={otherProducts.slug}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </section>

        {/* AUDIO CATEGORIES LIST */}
        <CategoryList />
      </Layout>
    );
  }
};

export default ProductDetails;
