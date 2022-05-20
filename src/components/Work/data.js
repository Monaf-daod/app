// Techniques
import bootstrapIcon from "../../assets/techniques/bootstrap.svg";
import facebookIcon from "../../assets/techniques/facebook.svg";
import firebaseIcon from "../../assets/techniques/firebase.svg";
import googleIcon from "../../assets/techniques/google.svg";
import matertialUiIcon from "../../assets/techniques/materialui.svg";
import nextjsIcon from "../../assets/techniques/nextjs.svg";
import reactIcon from "../../assets/techniques/react.svg";
import sassIcon from "../../assets/techniques/sass.svg";

// ajman images
import ajmanSrc1 from "../../assets/projects/AjmanSelfInspection/1.jpg";
import ajmanSrc2 from "../../assets/projects/AjmanSelfInspection/2.jpg";
import ajmanSrc3 from "../../assets/projects/AjmanSelfInspection/3.jpg";
import ajmanSrc4 from "../../assets/projects/AjmanSelfInspection/4.jpg";
import ajmanSrc5 from "../../assets/projects/AjmanSelfInspection/5.jpg";

// Meta cms images
import metaCmsSrc1 from "../../assets/projects/MetaCms/1.jpg";
import metaCmsSrc2 from "../../assets/projects/MetaCms/2.jpg";
import metaCmsSrc3 from "../../assets/projects/MetaCms/3.jpg";
import metaCmsSrc4 from "../../assets/projects/MetaCms/4.jpg";
import metaCmsSrc5 from "../../assets/projects/MetaCms/5.jpg";

// spare admin images
import spareAdminSrc1 from "../../assets/projects/sparePartsAdmin/1.jpg";
import spareAdminSrc2 from "../../assets/projects/sparePartsAdmin/2.jpg";
import spareAdminSrc3 from "../../assets/projects/sparePartsAdmin/3.jpg";
import spareAdminSrc4 from "../../assets/projects/sparePartsAdmin/4.jpg";
import spareAdminSrc5 from "../../assets/projects/sparePartsAdmin/5.jpg";

// spare Parts images
import SparePartsSrc1 from "../../assets/projects/sparePartsWeb/1.jpg";
import SparePartsSrc2 from "../../assets/projects/sparePartsWeb/2.jpg";
import SparePartsSrc3 from "../../assets/projects/sparePartsWeb/3.jpg";
import SparePartsSrc4 from "../../assets/projects/sparePartsWeb/4.jpg";
import SparePartsSrc5 from "../../assets/projects/sparePartsWeb/5.jpg";

// Meta website images
import MetaWebsiteSrc1 from "../../assets/projects/MetaWebsite/1.jpg";
import MetaWebsiteSrc2 from "../../assets/projects/MetaWebsite/2.jpg";
import MetaWebsiteSrc3 from "../../assets/projects/MetaWebsite/3.jpg";
import MetaWebsiteSrc4 from "../../assets/projects/MetaWebsite/4.jpg";
import MetaWebsiteSrc5 from "../../assets/projects/MetaWebsite/5.jpg";

// Safeone website images
import SafeOneSrc1 from "../../assets/projects/SafeOneGroup/1.jpg";
import SafeOneSrc2 from "../../assets/projects/SafeOneGroup/2.jpg";
import SafeOneSrc3 from "../../assets/projects/SafeOneGroup/3.jpg";
import SafeOneSrc4 from "../../assets/projects/SafeOneGroup/4.jpg";
import SafeOneSrc5 from "../../assets/projects/SafeOneGroup/5.jpg";
export const data = [
  {
    id: 1,
    category: "system",
    title: "Ajman Self Inspiction",
    description:
      "Smart system to make inspection process faster, more efficient, and smarter using artificial intelligence.",
    link: "http://62.171.156.160:1096/login",
    techniques: [
      { techName: "React JS", icon: reactIcon },
      { techName: "Bootstarp", icon: bootstrapIcon },
      { techName: "Sass", icon: sassIcon },
      { techName: "Google Maps", icon: googleIcon },
    ],
    images: [ajmanSrc1, ajmanSrc2, ajmanSrc3, ajmanSrc4, ajmanSrc5],
  },
  {
    id: 2,
    category: "system",
    title: "Meta CMS",
    description:
      "It offers awareness and recognition of your brand to the customers for an enhanced communication.",
    images: [metaCmsSrc1, metaCmsSrc2, metaCmsSrc3, metaCmsSrc4, metaCmsSrc5],
    link: "https://Spare.ae",
    techniques: [
      { techName: "React JS", icon: reactIcon },
      { techName: "Bootstarp", icon: bootstrapIcon },
      { techName: "Sass", icon: sassIcon },
      { techName: "Google Maps", icon: googleIcon },
    ],
  },
  {
    id: 3,
    category: "system",
    title: "AE Spare Admin",
    description:
      "this is description section this is description section this is description section",
    images: [
      spareAdminSrc1,
      spareAdminSrc2,
      spareAdminSrc3,
      spareAdminSrc4,
      spareAdminSrc5,
    ],
    link: "https://Spare.ae",
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
    id: 4,
    category: "e-commerce",
    title: "AE Spare Parts",
    description:
      "E-Commerce platform ,It offers customers a variety of shopping car spare parts at the best prices in the region.",
    images: [
      SparePartsSrc1,
      SparePartsSrc2,
      SparePartsSrc3,
      SparePartsSrc4,
      SparePartsSrc5,
    ],
    link: "https://Spare.ae",
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
    id: 5,
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
    ],
    link: "https://foliometasolweb.meta-itech.com/",
    techniques: [
      { techName: "Next JS", icon: nextjsIcon },
      {
        techName: "Material Ui",
        icon: matertialUiIcon,
      },
    ],
  },
  {
    id: 6,
    category: "websites",
    title: "Safe One Group",
    description:
      "Safe One Group website. Company for Building & Constructions based in UAE, Abu Dhabi Emirate",
    images: [SafeOneSrc1, SafeOneSrc2, SafeOneSrc3, SafeOneSrc4, SafeOneSrc5],
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
