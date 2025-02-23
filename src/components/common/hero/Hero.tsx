import { Link, useLocation } from "react-router-dom";
import HtmlRenderer from "../html/HtmlRender";
import { useTranslation } from "react-i18next";
interface HeroProps {
  title: string;
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
  const { t } = useTranslation();
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-screen h-[450px] lg:h-[550px] overflow-hidden">
        <img
          src={image}
          alt="hero"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
          <div className="container mx-auto px-8 md:px-16 h-full">
            <div
              className={`w-full h-full flex items-center ${
                pathname === "/" ? "justify-start" : "justify-center"
              }`}
            >
              <div>
                <h1
                  className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-8xl  ${
                    descreption ? "mb-2" : ""
                  }`}
                >
                  {t(title)}
                </h1>
                {descreption && <HtmlRenderer html={descreption} />}
                {metaDescreption && (
                  <p
                    className={`text-white text-base md:text-md lg:text-lg xl:text-xl w-full md:w-[80%] lg:w-[60%] ${
                      btns && btns?.length ? "mb-3" : ""
                    }`}
                  >
                    {metaDescreption}
                  </p>
                )}
                {btns && btns?.length && (
                  <div className="flex items-center gap-3 flex-wrap">
                    {btns?.map((item, index: number) => (
                      <Link
                        key={index}
                        to={item?.path}
                        className="bg-white text-darkMainColor p-4 flex items-center flex-wrap justify-center rounded-xl duration-500 min-w-[180px]  hover:bg-babyBlueColor hover:text-white"
                      >
                        {t(item?.name)}
                      </Link>
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
