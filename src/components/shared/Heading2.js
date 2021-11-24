const Heading2 = ({ productName, productCategory, classList }) => {
  return (
    <h2
      className={`uppercase ${classList} my-10 text-4xxl tracking-widest font-bold md:text-6xxl `}
    >
      {productName}
      <br />
      {productCategory}
    </h2>
  );
};

export default Heading2;
