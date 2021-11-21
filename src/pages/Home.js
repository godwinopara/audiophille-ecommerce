import Layout from "../components/layout/Layout";
import Button from "../components/utilities/Button";

const Home = () => {
  return (
    <Layout>
      {/* Hero Begin */}
      <section
        className="
      bg-black-200 min-h-screen bg-mobileHero 
        bg-cover bg-top-4 bg-no-repeat 
        flex items-center justify-center 
        mb-16
        md:bg-tabletHero
        lg:bg-desktopHero
        lg:text-left
        lg:bg-auto
        lg:mx-auto
      "
      >
        {/* Hero content Wrapper */}

        <div className="px-14 text-center md:w-3/5 lg:max-w-screen-xxl lg:w-1/2 lg:text-left">
          <p className="text-2xl text-white-100 tracking-veryWide mb-7 opacity-50">NEW PRODUCT</p>
          <h1 className="uppercase text-white-100 mb-10 text-6xl leading-40 font-bold md:text-8xl md:leading-58">
            XX99 Mark II Headphones
          </h1>
          <p className="text-white-300 text-2xl mb-11 leading-10 opacity-75 mix-blend-normal">
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <Button classList="bg-brown-100 text-white-100" />
        </div>
      </section>{" "}
      {/*  Hero Section End */}
      <br />
      See product
      <br />
      Headphones Shop
      <br />
      Speakers Shop
      <br />
      Earphones Shop
      <br />
      ZX9 speaker Upgrade to premium speakers that are phenomenally built to deliver truly
      remarkable sound. See product
      <br />
      ZX7 speaker See product
      <br />
      YX1 earphones See product
      <div>
        Bringing you the best audio gear Located at the heart of New York City, Audiophile is the
        premier store for high end headphones, earphones, speakers, and audio accessories. We have a
        large showroom and luxury demonstration rooms available for you to browse and experience a
        wide range of our products. Stop by our store to meet some of the fantastic people who make
        Audiophile the best place to buy your portable audio equipment.
      </div>
      <div>
        Home
        <br />
        Headphones
        <br />
        Speakers
        <br />
        Earphones
      </div>
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
      lovers and sound specialists who are devoted to helping you get the most out of personal
      audio. Come and visit our demo facility - we’re open 7 days a week.
      <br />
      Copyright 2021. All Rights Reserved
    </Layout>
  );
};

export default Home;
