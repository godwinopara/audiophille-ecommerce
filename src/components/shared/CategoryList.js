import Card from "./Card";
import IMG from "./images";

const CategoryList = () => {
  return (
    <ul className="px-10  grid gap-y-28 md:grid-cols-3 mb-48 md:gap-x-4 md:gap-y-0 lg:max-w-screen-xxl lg:mx-auto xl:px-0">
      <Card img={IMG.shared.headphoneThumbnail} categoryName="HEADPHONES" />
      <Card img={IMG.shared.speakerThumbnail} categoryName="HEADPHONES" />
      <Card img={IMG.shared.earphoneThumbnail} categoryName="HEADPHONES" />
    </ul>
  );
};

export default CategoryList;
