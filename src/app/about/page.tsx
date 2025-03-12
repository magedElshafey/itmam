import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets-min.webp";
import about from "../../assets/about.png";
import Loader from "../../components/common/loader/Loader";
import useAbout from "../home/api/useAbout";
import { About } from "../../types/About";
import HtmlRenderer from "../../components/common/html/HtmlRender";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetchEmployee from "./api/useFetchEmployee";
import Title from "../../components/common/title/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Employee {
  id: number;
  name: string;
  position: string;
  image: string;
  children: {
    id: number;
    name: string;
    position: string;
    image: string;
  }[];
}

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const { isLoading, data: data } = useAbout();
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isLoading: loadingEmployee, data: employees } = useFetchEmployee();
  const settings = {
    dots: false,
    autoplay: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    verical: false,
    slidesToScroll: 1,
    rtl: i18n.language === "ar",
    initialSlide: i18n.language === "ar" ? employees?.length - 1 : 0,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();
  if (isLoading || loadingEmployee) {
    return <Loader />;
  }
  const values = data?.filter((item: About) => item?.type === "values");
  const aboutData = data?.find((item: About) => item?.type === "about");
  console.log("org_structure", aboutData?.org_structure);
  return (
    <>
      <Head
        title={tabTitle(aboutData?.meta_title || t("about us"))}
        description={aboutData?.meta_description || ""}
      />
      <div className="overflow-x-hidden">
        <Hero image={bg} title={t("about us")} />
        {aboutData?.description && (
          <div className="container mx-auto px-8 md:px-16 lg:px-24 my-4 md:my-6 lg:my-8 text-center">
            <HtmlRenderer html={aboutData?.description} />
          </div>
        )}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-[#A56FCC] py-4 flex items-center bg-opacity-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <p
                className={`font-bold text-xl md:text-2xl lg:text-3xl  mb-3 lg:mb-5 ${
                  i18n.language === "ar" ? "xl:text-5xl" : "xl:text-4xl"
                }`}
              >
                {t("our main values")}
              </p>
              <ul>
                {values?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 mb-2 flex-wrap"
                  >
                    <p
                      className={`font-bold ${
                        i18n.language === "ar"
                          ? "text-md md:text-lg lg:text-xl xl:text-3xl"
                          : "text-base lg:text-lg"
                      }`}
                    >
                      {item?.name} :
                    </p>
                    <HtmlRenderer html={item?.description} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              alt="about"
              src={aboutData?.image || about}
              className="w-full max-h-[500px]"
            />
          </div>
        </div>
        <div className="container mx-auto px-8 md:px-16 lg:px-24 my-4 md:my-6 lg:my-8 xl:my-12">
          <div className="relative">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2  bg-darkMainColor text-white w-8 h-8 rounded-[50%] flex items-center justify-center  ${
                currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <IoIosArrowBack size={20} />
            </button>

            <button
              onClick={nextSlide}
              disabled={
                currentSlide ===
                (employees?.length || 0) - settings.slidesToShow
              }
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-darkMainColor text-white w-8 h-8 rounded-[50%] flex items-center justify-center ${
                currentSlide ===
                (employees?.length || 0) - settings.slidesToShow
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <IoIosArrowForward size={20} />
            </button>
            <div className="my-4 md:my-6 lg:my-8 xl:my-12">
              <Title title={t("Functional structure")} />
            </div>
            <Slider {...settings}>
              {employees?.map((item: Employee) => (
                <div
                  dir={i18n.language === "ar" ? "rtl" : "ltr"}
                  key={item?.id}
                  className="px-3 "
                >
                  <div className="">
                    <img
                      loading="lazy"
                      alt={item?.name}
                      src={item?.image}
                      className="w-64 mx-auto h-64"
                    />
                  </div>
                  <div className="mt-3 flex flex-col items-center justify-center text-mainColor text-center">
                    <p
                      className={`text-lg md:text-xl lg:text-2xl  font-bold ${
                        i18n.language === "ar" ? "xl:text-4xl" : "xl:text-3xl"
                      }`}
                    >
                      {item?.name}
                    </p>
                    <p className= {`text-base md:textmd lg:text-lg  ${i18n.language === "ar" ? "xl:text-2xl" : "xl:text-xl"}`}>
                      {item?.position}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="my-4 md:my-6 lg:my-8 xl:my-12">
            <Title title={t("Organizational structure")} />
          </div>
          <div className="w-full mt-4 md:mt-6 lg:mt-8 md:w-[80%] mx-auto">
            <img
              className="w-full max-h-[480px]"
              alt={aboutData?.meta_title || ""}
              src={aboutData?.org_structure}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
