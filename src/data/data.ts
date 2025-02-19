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
    link: "/assets-managment",
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
    link: "/consulting",
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
export const assetsManagment: Card[] = [
  {
    id: 1,
    title: "صناديق الطرح العام",
    descreption:
      "تستهدف جمع الأموال من المستثمرين العامين عن طريق عرض الأسهم أو الوحدات للبيع علناً في الأسواق المالية",
    btnText: "تعرف على الخدمة",
    path: "/assets-managment",
  },
  {
    id: 2,
    title: "صناديق الطرح الخاص",
    descreption:
      "تم جمع رأس المال من مستثمرين محددين مثل الشركات الاستثمارية والأفراد الثريين",
    btnText: "تعرف على الخدمة",
    path: "/assets-managment",
  },
];
export const services: Card[] = [
  {
    id: 1,
    title: "خدمة الطرح والإدراج",
    descreption:
      "خدمة الطرح والإدراج في السوق الموازية تشير عمومًا إلى عملية إدراج الشركات في الأسواق المالية البديلة أو الموازية",
    btnText: "تعرف على الخدمة",
    path: "/services",
  },
  {
    id: 2,
    title: "عمليات الاندماج والاستحواذ",
    descreption:
      "خدمة عمليات الاندماج والاستحواذ تشير إلى العمليات التي تشمل اندماج شركتين أو استحواذ إحداهما على الأخرى، سواء كانتا متشابهتين في الطبيعة والحجم أو مختلفتين",
    btnText: "تعرف على الخدمة",
    path: "/services",
  },
  {
    id: 3,
    title: "الملكية الخاصة",
    descreption:
      "خدمة الملكية الخاصة تشير إلى الخدمات المتخصصة التي تقدمها شركات الاستثمار والخدمات المالية للأفراد الثرياء والعائلات ذات الدخل العالي",
    btnText: "تعرف على الخدمة",
    path: "/services",
  },
];
export const consulting: Card[] = [
  {
    id: 1,
    btnText: "تعرف على الخدمة",
    path: "/consulting",
    title: "الاستشارات في إدارة المخاطر",
    descreption:
      "خدمة الاستشارات في إدارة المخاطر تشير إلى الخدمات المقدمة من قبل الخبراء والمستشارين في مجال إدارة المخاطر للشركات والمؤسسات",
  },
  {
    id: 2,

    btnText: "تعرف على الخدمة",
    path: "/consulting",
    title: "التحليلات المالية والاقتصادية",
    descreption:
      "خدمة الاستشارات في التحليلات المالية والاقتصادية تشير إلى الخدمات المتخصصة التي تقدمها الشركات الاستشارية والمؤسسات المالية للعملاء الذين يبحثون عن تحليلات وتقييمات مالية واقتصادية متخصصة لاتخاذ القرارات المالية الصائبة",
  },
  {
    id: 3,

    btnText: "تعرف على الخدمة",
    path: "/consulting",
    title: "الخدمات الاستشارية في الاندماج والاستحواذ",
    descreption:
      "الشركات الاستشارية والمؤسسات المالية للشركات والمؤسسات الراغبة في الاندماج مع شركات أخرى أو الاستحواذ عليها",
  },
  {
    id: 4,
    title: "الاستشارات في الاستثمار",
    descreption:
      "خدمات الاستشارات في الاستثمار تشمل مجموعة متنوعة من الخدمات المالية والاستثمارية التي تقدمها الشركات الاستشارية والمؤسسات المالية للعملاء الذين يبحثون عن الإرشاد والتوجيه في عمليات الاستثمار المختلفة. تهدف هذه الخدمات إلى تحقيق العوائد المالية المرتفعة وإدارة المخاطر المالية من خلال تقديم الاستشارات المالية المتخصصة",
    btnText: "تعرف على الخدمة",
    path: "/consulting",
  },
  {
    id: 5,
    title: "الاستشارات في التمويل وإدارة الديون",
    descreption:
      "خدمات الاستشارات في التمويل وإدارة الديون تشمل مجموعة واسعة من الخدمات المالية والاستشارية التي تقدمها الشركات الاستشارية والمؤسسات المالية للعملاء الذين يبحثون عن الإرشاد والتوجيه فيما يتعلق بإدارة التمويل والديون بشكل فعال",
    btnText: "تعرف على الخدمة",
    path: "/consulting",
  },
];
export const messages: string[] = [
  "التركيز على تقديم منتجات وخدمات مبتكرة",
  "توظيف أفضل المحترفين في مجال الاستثمار",
  "التوجيه مع مصالح عملائنا على المدى الطويل",
  "الحفاظ على معرفة بالابتكارات العالمية وتخصيص عروضنا استنادًا إلى السياق المحلي",
  "الالتزام بفهم احتياجات عملائنا",
  "تقديم استراتيجيات استثمار قائمة على الأدلة من خلال إجراء أبحاث دقيقة",
  "التعامل مع العملاء بطريقة شفافة",
  "السعي إلى التميز وأعلى معايير الأخلاق",
  "التعاون مع متخصصين لتقديم حلاً شاملاً",
];
