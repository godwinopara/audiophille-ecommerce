/* All Images That are Used In all Pages */
/* SHARED IMAGES */
import EarphonesThumbnail from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import SpeakerThumbnail from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import HeadPhoneThumbnail from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import AboutImg from "../../assets/shared/desktop/image-best-gear.jpg";
import AboutImgTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import AboutImgMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import Logo from "../../assets/shared/desktop/logo.svg";

/* HOME PAGE IMAGES */
import speakerImgDesktop from "../../assets/home/desktop/image-speaker-zx9.png";
import speakerImgTablet from "../../assets/home/tablet/image-speaker-zx9.png";
import speakerImgMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import patternCircle from "../../assets/home/desktop/pattern-circles.svg";
import YX1Earphone from "../../assets/home/desktop/image-earphones-yx1.jpg";
import YX1EarphoneTablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import YX1EarphoneMobile from "../../assets/home/mobile/image-earphones-yx1.jpg";

/* HEADPHONE PAGE IMAGES */

//MARK ONE
import xx99MarkOneHeadPhone from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx99MarkOneHeadPhoneTablet from "../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import xx99MarkOneHeadPhoneMobile from "../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
// MARK TWO
import xx99MarkTwoHeadPhone from "../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import xx99MarkTwoHeadPhoneTablet from "../../assets/shared/tablet/image-xx99-mark-two-headphones.jpg";
import xx99MarkTwoHeadPhoneMobile from "../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";

const IMG = {
  shared: {
    earphoneThumbnail: EarphonesThumbnail,
    speakerThumbnail: SpeakerThumbnail,
    headphoneThumbnail: HeadPhoneThumbnail,
    arrow: Arrow,
    aboutImg: AboutImg,
    aboutImgTablet: AboutImgTablet,
    aboutImgMobile: AboutImgMobile,
    logo: Logo,
  },

  home: {
    speakerDesktop: speakerImgDesktop,
    speakerTablet: speakerImgTablet,
    speakerMobile: speakerImgMobile,
    bgPattern: patternCircle,
    yx1Earphone: YX1Earphone,
    yx1EarphoneTablet: YX1EarphoneTablet,
    yx1EarphoneMobile: YX1EarphoneMobile,
  },

  headphones: {
    //MARK ONE
    xx99MarkOne: xx99MarkOneHeadPhone,
    xx99MarkOneTablet: xx99MarkOneHeadPhoneTablet,
    xx99MarkOneMobile: xx99MarkOneHeadPhoneMobile,
    // MARK TWO
    xx99MarkTwo: xx99MarkTwoHeadPhone,
    xx99MarkTwoTablet: xx99MarkTwoHeadPhoneTablet,
    xx99MarkTwoMobile: xx99MarkTwoHeadPhoneMobile,
  },
};

export default IMG;
