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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useFetchEmployee from "./api/useFetchEmployee";
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
  const { t } = useTranslation();
  const { isLoading, data: data } = useAbout();
  const { isLoading: loadingEmployee, data: employees } = useFetchEmployee();

  if (isLoading || loadingEmployee) {
    return <Loader />;
  }
  const values = data?.filter((item: About) => item?.type === "values");
  const aboutData = data?.find((item: About) => item?.type === "about");
  console.log("about data from about page", aboutData);
  console.log("about data from employees page", employees);
  return (
    <>
      <Head
        title={tabTitle(aboutData?.meta_title || t("about us"))}
        description={aboutData?.meta_description || ""}
      />
      <div className="overflow-x-hidden">
        <Hero image={bg} title="من نحن" />
        {aboutData?.description && (
          <div className="container mx-auto px-8 md:px-16 lg:px-24 my-4 md:my-6 lg:my-8 text-center">
            <HtmlRenderer html={aboutData?.description} />
          </div>
        )}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-[#A56FCC] py-4 flex items-center bg-opacity-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3">
                قيمنا الأساسية
              </p>
              <ul>
                {values?.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 mb-2">
                    <p className="font-bold text-md md:text-lg lg:text-xl xl:text-2xl">
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
          <div className="w-full md:w-[80%] mx-auto">
            <img
              className="w-full max-h-[380px]"
              alt={aboutData?.meta_title || ""}
              src={aboutData?.org_structure}
              loading="lazy"
            />
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-4xl"
        >
          {employees.map((item: Employee, index: number) => (
            <SwiperSlide key={index} className="p-2">
              <div className="">
                <img
                  loading="lazy"
                  alt={item?.name}
                  src={item?.image}
                  className="w-full h-64"
                />
              </div>
              <div className="mt-3 flex flex-col items-center justify-center gap-2 text-mainColor text-center">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                  {item?.name}
                </p>
                <p className="text-base md:textmd lg:text-lg xl:text-xl">
                  {item?.position}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AboutPage;
