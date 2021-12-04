import cartImages from "../image/cartImage";
import sharedImages from "../image/sharedImages";
import homeImages from "../image/homepageImages";
import headphoneImages from "../image/headphoneImg";
import earphoneImages from "../image/earphoneImg";
import speakerImages from "../image/speakerImg";
import productDetailsPageImages from "../image/productDetailPageImg";
import yx1GallaryImages from "../image/yx1GallaryImg";
import zx7GallaryImages from "../image/zx7GallaryImg";
import zx9GallaryImages from "../image/zx9GallaryImg";
import xx99MarkOneGallaryImages from "../image/xx99Mark1GallaryImg";
import xx99MarkTwoGallaryImages from "../image/xx99Mark2GallaryImg";
import xx59GallaryImages from "../image/xx59GallaryImg";

const IMG = {
  shared: { ...sharedImages },
  home: { ...homeImages },
  headphones: { ...headphoneImages },
  earphones: { ...earphoneImages },
  speakers: { ...speakerImages },
  cartImages: { ...cartImages },
  productDetails: {
    ...productDetailsPageImages,
    ...yx1GallaryImages,
    ...zx7GallaryImages,
    ...zx9GallaryImages,
    ...xx99MarkOneGallaryImages,
    ...xx99MarkTwoGallaryImages,
    ...xx59GallaryImages,
  },
};

export default IMG;
