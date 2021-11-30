import ProductPage from "../components/product/ProductPage";
import ProductList from "../components/product/ProductList";
import IMG from "../components/shared/images";
const Headphone = () => {
  return (
    <ProductPage productPageName="HEADPHONES">
      {/* HEADPHONE XX9 MARK II */}
      <ProductList
        productName="XX99 Mark II"
        productCategory="Headphones"
        desktopImg={IMG.headphones.xx99MarkTwo}
        tabletImg={IMG.headphones.xx99MarkTwoTablet}
        mobileImg={IMG.headphones.xx99MarkTwoMobile}
        path="xx99-mark-one-headphones"
        productDetails="
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium
        headphone experience by reproducing the balanced depth and precision of studio-quality
        sound.
        "
        classList="bg-xx99MarkTwoMobile md:bg-xx99MarkTwoTablet xl:bg-xx99MarkTwo"
        // className="bg-xx99MarkTwoMobile"
      />
      {/* HEADPHONE XX9 MARK II END */}
      {/* ******************************************************************** */}

      {/* HEADPHONE XX9 MARK I */}
      <ProductList
        productName="XX99 Mark I"
        productCategory="headphones"
        desktopImg={IMG.headphones.xx99MarkOne}
        tabletImg={IMG.headphones.xx99MarkOneTablet}
        mobileImg={IMG.headphones.xx99MarkOneMobile}
        path="xx99-mark-two-headphones"
        productDetails=" 
          As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate
          audio reproduction for audiophiles, mixing engineers, and music aficionados alike in
          studios and on the go.
        "
        classList="bg-xx99MarkOneMobile md:bg- xx99MarkOneTablet xl:bg-xx99MarkOne"
        flexReverse="flex-row-reverse"
      />
      {/* HEADPHONE XX9 MARK I END */}

      {/***** HEADPHONE XX59 *******/}

      <ProductList
        productName="XX59"
        productCategory="headphones"
        desktopImg={IMG.headphones.xx59Mobile}
        tabletImg={IMG.headphones.xx59Tablet}
        mobileImg={IMG.headphones.xx59Mobile}
        path="xx59-headphones"
        productDetails="
          Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59
          headphones. The stylish yet durable versatile wireless headset is a brilliant companion at
          home or on the move.
        "
        classList="bg-xx59Mobile md:bg-xx59Tablet xl:bg-xx59"
      />
      {/**** HEADPHONE XX59 END ****/}
    </ProductPage>
  );
};

export default Headphone;
