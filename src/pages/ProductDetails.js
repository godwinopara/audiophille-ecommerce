import { useParams } from "react-router";
import Layout from "../components/layout/Layout";
import CategoryList from "../components/shared/CategoryList";
import xx99 from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx99G1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import xx99G2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import xx99G3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import xx99T from "../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import xx99G1T from "../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import xx99G2T from "../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import xx99G3T from "../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import xx99M from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx99G1M from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import xx99G2M from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import xx99G3M from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import Picture from "../components/shared/Picture";
import NewProduct from "../components/shared/NewProduct";
import Heading2 from "../components/shared/Heading2";
import Description from "../components/shared/Description";
import Span from "../components/shared/Span";
import Button from "../components/shared/Button";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <Layout>
      <section className="px-10 xl:px-0 xl:max-w-screen-xxl xl:mx-auto">
        {/* ************************** */}
        <div className="py-8 bg-opacity-50">Go Back</div>
        {/* ******************************** */}

        {/* ************************************** */}
        <section className="xl:flex xl:justify-between">
          <Picture desktopImg={xx99} tabletImg={xx99T} mobileImg={xx99M} classList="rounded xl" />
          <div>
            <NewProduct />
            <Heading2 productName="xx99 mark II" productCategory="headphones" />
            <Description
              description="
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the balanced depth and
              precision of studio-quality sound."
            />
            <p className="font-bold text-3xl mb-12">$ 2,999</p>
            <div className="flex items-center justify-between">
              <div className="bg-white-100">
                <Span text="-" classList="text-black-200 opacity-25" />
                <Span text="0" />
                <Span text="+" classList="opacity-25" />
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
          <Description
            description="
            Featuring a genuine leather head strap and premium earcups, these headphones deliver superior 
            comfort for those who like to enjoy endless listening. It includes intuitive controls designed 
            for any situation. Whether you’re taking a business call or just in your own personal space, the 
            auto on/off and pause features ensure that you’ll never miss a beat.
            "
          />
          <Description
            description="
            The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio 
            world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings 
            when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the 
            XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
          "
          />
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

        <section className="grid gap-y-8">
          <Picture desktopImg={xx99G1} tabletImg={xx99G1T} mobileImg={xx99G1M} />
          <Picture desktopImg={xx99G2} tabletImg={xx99G2T} mobileImg={xx99G2M} />
          <Picture desktopImg={xx99G3} tabletImg={xx99G3T} mobileImg={xx99G3M} />
        </section>

        <section>
          <h3 className="font-bold leading-36 text-3xxl mb-10">YOU MAY ALSO LIKE</h3>

          <div>
            <img src="" alt="" />
            <h3 className="font-bold leading-36 text-3xxl mb-10">IN THE BOX</h3>
            <Button classList="bg-brown-100 text-white-100 hover:bg-brown-200" />
          </div>
        </section>
      </section>
      <CategoryList />
    </Layout>
  );
};

export default ProductDetails;
