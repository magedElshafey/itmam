import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/bg-img.png";
import Title from "../../components/common/title/Title";
import MainCard from "../../components/common/cards/MainCard";
import { GoArrowUpLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Vission from "../../components/home/Vission";
import vission from "../../assets/vission.png";
import Message from "../../components/home/Message";
import Contact from "../../components/home/Contact";
import RegisterInterst from "../../components/home/RegisterInterst";
import useHeroSection from "./api/useHeroSection";
import Loader from "../../components/common/loader/Loader";
import ErrorPopup from "../../components/common/popup/ErrorPoup";
import useMainServices from "./api/useMainServices";
import { MainServices } from "../../types/MainServices";
interface HomeProps {
  email?: string;
}
const HomePage: React.FC<HomeProps> = ({ email }) => {
  const { t } = useTranslation();
  const { isError, isLoading, data } = useHeroSection();
  const {
    isError: isErrorMainServices,
    isLoading: isLoadingMainServices,
    data: mainServices,
  } = useMainServices();
  console.log("Data", data);
  console.log("mainServices", mainServices);
  if (isLoading || isLoadingMainServices) {
    return <Loader />;
  }
  if (isError || isErrorMainServices) {
    return (
      <ErrorPopup
        title="حدث خطأ حاول مرة اخرى"
        subTitle="قم بإعادة تحميل الصفحة"
      />
    );
  }
  return (
    <>
      <Hero
        image={data?.image || ""}
        title={data?.name || ""}
        descreption={data?.description}
        metaDescreption={data?.sub_description}
        btns={[
          {
            name: "Register your interest",
            path: "/contact",
          },
          {
            name: "Investment opportunities",
            path: "/investment-opportunities",
          },
        ]}
      />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "140px",
        }}
      ></div>
      <Title title="our main services" />
      {mainServices?.length && (
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8">
            {mainServices
              ?.slice(0, 3)
              ?.map((item: MainServices, index: number) => (
                <MainCard key={index} data={item} />
              ))}
          </div>
          <div className="w-full flex justify-center mb-8">
            <Link
              to="/services"
              className="flex items-center justify-center gap-1 bg-white py-3 px-8 rounded-xl border border-mainColor text-mainColor duration-300 hover:bg-mainColor hover:text-white"
            >
              <GoArrowUpLeft />
              <span>{t("read more")}</span>
            </Link>
          </div>
          <Vission
            image={vission}
            title="الرؤية"
            descreption="نرغب في أن نصبح من أوائل الشركات المالية من حيث حجم الأصول المدارة"
          />
          <div className="my-6 md:my-8">
            <Title title="message" />
            <Message />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            <RegisterInterst email={email} />
            <div className="w-full md:w-1/2">
              <div className="w-full md:w-3/4 mx-auto">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
