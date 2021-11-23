import ProductPage from "../components/product/ProductPage";
import ProductList from "../components/product/ProductList";
const Headphone = () => {
  return (
    <ProductPage productPageName="HEADPHONES">
      {/* HEADPHONE XX9 MARK II */}
      <ProductList
        productName="XX99 Mark II"
        productCategory="Headphones"
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
