const Span = ({ text, classList }) => {
  return (
    <span
      className={`
      inline-block font-bold tracking-widest leading-10 
      text-2xl py-5 px-8 hover:text-brown-100 hover:opacity-100
      ${classList}`}
    >
      {text}
    </span>
  );
};

export default Span;
