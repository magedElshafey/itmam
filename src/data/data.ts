// types
import { Nav } from "../types/Nav";
import { Socials } from "../types/Socials";
import { Card } from "../types/Card";
// assets
import {
  FaFacebook,
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks: Nav[] = [
  {
    name: "Home",
    link: "/",
    id: 1,
  },
  {
    name: "About",
    link: "/about",
    id: 2,
  },
  {
    name: "asset managment",
    link: "/contact",
    id: 3,
    list: [
      {
        name: "asset managment 1",
        link: "/test",
        id: 3,
      },
      {
        name: "asset managment 2",
        link: "/test",
        id: 4,
      },
    ],
  },
  {
    name: "investment banking",
    link: "/services",
    id: 5,
    list: [
      {
        name: "asset managment 1",
        link: "/test",
        id: 3,
      },
      {
        name: "asset managment 2",
        link: "/test",
        id: 4,
      },
    ],
  },
  {
    name: "financial consulting",
    link: "/services",
    id: 6,
    list: [
      {
        name: "asset managment 1",
        link: "/test",
        id: 3,
      },
      {
        name: "asset managment 2",
        link: "/test",
        id: 4,
      },
    ],
  },
];
export const footerLinks: Nav[] = [
  {
    name: "asset managment",
    link: "/contact",
    id: 3,
    list: [
      {
        name: "asset managment 1",
        link: "/test",
        id: 3,
      },
      {
        name: "asset managment 2",
        link: "/test",
        id: 4,
      },
    ],
  },
  {
    name: "investment banking",
    link: "/services",
    id: 5,
    list: [
      {
        name: "asset managment 1",
        link: "/test",
        id: 3,
      },
      {
        name: "asset managment 2",
        link: "/test",
        id: 4,
      },
    ],
  },
  {
    name: "financial consulting",
    link: "/services",
    id: 6,
    list: [
      {
        name: "asset managment 1",
        link: "/test",
        id: 3,
      },
      {
        name: "asset managment 2",
        link: "/test",
        id: 4,
      },
    ],
  },
  {
    name: "terms and conditions",
    link: "/services",
    id: 6,
    list: [
      {
        name: "privacy and policy",
        link: "/privacy",
        id: 3,
      },
      {
        name: "terms and conditionss",
        link: "/terms",
        id: 4,
      },
    ],
  },
];
export const socials: Socials[] = [
  {
    name: "whatsapp",
    url: "https://wa.me/+201022153359",
    icon: FaWhatsapp,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/",
    icon: FaXTwitter,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "behance",
    url: "https://www.behance.com/",
    icon: FaBehance,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "snapchat",
    url: "https://www.snapchat.com/",
    icon: FaSnapchatGhost,
  },
];
export const mainSercices: Card[] = [
  {
    id: 1,
    title: "الاستشارات المالية",
    descreption:
      "خدمات الاستشارات المالية تشمل مجموعة متنوعة من الخدمات المالية والاستثمارية التي تقدمها الشركات والمؤسسات المتخصصة للعملاء الذين يبحثون عن الإرشاد والاستشارات فيما يتعلق بالشؤون المالية والاستثمارية",
    btnText: "المزيد",
    path: "/services",
  },
  {
    id: 2,
    title: "الخدمات المصرفيةالاستثمارية",
    descreption:
      "خدمة الطرح والإدراج في السوق الموازية تشير عمومًا إلى عملية إدراج الشركات في الأسواق المالية البديلة أو الموازية",
    btnText: "المزيد",
    path: "/services",
  },
  {
    id: 3,
    btnText: "المزيد",
    path: "/services",
    title: "إدارة الأصول",
    descreption:
      "خدمات إدارة الأصول تشمل مجموعة واسعة من الخدمات المالية والاستثمارية المتعلقة بإدارة الأصول المالية للعملاء",
  },
  {
    id: 4,
    title: "الاستشارات المالية",
    descreption:
      "خدمات الاستشارات المالية تشمل مجموعة متنوعة من الخدمات المالية والاستثمارية التي تقدمها الشركات والمؤسسات المتخصصة للعملاء الذين يبحثون عن الإرشاد والاستشارات فيما يتعلق بالشؤون المالية والاستثمارية",
    btnText: "المزيد",
    path: "/services",
  },
  {
    id: 5,
    title: "الخدمات المصرفيةالاستثمارية",
    descreption:
      "خدمة الطرح والإدراج في السوق الموازية تشير عمومًا إلى عملية إدراج الشركات في الأسواق المالية البديلة أو الموازية",
    btnText: "المزيد",
    path: "/services",
  },
  {
    id: 6,
    btnText: "المزيد",
    path: "/services",
    title: "إدارة الأصول",
    descreption:
      "خدمات إدارة الأصول تشمل مجموعة واسعة من الخدمات المالية والاستثمارية المتعلقة بإدارة الأصول المالية للعملاء",
  },
  {
    id: 7,
    title: "الاستشارات المالية",
    descreption:
      "خدمات الاستشارات المالية تشمل مجموعة متنوعة من الخدمات المالية والاستثمارية التي تقدمها الشركات والمؤسسات المتخصصة للعملاء الذين يبحثون عن الإرشاد والاستشارات فيما يتعلق بالشؤون المالية والاستثمارية",
    btnText: "المزيد",
    path: "/services",
  },
  {
    id: 8,
    title: "الخدمات المصرفيةالاستثمارية",
    descreption:
      "خدمة الطرح والإدراج في السوق الموازية تشير عمومًا إلى عملية إدراج الشركات في الأسواق المالية البديلة أو الموازية",
    btnText: "المزيد",
    path: "/services",
  },
  {
    id: 9,
    btnText: "المزيد",
    path: "/services",
    title: "إدارة الأصول",
    descreption:
      "خدمات إدارة الأصول تشمل مجموعة واسعة من الخدمات المالية والاستثمارية المتعلقة بإدارة الأصول المالية للعملاء",
  },
];
