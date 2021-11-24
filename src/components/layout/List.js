import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const List = ({ text, link = "", classList }) => {
  return (
    <li className={`text-white-300 text-xl font-bold uppercase ${classList}`}>
      <Link className="hover:text-brown-100" to={link}>
        {text}
      </Link>
    </li>
  );
};

export default List;

List.propTypes = {
  classList: PropTypes.string,
};
