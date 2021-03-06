import Picture from "../shared/Picture";
import IMG from "../shared/images";

const About = () => {
  return (
    <section
      className="
      px-10 mb-48 
      xl:flex xl:flex-row-reverse xl:items-center xl:justify-between
      xl:max-w-screen-xxl xl:mx-auto
      xl:px-0
    "
    >
      <Picture
        desktopImg={IMG.shared.aboutImg}
        tabletImg={IMG.shared.aboutImgTablet}
        mobileImg={IMG.shared.aboutImgMobile}
        classList="rounded-xl flex-1"
      />
      <div
        className="
        mt-16 text-center 
        md:w-9/12 md:mx-auto md:mt-24
        xl:text-left xl:w-2/5 xl:ml-0
        "
      >
        <h2 className="font-bold uppercase text-4xxl mb-12 md:text-6xl">
          Bringing you the <span className="text-brown-100">best</span> audio gear{" "}
        </h2>
        <p className="opacity-50">
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default About;
