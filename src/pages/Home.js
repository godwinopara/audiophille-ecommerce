import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import IMG from "../components/images";
import Picture from "../components/shared/Picture";

const Home = () => {
  return (
    <Layout>
      {/* Hero Begin */}
      <section
        className="
      bg-black-200 min-h-small bg-mobileHero 
        bg-cover bg-top-4 bg-no-repeat 
        flex items-center justify-center 

        mb-40 md:bg-tabletHero md:min-h-mid

        xl:bg-desktopHero xl:min-h-90 xl:text-left
        xl:bg-auto xl:min-h-large xl:mx-auto
      "
      >
        {/* Hero content Wrapper */}
        <div className="lg:max-w-screen-xxl mx-auto w-full">
          {/* Inner Wrapper */}
          <div className="px-10 text-center md:w-3/5  md:mx-auto mr-auto xl:text-left xl:w-2/5 xl:mx-0 xl:mr-auto xl:px-0">
            {/* Hero Content Start*/}
            <p className="text-white-100 tracking-veryWide mb-7 opacity-50">NEW PRODUCT</p>
            <h1 className="uppercase text-white-100 mb-10 text-6xl leading-40 font-bold md:text-8xl md:leading-58">
              XX99 Mark II Headphones
            </h1>
            <p className="text-white-300 mb-11 leading-10 opacity-75 mix-blend-normal">
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.
            </p>

            <Button classList="bg-brown-100 text-white-100 hover:bg-brown-200 " />
            {/* Hero Content End */}
          </div>
          {/* Inner Wrapper End */}
        </div>
      </section>
      {/*  Hero Section End */}
      {/* ********************
       ************************/}
      {/* CATEGORIES */}
      <section className="px-10 grid gap-y-28 md:grid-cols-3 mb-48 md:gap-x-4 md:gap-y-0 lg:max-w-screen-xxl lg:mx-auto xl:px-0">
        <Card img={IMG.shared.headphoneThumbnail} categoryName="HEADPHONES" />
        <Card img={IMG.shared.speakerThumbnail} categoryName="HEADPHONES" />
        <Card img={IMG.shared.earphoneThumbnail} categoryName="HEADPHONES" />
      </section>
      {/* CATEGORIES END */}
      {/* ********************** */}
      {/* ZX9 SPEAKER */}
      <section
        className="
        rounded-xl
        mb-10 mx-10
        px-10 py-24 
      bg-brown-100 bg-patternCircles bg-cover bg-top-5 bg-no-repeat 

        md:bg-top-6 md:mb-14

        lg:bg-left-bottom-100 lg:bg-auto
        lg:pb-0 lg:mb-16 lg:h-200
        lg:overflow-hidden lg:max-w-screen-xxl 
        xl:mx-auto
        "
      >
        <div className="lg:flex lg:justify-between lg:w-4/5 mx-auto ">
          <Picture
            desktopImg={IMG.home.speakerDesktop}
            tabletImg={IMG.home.speakerTablet}
            mobileImg={IMG.home.speakerMobile}
            classList="w-72 mx-auto lg:w-150 lg:mt-20"
          />

          <div className="text-center lg:text-left lg:ml-20 xl:ml-0">
            <h2 className="text-6xl leading-40 tracking-widest my-10 text-white-300 uppercase md:mt-28">
              ZX9 <br />
              speaker
            </h2>
            <p className="mb-10 text-white-300 md:max-w-lg mx-auto">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
              sound.
            </p>
            <Button classList="bg-black-100 text-white-100 hover:opacity-80" />
          </div>
        </div>
      </section>
      {/* ZX9 SPEAKER END */}
      {/* *************** */}
      {/* ZX7 SPEAKER */}
      <section
        className="
      mx-10 mb-10 rounded-xl  pl-10
      bg-zx7SpeakerMobile bg-cover
      md:bg-zx7SpeakerTablet md:pl-24
      lg:bg-zx7Speaker
       lg:max-w-screen-xxl py-40 lg:mb-20 lg:pl-36
       xl:mx-auto
       "
      >
        <h2 className="uppercase font-bold text-4xxl tracking-widest mb-12">ZX7 speaker </h2>
        <Button classList="border border-black-200 hover:bg-black-200 hover:text-white-300" />
      </section>
      {/* ZX7 SPEAKER END */}
      {/*******************/}
      {/* YXI EARPHONES */}
      <section
        className="
        px-10 mb-36
        md:grid md:place-items-center md:grid-cols-2 md:gap-x-4
        lg:max-w-screen-xxl lg:mx-auto lg:gap-x-12 
        xl:px-0
        
        "
      >
        <div className="h-full">
          <Picture
            desktopImg={IMG.home.yx1Earphone}
            tabletImg={IMG.home.yx1EarphoneTablet}
            mobileImg={IMG.home.yx1EarphoneMobile}
            classList="rounded-xl h-full"
          />
        </div>
        <div
          className="
        py-16 pl-10 mt-10 rounded-xl bg-white-100 
        md:h-full md:w-full md:m-0 md:flex md:items-center
        lg:flex-1 lg:py-40 lg:pl-16
        "
        >
          <div>
            <h2 className="uppercase mb-12 text-4xxl tracking-widest font-bold">YX1 earphones</h2>
            <Button classList="border border-black-200 hover:bg-black-200 hover:text-white-300" />
          </div>
        </div>
      </section>
      {/* YXI EARPHONES END */}
      {/* ***************** */}
    </Layout>
  );
};

export default Home;
