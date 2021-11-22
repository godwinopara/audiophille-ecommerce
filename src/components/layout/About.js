import Picture from "../shared/Picture";
import IMG from "../images";

const About = () => {
  return (
    <section className="px-10 mb-48">
      <Picture
        desktopImg={IMG.shared.aboutImg}
        tabletImg={IMG.shared.aboutImgTablet}
        mobileImg={IMG.shared.aboutImgMobile}
        classList="rounded-xl"
      />
      <div className="mt-16 text-center">
        <h2 className="font-bold uppercase text-4xxl mb-12">
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
