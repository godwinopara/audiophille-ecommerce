import ProductList from "../components/product/ProductList";
import ProductPage from "../components/product/ProductPage";
import IMG from "../components/shared/images";

const Speaker = () => {
  return (
    <ProductPage productPageName="SPEAKERS">
      {/* SPEAKER ZX9 BEGIN */}
      <ProductList
        productName="zx9"
        productCategory="speaker"
        desktopImg={IMG.speakers.zx9}
        tabletImg={IMG.speakers.zx9Tablet}
        mobileImg={IMG.speakers.zx9Mobile}
        productDetails="
            Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
            system that offers truly wireless connectivity -- creating new possibilities for more 
            pleasing and practical audio setups."
        //
        classList="bg-ZX9Mobile md:bg-ZX9Tab xl:bg-ZX9"
      />
      {/* SPEAKER ZX9 END */}
      {/* ******************************************************
       **********************************************************/}

      {/* SPEAKER ZX7 BEGIN */}
      <ProductList
        productName="zx7"
        productCategory="speaker"
        desktopImg={IMG.speakers.zx7}
        tabletImg={IMG.speakers.zx7Tablet}
        mobileImg={IMG.speakers.zx7Mobile}
        productDetails=" 
            Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses 
            high-end audiophile components that represents the top of the line powered speakers for 
            home or studio use."
        //
        classList="bg-ZX7Mobile md:bg-ZX7Tab xl:bg-ZX7"
        //
        flexReverse="flex-row-reverse" // Passed the className as a prop to change the flex position
      />

      {/* SPEAKER ZX7 END */}
    </ProductPage>
  );
};

export default Speaker;
