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

//XX9-MARK ONE
import xx99MarkOneHeadPhone from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99MarkOneHeadPhoneTablet from "../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99MarkOneHeadPhoneMobile from "../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
//XX9-MARK TWO
import xx99MarkTwoHeadPhone from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99MarkTwoHeadPhoneTablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xx99MarkTwoHeadPhoneMobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";

// XX-59
import xx59HeadPhone from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import xx59TwoHeadPhoneTablet from "../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59HeadPhoneMobile from "../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";

/* EARPHONE PAGE IMAGES */
import yx1Earphone from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1EarphoneTablet from "../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1EarphoneMobile from "../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";

/* SPEAKER PAGE EARPHONES */

import zx9Speaker from "../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx9SpeakerTablet from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx9SpeakerMobile from "../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx7Speaker from "../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx7SpeakerTablet from "../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx7SpeakerMobile from "../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";

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
    //XX99-MARK ONE
    xx99MarkOne: xx99MarkOneHeadPhone,
    xx99MarkOneTablet: xx99MarkOneHeadPhoneTablet,
    xx99MarkOneMobile: xx99MarkOneHeadPhoneMobile,
    // XX99-MARK TWO
    xx99MarkTwo: xx99MarkTwoHeadPhone,
    xx99MarkTwoTablet: xx99MarkTwoHeadPhoneTablet,
    xx99MarkTwoMobile: xx99MarkTwoHeadPhoneMobile,
    // XX59
    xx59: xx59HeadPhone,
    xx59Tablet: xx59TwoHeadPhoneTablet,
    xx59Mobile: xx59HeadPhoneMobile,
  },

  earphones: {
    yx1: yx1Earphone,
    yx1Tablet: yx1EarphoneTablet,
    yx1Mobile: yx1EarphoneMobile,
  },

  speakers: {
    zx9: zx9Speaker,
    zx9Tablet: zx9SpeakerTablet,
    zx9Mobile: zx9SpeakerMobile,
    zx7: zx7Speaker,
    zx7Tablet: zx7SpeakerTablet,
    zx7Mobile: zx7SpeakerMobile,
  },
};

export default IMG;
