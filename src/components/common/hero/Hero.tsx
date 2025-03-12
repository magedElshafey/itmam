import { Link, useLocation } from "react-router-dom";
import HtmlRenderer from "../html/HtmlRender";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  descreption?: string;
  metaDescreption?: string;
  btns?: {
    name: string;
    path: string;
  }[];
  image: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  descreption,
  metaDescreption,
  btns,
  image,
}) => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  return (
    <div className="overflow-hidden">
      <div
        className={`relative w-screen h-[450px] ${
          pathname === "/" ? "lg:h-screen" : "lg:h-[550px]"
        } overflow-hidden`}
      >
        <img
          src={image}
          alt="hero"
          className="w-full h-full object-cover"
          width="1920"
          height="550"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 h-full">
            <div
              className={`w-full h-full flex items-center ${
                pathname === "/" ? "justify-start" : "justify-center"
              }`}
            >
              <div>
                {title ? (
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-white ${
                      i18n.language === "ar"
                        ? "text-xl md:text-2xl lg:text-3xl xl:text-5xl"
                        : "text-base md:text-md lg:text-lg xl:text-xl"
                    } ${descreption ? "mb-2" : ""}`}
                  >
                    {t(title)}
                  </motion.h1>
                ) : null}
                {descreption && <HtmlRenderer html={descreption} />}
                {metaDescreption && <HtmlRenderer html={metaDescreption} />}
                {btns && btns?.length && (
                  <div className="mt-7 flex items-center gap-2 flex-wrap">
                    {btns?.map((item, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.1,
                        }}
                      >
                        <Link
                          to={item?.path}
                          className="bg-white text-darkMainColor py-3 px-4 flex items-center flex-wrap justify-center rounded-3xl duration-500 min-w-[150px]  hover:bg-babyBlueColor hover:text-white"
                        >
                          {t(item?.name)}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
