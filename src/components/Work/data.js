// Techniques
import bootstrapIcon from "../../assets/techniques/bootstrap.svg";
import facebookIcon from "../../assets/techniques/facebook.svg";
import firebaseIcon from "../../assets/techniques/firebase.svg";
import googleIcon from "../../assets/techniques/google.svg";
import matertialUiIcon from "../../assets/techniques/materialui.svg";
import nextjsIcon from "../../assets/techniques/nextjs.svg";
import reactIcon from "../../assets/techniques/react.svg";
import sassIcon from "../../assets/techniques/sass.svg";
import twitterIcon from "../../assets/techniques/twitter.svg";
import ePaymentIcon from "../../assets/techniques/ePayment.svg";

// IBS images
import ibsSrc1 from "../../assets/projects/IBS/1.webp";
import ibsSrc2 from "../../assets/projects/IBS/2.webp";
import ibsSrc3 from "../../assets/projects/IBS/3.webp";
import ibsSrc4 from "../../assets/projects/IBS/4.webp";
import ibsSrc5 from "../../assets/projects/IBS/5.webp";
import ibsSrc6 from "../../assets/projects/IBS/6.webp";
import ibsSrc7 from "../../assets/projects/IBS/7.webp";

// Russail water images
import russailSrc1 from "../../assets/projects/RussailWater/1.webp";
import russailSrc2 from "../../assets/projects/RussailWater/2.webp";
import russailSrc3 from "../../assets/projects/RussailWater/3.webp";
import russailSrc4 from "../../assets/projects/RussailWater/4.webp";
import russailSrc5 from "../../assets/projects/RussailWater/5.webp";
import russailSrc6 from "../../assets/projects/RussailWater/6.webp";
import russailSrc7 from "../../assets/projects/RussailWater/7.webp";
import russailSrc8 from "../../assets/projects/RussailWater/8.webp";

// ajman images
import ajmanSrc1 from "../../assets/projects/AjmanSelfInspection/1.webp";
import ajmanSrc2 from "../../assets/projects/AjmanSelfInspection/2.webp";
import ajmanSrc3 from "../../assets/projects/AjmanSelfInspection/3.webp";
import ajmanSrc4 from "../../assets/projects/AjmanSelfInspection/4.webp";
import ajmanSrc5 from "../../assets/projects/AjmanSelfInspection/5.webp";

// Meta cms images
import metaCmsSrc1 from "../../assets/projects/MetaCms/1.webp";
import metaCmsSrc2 from "../../assets/projects/MetaCms/2.webp";
import metaCmsSrc3 from "../../assets/projects/MetaCms/3.webp";
import metaCmsSrc4 from "../../assets/projects/MetaCms/4.webp";
import metaCmsSrc5 from "../../assets/projects/MetaCms/5.webp";
import metaCmsSrc6 from "../../assets/projects/MetaCms/6.webp";
import metaCmsSrc7 from "../../assets/projects/MetaCms/7.webp";

// spare admin images
import spareAdminSrc1 from "../../assets/projects/sparePartsAdmin/1.webp";
import spareAdminSrc2 from "../../assets/projects/sparePartsAdmin/2.webp";
import spareAdminSrc3 from "../../assets/projects/sparePartsAdmin/3.webp";
import spareAdminSrc4 from "../../assets/projects/sparePartsAdmin/4.webp";
import spareAdminSrc5 from "../../assets/projects/sparePartsAdmin/5.webp";
import spareAdminSrc6 from "../../assets/projects/sparePartsAdmin/6.webp";

// spare Parts images
import SparePartsSrc1 from "../../assets/projects/sparePartsWeb/1.webp";
import SparePartsSrc2 from "../../assets/projects/sparePartsWeb/2.webp";
import SparePartsSrc3 from "../../assets/projects/sparePartsWeb/3.webp";
import SparePartsSrc4 from "../../assets/projects/sparePartsWeb/4.webp";
import SparePartsSrc5 from "../../assets/projects/sparePartsWeb/5.webp";

// Meta website images
import MetaWebsiteSrc1 from "../../assets/projects/MetaWebsite/1.webp";
import MetaWebsiteSrc2 from "../../assets/projects/MetaWebsite/2.webp";
import MetaWebsiteSrc3 from "../../assets/projects/MetaWebsite/3.webp";
import MetaWebsiteSrc4 from "../../assets/projects/MetaWebsite/4.webp";
import MetaWebsiteSrc5 from "../../assets/projects/MetaWebsite/5.webp";
import MetaWebsiteSrc6 from "../../assets/projects/MetaWebsite/6.webp";
import MetaWebsiteSrc7 from "../../assets/projects/MetaWebsite/7.webp";

// Safeone website images
import SafeOneSrc1 from "../../assets/projects/SafeOneGroup/1.webp";
import SafeOneSrc2 from "../../assets/projects/SafeOneGroup/2.webp";
import SafeOneSrc3 from "../../assets/projects/SafeOneGroup/3.webp";
import SafeOneSrc4 from "../../assets/projects/SafeOneGroup/4.webp";
import SafeOneSrc5 from "../../assets/projects/SafeOneGroup/5.webp";
import SafeOneSrc6 from "../../assets/projects/SafeOneGroup/6.webp";
import SafeOneSrc7 from "../../assets/projects/SafeOneGroup/7.webp";
export const data = [
  {
    id: 1,
    category: "websites",
    title: "IBS University",
    description:
      "A multilingual website for 'Das Internationale Informatik- und Begegnungszentrum Sachsen (IBS)', a German Based University.",
    link: "https://folioibsweb.meta-itech.com/",
    techniques: [
      { techName: "Next JS", icon: nextjsIcon },
      {
        techName: "Material Ui",
        icon: matertialUiIcon,
      },
      { techName: "Google Maps", icon: googleIcon },
      { techName: "Twitter API", icon: twitterIcon },
    ],
    images: [ibsSrc1, ibsSrc2, ibsSrc3, ibsSrc4, ibsSrc5, ibsSrc6, ibsSrc7],
  },
  {
    id: 2,
    category: "e-commerce",
    title: "Russail Water",
    description:
      "A multi-currency multilingual E-commerce store for Russail water (a company for Water filling and purification) with a chat service and e-payment feature",
    link: "https://russailwaterweb.meta-itech.com/",
    techniques: [
      { techName: "Next JS", icon: nextjsIcon },
      {
        techName: "Material Ui",
        icon: matertialUiIcon,
      },
      { techName: "Google Maps", icon: googleIcon },
      { techName: "E-Payment", icon: ePaymentIcon },
    ],
    images: [
      russailSrc1,
      russailSrc2,
      russailSrc3,
      russailSrc4,
      russailSrc5,
      russailSrc6,
      russailSrc7,
      russailSrc8,
    ],
  },
  {
    id: 3,
    category: "system",
    title: "Ajman Self Inspiction",
    description:
      "Smart system to make inspection process faster, more efficient, and smarter using artificial intelligence.",
    //link: "https://sec.am.gov.ae/",
    techniques: [
      { techName: "React JS", icon: reactIcon },
      { techName: "Bootstarp", icon: bootstrapIcon },
      { techName: "Sass", icon: sassIcon },
      { techName: "Google Maps", icon: googleIcon },
    ],
    images: [ajmanSrc1, ajmanSrc2, ajmanSrc3, ajmanSrc4, ajmanSrc5],
  },
  {
    id: 4,
    category: "system",
    title: "Meta CMS",
    description:
      "It offers awareness and recognition of your brand to the customers for an enhanced communication.",
    images: [
      metaCmsSrc1,
      metaCmsSrc2,
      metaCmsSrc3,
      metaCmsSrc4,
      metaCmsSrc5,
      metaCmsSrc6,
      metaCmsSrc7,
    ],
    //link: "https://foliov2testadmin.meta-itech.com/",
    techniques: [
      { techName: "React JS", icon: reactIcon },
      { techName: "Bootstarp", icon: bootstrapIcon },
      { techName: "Sass", icon: sassIcon },
      { techName: "Google Maps", icon: googleIcon },
    ],
  },
  {
    id: 5,
    category: "system",
    title: "AE Spare Admin",
    description:
      "Admin dashboard for Spare Parts E-commerce store. Analytics, vendors, brands, items and orders managment",
    images: [
      spareAdminSrc1,
      spareAdminSrc2,
      spareAdminSrc3,
      spareAdminSrc4,
      spareAdminSrc5,
      spareAdminSrc6,
    ],
    //link: "http://sptestadmin.spare.ae/login",
    techniques: [
      { techName: "React JS", icon: reactIcon },
      { techName: "Bootstarp", icon: bootstrapIcon },
      {
        techName: "Firebase Notifications",
        icon: firebaseIcon,
      },
    ],
  },
  {
    id: 6,
    category: "e-commerce",
    title: "AE Spare Parts",
    description:
      "E-Commerce platform, It offers customers a variety of shopping car spare parts at the best prices in the region.",
    images: [
      SparePartsSrc1,
      SparePartsSrc2,
      SparePartsSrc3,
      SparePartsSrc4,
      SparePartsSrc5,
    ],
    link: "http://sptest.spare.ae/",
    techniques: [
      { techName: "React JS", icon: reactIcon },
      {
        techName: "Bootstrap",
        icon: bootstrapIcon,
      },
      {
        techName: "Firebase Notifications",
        icon: firebaseIcon,
      },
      {
        techName: "FaceBook API",
        icon: facebookIcon,
      },
      { techName: "Google Maps", icon: googleIcon },
    ],
  },
  {
    id: 7,
    category: "websites",
    title: "Meta Website",
    description:
      "Meta Solutions Official website. Portfolio for Meta company to show its services and projects",
    images: [
      MetaWebsiteSrc1,
      MetaWebsiteSrc2,
      MetaWebsiteSrc3,
      MetaWebsiteSrc4,
      MetaWebsiteSrc5,
      MetaWebsiteSrc6,
      MetaWebsiteSrc7,
    ],
    link: "https://meta-itech.com/",
    techniques: [
      { techName: "Next JS", icon: nextjsIcon },
      {
        techName: "Material Ui",
        icon: matertialUiIcon,
      },
    ],
  },
  {
    id: 8,
    category: "websites",
    title: "Safe One Group",
    description:
      "Safe One Group website. Company for Building & Constructions based in UAE, Abu Dhabi Emirate",
    images: [
      SafeOneSrc1,
      SafeOneSrc2,
      SafeOneSrc3,
      SafeOneSrc4,
      SafeOneSrc5,
      SafeOneSrc6,
      SafeOneSrc7,
    ],
    link: "https://safeonegroup.ae/",
    techniques: [
      { techName: "Next JS", icon: nextjsIcon },
      {
        techName: "Material Ui",
        icon: matertialUiIcon,
      },
    ],
  },
];
