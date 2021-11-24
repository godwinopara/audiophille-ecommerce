import PropTypes from "prop-types";

const Picture = ({ desktopImg, mobileImg, tabletImg, classList }) => {
  return (
    <picture>
      <source media="(min-width:1100px)" srcSet={desktopImg} />
      <source media="(min-width:765px)" srcSet={tabletImg} />
      <img src={mobileImg} alt="" className={classList} />
    </picture>
  );
};

export default Picture;

Picture.proptype = {
  classList: PropTypes.string,
};
