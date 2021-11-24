import Layout from "../layout/Layout";
import CategoryList from "../shared/CategoryList";

const ProductPage = ({ productPageName, children }) => {
  return (
    <Layout>
      {/* Product Hero */}

      <h1
        className="
      bg-black-100 text-white-300 font-bold text-4xxl tracking-widest text-center py-14 mb-24
      md:text-6xxl
      "
      >
        {productPageName}
      </h1>
      <article className="px-10 text-center max-w-screen-xxl mx-auto">{children}</article>

      {/* NAVIGATES TO THE DIFFERENT AUDIO SYSTEM PAGES */}

      <CategoryList />

      {/* ***************** */}
    </Layout>
  );
};

export default ProductPage;
