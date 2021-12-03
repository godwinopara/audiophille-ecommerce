import IMG from "./components/shared/images";
const Data = [
  {
    id: 1,
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    cartName: "YX1 WIRELESS",
    cartImage: IMG.cartImages.yx1,
    image: {
      desktop: IMG.productDetails.yx1DetailsImg,
      tablet: IMG.productDetails.yx1DetailsImgTab,
      mobile: IMG.productDetails.yx1DetailsImgMob,
    },
    category: "earphones",
    categoryImage: {
      desktop: IMG.earphones.yx1,
      tablet: IMG.earphones.yx1Tablet,
      mobile: IMG.earphones.yx1Mobile,
    },
    new: true,
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
    features1:
      "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    includes: [
      {
        quantity: 2,
        item: "Earphone unit",
      },
      {
        quantity: 6,
        item: "Multi-size earplugs",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "USB-C charging cable",
      },
      {
        quantity: 1,
        item: "Travel pouch",
      },
    ],
    gallery: {
      first: {
        desktop: IMG.productDetails.yx1GallaryOneImg,
        tablet: IMG.productDetails.yx1GallaryOneImgTab,
        mobile: IMG.productDetails.yx1GallaryOneImgMob,
      },
      second: {
        desktop: IMG.productDetails.yx1GallaryTwoImg,
        tablet: IMG.productDetails.yx1GallaryTwoImgTab,
        mobile: IMG.productDetails.yx1GallaryTwoImgMob,
      },
      third: {
        desktop: IMG.productDetails.yx1GallaryThreeImg,
        tablet: IMG.productDetails.yx1GallaryThreeImgTab,
        mobile: IMG.productDetails.yx1GallaryThreeImgMob,
      },
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: IMG.shared.xx99MKoneMobile,
          tablet: IMG.shared.xx99MKoneTablet,
          desktop: IMG.shared.xx99MKone,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: IMG.shared.x59Mobile,
          tablet: IMG.shared.x59Tablet,
          desktop: IMG.shared.x59,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: IMG.shared.z9Mobile,
          tablet: IMG.shared.z9Tablet,
          desktop: IMG.shared.z9,
        },
      },
    ],
  },
  {
    id: 2,
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    cartName: "XX59",
    cartImage: IMG.cartImages.xx59,
    image: {
      desktop: IMG.productDetails.XX59DetailsImg,
      tablet: IMG.productDetails.XX59DetailsImgTab,
      mobile: IMG.productDetails.XX59DetailsImgMob,
    },
    category: "headphones",
    categoryImage: {
      desktop: IMG.headphones.xx59,
      tablet: IMG.headphones.xx59Tablet,
      mobile: IMG.headphones.xx59Mobile,
    },
    new: false,
    price: 899,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
    features1:
      "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earcups",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
    ],
    gallery: {
      first: {
        desktop: IMG.productDetails.XX59GallaryOneImg,
        tablet: IMG.productDetails.XX59GallaryOneImgTab,
        mobile: IMG.productDetails.XX59GallaryOneImgMob,
      },
      second: {
        desktop: IMG.productDetails.XX59GallaryTwoImg,
        tablet: IMG.productDetails.XX59GallaryTwoImgTab,
        mobile: IMG.productDetails.XX59GallaryTwoImgMob,
      },
      third: {
        desktop: IMG.productDetails.XX99MarkOneGallaryThreeImg,
        tablet: IMG.productDetails.XX99MarkOneGallaryThreeImgTab,
        mobile: IMG.productDetails.XX99MarkOneGallaryThreeImgMob,
      },
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: IMG.shared.xx99MKtwoMobile,
          tablet: IMG.shared.xx99MKtwoTablet,
          desktop: IMG.shared.xx99MKtwo,
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: IMG.shared.xx99MKoneMobile,
          tablet: IMG.shared.xx99MKoneTablet,
          desktop: IMG.shared.xx99MKone,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: IMG.shared.z9Mobile,
          tablet: IMG.shared.z9Tablet,
          desktop: IMG.shared.z9,
        },
      },
    ],
  },
  {
    id: 3,
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    cartName: "XX99 MARK I",
    cartImage: IMG.cartImages.xx99MarkI,
    image: {
      desktop: IMG.productDetails.XX99MarkOneDetailsImg,
      tablet: IMG.productDetails.XX99MarkOneDetailsImgTab,
      mobile: IMG.productDetails.XX99MarkOneDetailsImgMob,
    },
    category: "headphones",
    categoryImage: {
      desktop: IMG.headphones.xx99MarkOne,
      tablet: IMG.headphones.xx99MarkOneMobile,
      mobile: IMG.headphones.xx99MarkOneTablet,
    },
    new: false,
    price: 1750,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
    features1:
      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earcups",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
    ],
    gallery: {
      first: {
        desktop: IMG.productDetails.XX99MarkOneGallaryOneImg,
        tablet: IMG.productDetails.XX99MarkOneGallaryOneImgTab,
        mobile: IMG.productDetails.XX99MarkOneGallaryOneImgMob,
      },
      second: {
        desktop: IMG.productDetails.XX99MarkOneGallaryTwoImg,
        tablet: IMG.productDetails.XX99MarkOneGallaryTwoImgTab,
        mobile: IMG.productDetails.XX99MarkOneGallaryTwoImgMob,
      },
      third: {
        desktop: IMG.productDetails.XX99MarkOneGallaryThreeImg,
        tablet: IMG.productDetails.XX99MarkOneGallaryThreeImgTab,
        mobile: IMG.productDetails.XX99MarkOneGallaryThreeImgMob,
      },
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: IMG.shared.xx99MKtwoMobile,
          tablet: IMG.shared.xx99MKtwoTablet,
          desktop: IMG.shared.xx99MKtwo,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: IMG.shared.x59Mobile,
          tablet: IMG.shared.x59Tablet,
          desktop: IMG.shared.x59,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: IMG.shared.z9Mobile,
          tablet: IMG.shared.z9Tablet,
          desktop: IMG.shared.z9,
        },
      },
    ],
  },
  {
    id: 4,
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    cartName: "XX99 MARK II",
    cartImage: IMG.cartImages.xx99MarkII,
    image: {
      desktop: IMG.productDetails.XX99MarkTwoDetailsImg,
      tablet: IMG.productDetails.XX99MarkTwoDetailsImgTab,
      mobile: IMG.productDetails.XX99MarkTwoDetailsImgMob,
    },
    category: "headphones",
    categoryImage: {
      desktop: IMG.headphones.xx99MarkTwo,
      tablet: IMG.headphones.xx99MarkTwoTablet,
      mobile: IMG.headphones.xx99MarkTwoMobile,
    },
    new: true,
    price: 2999,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
    features1:
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earcups",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
      {
        quantity: 1,
        item: "Travel bag",
      },
    ],
    gallery: {
      first: {
        desktop: IMG.productDetails.XX99MarkTwoGallaryOneImg,
        tablet: IMG.productDetails.XX99MarkTwoGallaryOneImgTab,
        mobile: IMG.productDetails.XX99MarkTwoGallaryOneImgMob,
      },
      second: {
        desktop: IMG.productDetails.XX99MarkTwoGallaryTwoImg,
        tablet: IMG.productDetails.XX99MarkTwoGallaryTwoImgTab,
        mobile: IMG.productDetails.XX99MarkTwoGallaryTwoImgMob,
      },
      third: {
        desktop: IMG.productDetails.XX99MarkTwoGallaryThreeImg,
        tablet: IMG.productDetails.XX99MarkTwoGallaryThreeImgTab,
        mobile: IMG.productDetails.XX99MarkTwoGallaryThreeImgMob,
      },
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: IMG.shared.xx99MKoneMobile,
          tablet: IMG.shared.xx99MKoneTablet,
          desktop: IMG.shared.xx99MKone,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: IMG.shared.x59Mobile,
          tablet: IMG.shared.x59Tablet,
          desktop: IMG.shared.x59,
        },
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          desktop: IMG.shared.z9,
          tablet: IMG.shared.z9Tabl,
          mobile: IMG.shared.z9Mobile,
        },
      },
    ],
  },
  {
    id: 5,
    slug: "zx7-speaker",
    name: "ZX7 Speaker",
    cartName: "ZX7",
    cartImage: IMG.cartImages.zx7,
    image: {
      desktop: IMG.productDetails.zx7DetailsImg,
      tablet: IMG.productDetails.zx7DetailsImgTab,
      mobile: IMG.productDetails.zx7DetailsImgMob,
    },
    category: "speakers",
    categoryImage: {
      desktop: IMG.speakers.zx7,
      tablet: IMG.speakers.zx7Tablet,
      mobile: IMG.speakers.zx7Mobile,
    },
    new: false,
    price: 3500,
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
    features1:
      "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 7.5m audio cable",
      },
      {
        quantity: 1,
        item: "7.5m optical cable",
      },
    ],
    gallery: {
      first: {
        desktop: IMG.productDetails.zx7GallaryOneImg,
        tablet: IMG.productDetails.zx7GallaryOneImgTab,
        mobile: IMG.productDetails.zx7GallaryOneImgMob,
      },
      second: {
        desktop: IMG.productDetails.zx7GallaryTwoImg,
        tablet: IMG.productDetails.zx7GallaryTwoImgTab,
        mobile: IMG.productDetails.zx7GallaryTwoImgMob,
      },
      third: {
        desktop: IMG.productDetails.zx7GallaryThreeImg,
        tablet: IMG.productDetails.zx7GallaryThreeImgTab,
        mobile: IMG.productDetails.zx7GallaryThreeImgMob,
      },
    },
    others: [
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: IMG.shared.z9Mobile,
          tablet: IMG.shared.z9Tablet,
          desktop: IMG.shared.z9,
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: IMG.shared.xx99MKoneMobile,
          tablet: IMG.shared.xx99MKoneTablet,
          desktop: IMG.shared.xx99MKone,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: IMG.shared.x59Mobile,
          tablet: IMG.shared.x59Tablet,
          desktop: IMG.shared.x59,
        },
      },
    ],
  },
  {
    id: 6,
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    cartName: "ZX9",
    cartImage: IMG.cartImages.zx9,
    image: {
      mobile: IMG.productDetails.zx9DetailsImgMob,
      tablet: IMG.productDetails.zx9DetailsImgTab,
      desktop: IMG.productDetails.zx9DetailsImg,
    },
    category: "speakers",
    categoryImage: {
      mobile: IMG.speakers.zx9Mobile,
      tablet: IMG.speakers.zx9Tablet,
      desktop: IMG.speakers.zx9,
    },
    new: true,
    price: 4500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
    features1:
      "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 10m audio cable",
      },
      {
        quantity: 1,
        item: "10m optical cable",
      },
    ],
    gallery: {
      first: {
        desktop: IMG.productDetails.zx9GallaryOneImg,
        tablet: IMG.productDetails.zx9GallaryOneImgTab,
        mobile: IMG.productDetails.zx9GallaryOneImgMob,
      },
      second: {
        desktop: IMG.productDetails.zx9GallaryTwoImg,
        tablet: IMG.productDetails.zx9GallaryTwoImgTab,
        mobile: IMG.productDetails.zx9GallaryTwoImgMob,
      },
      third: {
        desktop: IMG.productDetails.zx9GallaryThreeImg,
        tablet: IMG.productDetails.zx9GallaryThreeImgTab,
        mobile: IMG.productDetails.zx9GallaryThreeImgMob,
      },
    },
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
          mobile: IMG.shared.z7Mobile,
          tablet: IMG.shared.z7Tablet,
          desktop: IMG.shared.z7,
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: IMG.shared.xx99MKoneMobile,
          tablet: IMG.shared.xx99MKoneTablet,
          desktop: IMG.shared.xx99MKone,
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: IMG.shared.x59Mobile,
          tablet: IMG.shared.x59Tablet,
          desktop: IMG.shared.x59,
        },
      },
    ],
  },
];

export default Data;
