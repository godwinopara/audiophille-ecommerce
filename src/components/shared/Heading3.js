const Heading3 = ({ text, classList }) => {
  return (
    <h3
      className={`font-bold leading-36 tracking-widest text-3xx my-12 uppercase  lg:my-16 ${classList}`}
    >
      {text}
    </h3>
  );
};

export default Heading3;
