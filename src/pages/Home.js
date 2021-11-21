import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import IMG from "../components/images";

const Home = () => {
  return (
    <Layout>
      {/* Hero Begin */}
      <section
        className="
      bg-black-200 min-h-small bg-mobileHero 
        bg-cover bg-top-4 bg-no-repeat 
        flex items-center justify-center 
        mb-40
        md:bg-tabletHero
        md:min-h-mid
        lg:bg-desktopHero
        lg:min-h-90
        lg:text-left
        lg:bg-auto
        lg:min-h-large  
        lg:mx-auto
      "
      >
        {/* Hero content Wrapper */}
        <div className="lg:max-w-screen-xxl mx-auto w-full">
          {/* Inner Wrapper */}
          <div className="px-10 text-center md:w-3/5  md:mx-auto mr-auto lg:text-left lg:px-0 lg:w-2/5 lg:mx-0 lg:mr-auto">
            {/* Hero Content Start*/}
            <p className="text-white-100 tracking-veryWide mb-7 opacity-50">NEW PRODUCT</p>
            <h1 className="uppercase text-white-100 mb-10 text-6xl leading-40 font-bold md:text-8xl md:leading-58">
              XX99 Mark II Headphones
            </h1>
            <p className="text-white-300 mb-11 leading-10 opacity-75 mix-blend-normal">
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.
            </p>

            <Button classList="bg-brown-100 text-white-100" />
            {/* Hero Content End */}
          </div>
          {/* Inner Wrapper End */}
        </div>
      </section>
      {/*  Hero Section End */}
      {/* ********************
       ************************/}
      {/* AUDIO CATEGORIES */}
      <section className="px-10 grid gap-y-28 md:grid-cols-3 mb-48 md:gap-x-4 md:gap-y-0 lg:max-w-screen-xxl lg:mx-auto lg:px-0">
        <Card img={IMG.shared.headphoneThumbnail} categoryName="HEADPHONES" />
        <Card img={IMG.shared.speakerThumbnail} categoryName="HEADPHONES" />
        <Card img={IMG.shared.earphoneThumbnail} categoryName="HEADPHONES" />
      </section>
      {/* AUDIO CATEGORIES END */}
      {/* ********************** */}
      <section
        className="
        rounded-xl
      px-14 py-24 
      bg-brown-100 
      bg-patternCircles bg-cover bg-top-5 bg-no-repeat
      md:bg-top-6
      lg:bg-left lg:bg-auto
      lg:pb-0
      lg:h-200
      overflow-hidden
      
      max-w-screen-xxl mx-auto
      "
      >
        <div className="lg:flex lg:justify-between lg:w-4/5 mx-auto ">
          <picture className="flex items-center justify-center">
            <source media="(min-width:1024px)" srcset={IMG.home.speakerDesktop} />
            <source media="(min-width:765px)" srcset={IMG.home.speakerTablet} />
            <img src={IMG.home.speakerMobile} alt="" className="w-72 lg:w-150 lg:mt-20" />
          </picture>

          <div className="text-center lg:text-left">
            <h2 className="text-6xl leading-40 tracking-widest my-10 text-white-300 uppercase md:mt-28">
              ZX9 <br />
              speaker
            </h2>
            <p className="mb-10 text-white-300 md:max-w-lg mx-auto">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
              sound.
            </p>
            <Button classList="bg-black-100 text-white-100 " />
          </div>
        </div>
      </section>
      <br />
      See product
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
