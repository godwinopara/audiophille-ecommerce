import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import AudioPhilleContext from "../context/audioPhileContext";

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

const ProductDetails = () => {
  // const { id } = useParams();
  const { getProduct, product, isLoading } = useContext(AudioPhilleContext);

  useEffect(() => {
    getProduct("yx1-earphones");
    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return "loading.....";
  } else {
    return (
      <Layout>
        <section className="px-10 xl:px-0 xl:max-w-screen-xxl xl:mx-auto">
          {/* ************************** */}
          <div className="py-8 bg-opacity-50">Go Back</div>
          {/* ******************************** */}

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
            <div className="flex-1 md:ml-28">
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
                <Input
                  value="ADD TO CART"
                  classList="bg-brown-100 hover:bg-brown-200 text-white-300"
                />
              </div>
            </div>
          </section>
          {/* ********************************************** */}

          {/* ************* FEATURES *********************** */}
          <section className="mt-32">
            <Heading3 text="FEATURES" />
            <Description description={product.features} />
            <Description description={product.features1} />
          </section>

          <section className="my-32">
            <Heading3 text="IN THE BOX" />
            <Table items={product.includes} />
          </section>

          <section className="grid gap-y-8 mb-48">
            <Picture
              desktopImg={product.gallery.first.desktop}
              tabletImg={product.gallery.first.tablet}
              mobileImg={product.gallery.first.mobile}
              classList="rounded-xl"
            />
            <Picture
              desktopImg={product.gallery.second.desktop}
              tabletImg={product.gallery.second.tablet}
              mobileImg={product.gallery.second.mobile}
              classList="rounded-xl"
            />
            <Picture
              desktopImg={product.gallery.third.desktop}
              tabletImg={product.gallery.third.tablet}
              mobileImg={product.gallery.third.mobile}
              classList="rounded-xl"
            />
          </section>

          <section className="text-center mb-28 md:flex">
            <h3 className="font-bold leading-36 text-3xxl mb-16">YOU MAY ALSO LIKE</h3>
            <div>
              {product.others.map((otherProducts, id) => {
                return (
                  <div key={id} className="mb-20">
                    <Picture
                      desktopImg={otherProducts.image.desktop}
                      tabletImg={otherProducts.image.tablet}
                      mobileImg={otherProducts.image.mobile}
                    />
                    <Heading3 text={product.others[0].name} />
                    <Button classList="bg-brown-100 text-white-100 hover:bg-brown-200" />
                  </div>
                );
              })}
            </div>
          </section>
        </section>
        <CategoryList />
      </Layout>
    );
  }
};

export default ProductDetails;
