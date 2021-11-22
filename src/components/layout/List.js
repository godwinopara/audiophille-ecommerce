import PropTypes from "prop-types";

const List = ({ text, link, classList }) => {
  return (
    <li className={`text-white-300 text-xl font-bold uppercase ${classList}`}>
      <a className="hover:text-brown-100" href={`/${link}`}>
        {text}
      </a>
    </li>
  );
};

export default List;

List.propTypes = {
  classList: PropTypes.string,
};
