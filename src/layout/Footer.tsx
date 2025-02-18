import { useTranslation } from "react-i18next";
import { footerLinks } from "../data/data";
import { Link } from "react-router-dom";
import { socials } from "../data/data";
import Logo from "../components/common/logo/Logo";
import logo from "../assets/whiteLogo.png";
import { Nav } from "../types/Nav";
import coins from "../assets/coins.png";
import location from "../assets/location.png";
import email from "../assets/email.png";
import bg from "../assets/footer-bg.png"
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-screen mt-4" style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
        backgroundOrigin: "border-box",
    }}>
      <div className="container mx-auto px-8  lg:px-16 py-8 flex items-center">
        <div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-8">
            <Logo logo={logo} />
            <div className="flex-1 text-white">
              <p className="w-full lg:w-[90%] text-center leading-relaxed">
                تأسست إتمام في المملكة العربية السعودية في عام ****، مع التزام
                قوي بتقديم الخدمات المالية المبتكرة والاستثمارات الذكية
                لعملائنا. خلال رحلتنا، استطعنا بناء سمعة متميزة كشركة رائدة في
                مجال الاستثمارات المالية في المملكة، والتي تقوم على الاعتماد على
                المهنية والشفافية في جميع جوانب أعمالنا
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-8">
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
              src={location}
              className="w-[15px] h-[15px] object-contain"
            />
            <p className="text-white">
              الدور الأول مركز رادن6227 شارع العليا - المروج - الرياض
            </p>
          </div>
          <div className="flex  gap-2 mb-5">
            <img
              alt="icon"
              src={email}
              className="w-[15px] h-[15px] object-contain"
            />
            <a
              href="mailto:magedelshafey98@gmail.com"
              target="_blank"
              rel="noreferrer"
              className=" lowercase text-white duration-300 hover:underline"
            >
              magedelshafey98@gmail.com
            </a>
          </div>
          <a
            href="tel:+201022153359"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-darkMainColor flex items-center justify-center py-2 px-6 duration-300 hover:bg-babyBlueColor hover:text-white rounded-xl w-fit mb-4"
          >
            {t("call us")}
          </a>
          <div className="mb-6">
            <h5 className="mb-3 text-white">{t("follow us")}</h5>
            <ul className="flex items-center gap-4 flex-wrap text-babyBlueColor ">
              {socials?.map((item, index) => (
                <li key={index} >
                  <a
                    href={item?.url}
                    target="_blank"
                    rel="noreferrer"
                    className=" duration-300 hover:text-white hover:scale-110"
                  >
                    {item?.icon && <item.icon size={30} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <p className="w-full md:w-[70%] text-center text-white leading-relaxed">
              مرخصة من قبل هيئة سوق المال، ترخيص رقم (*******), شركة مساهمة
              مقفلة برأس مال 3 مليون ريال مدفوعة بالكامل ومقرها الرئيسي الرياض,
              سجل تجاري (1010964590) لممارسة أنشطة إدارة الاستثمارات، والترتيب،
              وتقديم المشورة. © {currentYear} - كل الحقوق محفوظة الى إتمام
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
/**
 *   <div className=" text-white pt-4">
                    <div>
                        <h1 className="mb-1">logo</h1>
                        <p>slogan</p>
                    </div>
                    <div>
                        <h4 className="mb-3">{t("links")}</h4>
                        <ul>
                            {navLinks?.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <Link to={item?.link} className="duration-300">
                                        {t(item.name)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-3">{t("contact us")}</h4>
                        <ul>
                            <li className="mb-2">
                                <a href={`https://wa.me/+201022153359`}>+201022153359</a>
                            </li>
                            <li className="mb-2">
                                <a className=" lowercase" href={`mailto:magedelshafey98@gmail.com`}>magedelshafey98@gmail.com</a>
                            </li>
                            <li>
                                El-Mansoura , Egypt
                            </li>
                        </ul>
                    </div>
                    <div>
                       
                    </div>
                </div>
                <div className="w-full py-3 flex items-center justify-center bg-blueColor  rounded-[8px] text-white gap-1 text-center opacity-50 mt-5">
                    {t("all rights reserved")} &copy; -  {t("refk")} {currentYear}
                </div>
 */
