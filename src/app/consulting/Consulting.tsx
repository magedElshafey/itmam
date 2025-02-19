import Hero from "../../components/common/hero/Hero";
import assets from "../../assets/assets.png";
import Title from "../../components/common/title/Title";
import MainCard from "../../components/common/cards/MainCard";
import { consulting } from "../../data/data";
import BgForm from "../../components/common/bgForm/BgForm";
import MainInput from "../../components/common/inputs/MainInput";
import SendButton from "../../components/common/buttons/SendButton";
import MainTextArea from "../../components/common/inputs/MainTextArea";
import { useTranslation } from "react-i18next";

const Consulting = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero title="الاستشارات المالية" image={assets} />
      <div className="my-3 md:my-8">
        <Title title="خدمات الاستشارات المالية" />
        <p className="text-center mb-5 w-full md:w-[65%] mx-auto leading-relaxed">
          خدمات الاستشارات المالية تشمل مجموعة متنوعة من الخدمات المالية
          والاستثمارية التي تقدمها الشركات والمؤسسات المتخصصة للعملاء الذين
          يبحثون عن الإرشاد والاستشارات فيما يتعلق بالشؤون المالية والاستثمارية.
          تهدف هذه الخدمات إلى مساعدة العملاء في تحقيق الأهداف المالية
          والاستثمارية وتوفير الحلول المالية الملائمة والمبتكرة لتحقيق التنوع
          والنمو المالي
        </p>
        <div className="container mx-auto px-8 md:px-16">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-12 my-3 md:my-8">
            {consulting.map((item) => (
              <MainCard index={item?.id} key={item.id} data={item} />
            ))}
          </div>
          <BgForm>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6 lg:gap-8">
              <div>
                <p className="mb-2 text-xs md:text-sm">{t("contact us")}</p>
                <p className="font-bold mb-3 text-base md:text-md lg:text-lg xl:text-xl">
                  الاستشارات المالية
                </p>
                <p>
                  تفضلوا بالتواصل معنا اليوم لاستكشاف كيف يمكن لشركتنا مساعدتكم
                  في تحقيق أهدافكم المالية وتحقيق النمو المستدام في مجال
                  الاستثمارات
                </p>
              </div>
              <form>
                <div className="my-3">
                  <MainInput type="text" placeholder="name" />
                </div>
                <div className="my-3">
                  <MainInput type="text" placeholder="phone" />
                </div>
                <div className="my-3">
                  <MainInput type="email" placeholder="email" />
                </div>
                <div className="my-3">
                  <MainTextArea />
                </div>
                <div className="w-full flex justify-center">
                  <SendButton />
                </div>
              </form>
            </div>
          </BgForm>
        </div>
      </div>
    </>
  );
};

export default Consulting;
