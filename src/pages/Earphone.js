import ProductList from "../components/product/ProductList";
import ProductPage from "../components/product/ProductPage";
import IMG from "../components/shared/images";

const Earphone = () => {
  return (
    <ProductPage productPageName="EARPHONES">
      <ProductList
        productName="Yx1 wireless"
        productCategory="earphones"
        desktopImg={IMG.earphones.yx1}
        tabletImg={IMG.earphones.yx1Tablet}
        mobileImg={IMG.earphones.yx1Mobile}
        productDetails="
        Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        classList="bg-yx1Mobile md:bg-yx1Tablet xl:bg-yx1"
      />
    </ProductPage>
  );
};

export default Earphone;
