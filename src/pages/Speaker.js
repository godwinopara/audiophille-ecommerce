import ProductList from "../components/product/ProductList";
import ProductPage from "../components/product/ProductPage";
import Picture from "../components/shared/Picture";
import m from "../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";

const Speaker = () => {
  return (
    <ProductPage>
      {/* SPEAKER ZX9 BEGIN */}
      <ProductList
        productName="zx9"
        productCategory="speaker"
        productDetails="
            Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
            system that offers truly wireless connectivity -- creating new possibilities for more 
            pleasing and practical audio setups."
      />
      {/* SPEAKER ZX9 END */}
      {/* ******************************************************
       **********************************************************/}

      {/* SPEAKER ZX7 BEGIN */}
      <ProductList
        productName="zx7"
        productCategory="speaker"
        productDetails=" 
            Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses 
            high-end audiophile components that represents the top of the line powered speakers for 
            home or studio use."
        //
        flexReverse="flex-row-reverse" // Passed the className as a prop to change the flex position
      />

      {/* SPEAKER ZX7 END */}
    </ProductPage>
  );
};

export default Speaker;
