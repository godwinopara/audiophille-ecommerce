const Span = ({ text, classList }) => {
  return (
    <span
      className={`
      inline-block font-bold tracking-widest leading-10 bg-white-100
      text-2xl py-5 px-9 hover:text-brown-100 hover:opacity-100
      sm:px-8
      ${classList}`}
    >
      {text}
    </span>
  );
};

export default Span;
