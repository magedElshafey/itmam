import { useTranslation } from "react-i18next";
import { footerLinks } from "../data/data";
import { Link } from "react-router-dom";
import Logo from "../components/common/logo/Logo";
import { Nav } from "../types/Nav";
import coins from "../assets/coins.png";
import Social from "../components/common/social/Social";
import locationIcom from "../assets/location.png";
import emailIcon from "../assets/email.png";
import { ServiceWithChild } from "../types/ServiceWithChild";
import createSlug from "../utils/createSlug";
interface FooterProps {
  email?: string;
  location?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  x?: string;
  services: ServiceWithChild[];
  whiteLogo: string
  slogan: string, 
  copyRight: string, 
  footer_image : string
}
const Footer: React.FC<FooterProps> = ({
  email,
  location,
  facebook,
  instagram,
  youtube,
  tiktok,
  whatsapp,
  x,
  services,
  whiteLogo , 
  slogan, 
  copyRight, 
  footer_image
}) => {
  const { t } = useTranslation();
  return (
    <div
      className="w-screen mt-4"
      style={{
        backgroundImage: `url(${footer_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",

        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
        backgroundOrigin: "border-box",
      }}
    >
      <div className="container mx-auto px-8  lg:px-16 py-8 flex items-center">
        <div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-8">
            <Logo logo={whiteLogo} />
            <div className="flex-1 text-white">
              <p className="w-full lg:w-[90%] text-center leading-relaxed">
              {slogan}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-8">
            {services?.map((item: ServiceWithChild, index: number) => (
              <div key={index}>
                {item?.child_services && item?.child_services?.length ? (
                  <h5 className="text-white mb-4">{t(item?.name)}</h5>
                ) : (
                  <Link
                    to={`/services/${createSlug(item?.name)}`}
                    state={{
                      serviceId: item?.id,
                    }}
                    className="text-white mb-4"
                  >
                    {t(item?.name)}
                  </Link>
                )}

                {item?.child_services && item?.child_services?.length
                  ? item?.child_services?.map(
                      (subItem: ServiceWithChild, subIndex: number) => (
                        <Link
                          key={subIndex}
                          to={`/services/${createSlug(subItem?.name)}`}
                          state={{
                            serviceId: subItem?.id,
                          }}
                          className="flex items-center gap-2 mb-3 text-white w-fit duration-300 hover:text-babyBlueColor hover:underline group"
                        >
                          <img
                            alt="icon"
                            src={coins}
                            className="w-[15px] h-[15px] object-contain duration-300 group-hover:rotate-180"
                          />
                          <span>{t(subItem?.name)}</span>
                        </Link>
                      )
                    )
                  : null}
              </div>
            ))}
            {footerLinks?.map((item: Nav, index: number) => (
              <div key={index}>
                <h5 className="text-white mb-4">{t(item?.name)}</h5>
                {item?.list &&
                  item?.list?.length &&
                  item?.list?.map((subItem: Nav, subIndex: number) => (
                    <Link
                      key={subIndex}
                      to={subItem?.link}
                      className="flex items-center gap-2 mb-3 text-white w-fit duration-300 hover:text-babyBlueColor hover:underline group"
                    >
                      <img
                        alt="icon"
                        src={coins}
                        className="w-[15px] h-[15px] object-contain duration-300 group-hover:rotate-180"
                      />
                      <span>{t(subItem?.name)}</span>
                    </Link>
                  ))}
              </div>
            ))}
          </div>
          <div className="flex  gap-2 mb-3">
            <img
              alt="icon"
              src={locationIcom}
              className="w-[15px] h-[15px] object-contain"
            />
            <p className="text-white">{location}</p>
          </div>
          <div className="flex  gap-2 mb-5">
            <img
              alt="icon"
              src={emailIcon}
              className="w-[15px] h-[15px] object-contain"
            />
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer"
              className=" lowercase text-white duration-300 hover:underline"
            >
              {email}
            </a>
          </div>
          <Link
            to="/call-us"
            className="bg-white text-darkMainColor flex items-center justify-center py-2 px-6 duration-300 hover:bg-babyBlueColor hover:text-white rounded-xl w-fit mb-4"
          >
            {t("call us")}
          </Link>
          <div className="mb-6">
            <h5 className="mb-3 text-white">{t("follow us")}</h5>
            <Social
              facebook={facebook}
              whatsapp={whatsapp}
              tiktok={tiktok}
              instagram={instagram}
              youtube={youtube}
              x={x}
            />
          </div>
          <div className="w-full flex justify-center">
            <p className="w-full md:w-[70%] text-center text-white leading-relaxed">
          {copyRight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
