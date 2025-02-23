// types
import { Nav } from "../types/Nav";
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
  
];
export const footerLinks: Nav[] = [
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
      {
        name: "Disclosure policy",
        link: "/policy",
        id: 5,
      },
    ],
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
