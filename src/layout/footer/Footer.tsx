import { useTranslation } from "react-i18next";
import Logo from "../../components/common/logo/Logo";
import Social from "../../components/common/social/Social";
import { ServiceWithChild } from "../../types/ServiceWithChild";
import { motion } from "framer-motion";
import ServicesLinks from "../common/services/ServicesLinks";
import FooterLinks from "./components/footerLinks/FooterLinks";
import Details from "./components/details/Details";
import CallUsBtn from "./components/callus/CallUsBtn";
import CopyRight from "./components/copyright/CopyRight";
import HtmlRenderer from "../../components/common/html/HtmlRender";

interface FooterProps {
  email?: string;
  location?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  x?: string;
  services?: ServiceWithChild[];
  whiteLogo: string;
  slogan?: string;
  copyRight?: string;
  footer_image?: string;
  embed_map?: string;
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
  whiteLogo,
  slogan,
  copyRight,
  footer_image,
  embed_map,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-screen mt-4 relative">
      {footer_image && (
        <img
          src={footer_image}
          alt="Footer Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      <div className="absolute inset-0 bg-black opacity-55"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          bounce: 0.2,
        }}
        className="relative container mx-auto px-8 md:px-16 lg:px-24 py-8 flex items-center"
      >
        <div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-8">
            <Logo logo={whiteLogo} />
            {slogan && (
              <div className="flex-1 ">
                <HtmlRenderer html={slogan} />
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-8">
            <ServicesLinks services={services} />
            <FooterLinks />
          </div>
          <div
            className={
              embed_map
                ? "flex items-center justify-between flex-col md:flex-row gap-4"
                : ""
            }
          >
            <div>
              <Details email={email} location={location} />
              <CallUsBtn />
            </div>

            {embed_map ? (
              <div className="w-full md:w-[40%]">
                <iframe
                  src={embed_map}
                  width="100%"
                  height="250"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : null}
          </div>

          <div className="mb-6">
            <h5
              className={`mb-3 text-white ${
                i18n.language === "ar"
                  ? "text-md md:text-lg lg:text-xl xl:text-2xl"
                  : ""
              }`}
            >
              {t("follow us")}
            </h5>
            <Social
              facebook={facebook}
              whatsapp={whatsapp}
              tiktok={tiktok}
              instagram={instagram}
              youtube={youtube}
              x={x}
            />
          </div>
          {copyRight && <CopyRight copyRight={copyRight} />}
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
