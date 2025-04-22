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
  {
    name: "Financial statements",
    link: "/lists",
    id: 3,
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
