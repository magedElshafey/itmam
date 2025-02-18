import Hero from "../../components/common/hero/Hero";
import hero from "../../assets/hero.png";
import bg from "../../assets/bg-img.png";
import Title from "../../components/common/title/Title";
import { mainSercices } from "../../data/data";
import { Card } from "../../types/Card";
import MainCard from "../../components/common/cards/MainCard";
import { GoArrowUpLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Vission from "../../components/home/Vission";
import vission from "../../assets/vission.png";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        image={hero}
        title="مرحبا بكم في إتمام"
        descreption="للإستثمار"
        metaDescreption="نحن نلتزم بتقديم خدمات استثمارية متميزة وحلول مالية مبتكرة لعملائنا في مختلف القطاعات. تفضلوا بالتواصل معنا اليوم لاستكشاف كيف يمكن لشركتنا مساعدتكم في تحقيق أهدافكم المالية وتحقيق النمو المستدام في مجال الاستثمارات"
        btns={[
          {
            name: "سجل اهتماماتك",
            path: "/contact",
          },
          {
            name: "الفرص الاستثمارية",
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
      {mainSercices?.length && (
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8">
            {mainSercices?.slice(0, 3)?.map((item: Card, index: number) => (
              <MainCard key={index} data={item} index={index} />
            ))}
          </div>
          <div className="w-full flex justify-center mb-8">
            <Link
              to="/services"
              className="flex items-center justify-center gap-1 bg-white py-3 px-8 rounded-xl border border-mainColor text-mainColor duration-300 hover:bg-mainColor hover:text-white"
            >
              <span>{t("read more")}</span>
              <GoArrowUpLeft />
            </Link>
          </div>
          <Vission
            image={vission}
            title="الرؤية"
            descreption="نرغب في أن نصبح من أوائل الشركات المالية من حيث حجم الأصول المدارة"
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
