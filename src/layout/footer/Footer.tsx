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
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        bounce: 0.4,
      }}
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
      <div className="container mx-auto px-8  md:px-16 lg:px-24 py-8 flex items-center">
        <div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-8">
            <Logo logo={whiteLogo} />
            {slogan ? (
              <div className="flex-1 text-white">
                <p className="w-full lg:w-[90%] text-center leading-relaxed">
                  {slogan}
                </p>
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-8">
            <ServicesLinks services={services} />
            <FooterLinks />
          </div>
          <Details email={email} location={location} />
          <CallUsBtn />
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
          {copyRight ? <CopyRight copyRight={copyRight} /> : null}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
