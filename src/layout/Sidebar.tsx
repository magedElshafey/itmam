import { IoCloseSharp } from "react-icons/io5";
import { navLinks } from "../data/data";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useNavbarLogic from "./navbar/logic/useNavbarLogic";
import { IoIosArrowDown } from "react-icons/io";
import createSlug from "../utils/createSlug";
import { Nav } from "../types/Nav";
import CallToAction from "./callToAction/CallToAction";
import Social from "../components/common/social/Social";
interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarRef: React.RefObject<HTMLDivElement>;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  x?: string;
}
const Sidebar: React.FC<SidebarProps> = ({
  showSidebar,
  setShowSidebar,
  sidebarRef,
  facebook,
  instagram,
  youtube,
  tiktok,
  whatsapp,
  x,
}) => {
  const { t } = useTranslation();
  const {
    states: { activeDropDown },
    handlers: { setActiveDropDown },
  } = useNavbarLogic();
  return (
    <div
      ref={sidebarRef}
      className={`w-[94%] h-screen py-3 px-6 bg-custom-gradient duration-300 fixed top-0 z-[1000] ${
        showSidebar ? "left-0" : "left-[-400%]"
      }`}
    >
      <div>
        <button onClick={() => setShowSidebar(false)}>
          <IoCloseSharp className="text-2xl text-white" />
        </button>
      </div>
      <ul>
        {navLinks?.map((item, index) => (
          <li key={index} className="my-5">
            <NavLink
              onClick={() => setShowSidebar(false)}
              to={item?.link}
              className="text-white  duration-300 hover:text-babyBlueColor hover:underline flex items-center gap-3 group relative"
            >
              <span> {t(item?.name)}</span>
              {item?.list && item?.list?.length && (
                <>
                  <IoIosArrowDown size={15} />
                  <ul
                    className={`absolute top-full right-0 bg-white p-3 shadow-md transition-opacity duration-300 min-w-full rounded-lg text-start ${
                      activeDropDown === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    {item?.list?.map((subItem: Nav, subIndex: number) => (
                      <NavLink
                        key={subIndex}
                        className="block mb-3 text-mainColor duration-300 hover:underline"
                        to={`/services/${createSlug(subItem?.name)}`}
                        state={{
                          serviceId: subItem?.id,
                        }}
                        onClick={() => {
                          setActiveDropDown(null);
                          setShowSidebar(false);
                        }}
                      >
                        {t(subItem?.name)}
                      </NavLink>
                    ))}
                  </ul>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="my-5">
        <CallToAction
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
      <div className="mt-5">
        <h5 className="text-white mb-2">{t("follow us")} :</h5>
        <Social
          facebook={facebook}
          whatsapp={whatsapp}
          tiktok={tiktok}
          instagram={instagram}
          youtube={youtube}
          x={x}
        />
      </div>
    </div>
  );
};

export default Sidebar;
