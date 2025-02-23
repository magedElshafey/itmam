// hooks
import { useTranslation } from "react-i18next";
import useNavbarLogic from "./logic/useNavbarLogic";
import { NavLink } from "react-router-dom";
// assets
import { IoMdMenu, IoIosArrowDown } from "react-icons/io";
// types
import { Nav } from "../../types/Nav";
// data
import { navLinks } from "../../data/data";
// components
import Logo from "../../components/common/logo/Logo";
import Sidebar from "../Sidebar";
// utils
import createSlug from "../../utils/createSlug";
import CallToAction from "../callToAction/CallToAction";
import { ServiceWithChild } from "../../types/ServiceWithChild";
interface NavbarProps {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  x?: string;
  services: ServiceWithChild[];
  whiteLogo: string; 
  darkLogo: string; 
}
const Navbar: React.FC<NavbarProps> = ({
  facebook,
  instagram,
  youtube,
  tiktok,
  whatsapp,
  x,
  services,
  whiteLogo, 
  darkLogo
}) => {
  const { t } = useTranslation();
  const {
    states: { showSidebar, activeDropDown, scrolling, language },
    refs: { sidebarRef },
    handlers: {
      setShowSidebar,
      setActiveDropDown,
      handleShowSidebar,
      changeLanguageHandler,
    },
  } = useNavbarLogic();
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen py-4 flex items-center z-50 transition-all duration-300 ${
          scrolling ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            <Logo logo={scrolling ? darkLogo : whiteLogo} />
            <ul className="hidden lg:flex items-center gap-4 lg:gap-6 text-nowrap">
              {navLinks?.map((item: Nav, index: number) => (
                <li key={index}>
                  <NavLink
                    onMouseEnter={() => setActiveDropDown(index)}
                    onMouseLeave={() => setActiveDropDown(null)}
                    to={item?.link}
                    className={`duration-300 ${
                      scrolling
                        ? "text-black hover:text-mainColor"
                        : "text-white hover:text-babyBlueColor"
                    }  hover:underline  flex items-center gap-3 relative group text-base md:text-md  xl:text-xl`}
                  >
                    <span> {t(item.name)}</span>
                  
                  </NavLink>
                </li>
              ))}
              {services?.map((item: ServiceWithChild, index: number) => (
                <li key={index}>
                  <NavLink
                    onMouseEnter={() => setActiveDropDown(index)}
                    onMouseLeave={() => setActiveDropDown(null)}
                    to={`/services/${createSlug(item?.name)}`}
                    state={{
                      serviceId: item?.id,
                    }}
                    className={`duration-300 ${
                      scrolling
                        ? "text-black hover:text-mainColor"
                        : "text-white hover:text-babyBlueColor"
                    }  hover:underline  flex items-center gap-3 relative group text-base md:text-md  xl:text-xl`}
                  >
                    <span> {item.name}</span>
                    {item?.child_services && item?.child_services?.length ? (
                      <>
                        <IoIosArrowDown size={15} />
                        <ul
                          className={`absolute top-full right-0 bg-white py-3 px-6 shadow-md transition-opacity duration-100 min-w-full rounded-lg text-start ${
                            activeDropDown === index
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                        >
                          {item?.child_services?.map((subItem: ServiceWithChild, subIndex: number) => (
                            <NavLink
                              key={subIndex}
                              className="block mb-3 text-mainColor duration-300 hover:underline hover:translate-x-4 w-fit"
                              to={`/services/${createSlug(subItem?.name)}`}
                              state={{
                                serviceId: subItem?.id,
                              }}
                              onClick={() => setActiveDropDown(null)}
                            >
                              {t(subItem?.name)}
                            </NavLink>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <CallToAction scrolling={scrolling} />
              </div>
              <button onClick={handleShowSidebar}>
                <IoMdMenu
                  className={`lg:hidden ${
                    scrolling ? "text-darkMainColor" : "text-white"
                  }`}
                  size={30}
                />
              </button>
              <button
                onClick={() =>
                  changeLanguageHandler(language === "ar" ? "en" : "ar")
                }
                className={`flex items-center uppercase gap-4 ${
                  scrolling ? "text-darkMainColor" : "text-white"
                }`}
              >
                <span>|</span>
                <span>{language === "ar" ? "en" : "ar"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        sidebarRef={sidebarRef}
        facebook={facebook}
        instagram={instagram}
        youtube={youtube}
        tiktok={tiktok}
        whatsapp={whatsapp}
        x={x}
        services = {services}
      />
    </>
  );
};

export default Navbar;
