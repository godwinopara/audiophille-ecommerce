/* All Images That are Used In all Pages */
/* SHARED IMAGES */
import EarphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import SpeakerThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import HeadPhoneThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Arrow from "../assets/shared/desktop/icon-arrow-right.svg";

/* HOME IMAGES */
import speakerImgDesktop from "../assets/home/desktop/image-speaker-zx9.png";
import speakerImgTablet from "../assets/home/tablet/image-speaker-zx9.png";
import speakerImgMobile from "../assets/home/mobile/image-speaker-zx9.png";
import patternCircle from "../assets/home/desktop/pattern-circles.svg";

const IMG = {
  shared: {
    earphoneThumbnail: EarphonesThumbnail,
    speakerThumbnail: SpeakerThumbnail,
    headphoneThumbnail: HeadPhoneThumbnail,
    arrow: Arrow,
  },

  home: {
    speakerDesktop: speakerImgDesktop,
    speakerTablet: speakerImgTablet,
    speakerMobile: speakerImgMobile,
    bgPattern: patternCircle,
  },
};

export default IMG;
