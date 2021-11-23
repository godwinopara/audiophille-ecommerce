import ProductList from "../components/product/ProductList";
import ProductPage from "../components/product/ProductPage";

const Earphone = () => {
  return (
    <ProductPage>
      <ProductList
        productName="Yx1 wireless"
        productCategory="earphones"
        productDetails="
        Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        classList="bg-yx1Mobile md:bg-yx1Tablet xl:bg-yx1"
      />
    </ProductPage>
  );
};

export default Earphone;
