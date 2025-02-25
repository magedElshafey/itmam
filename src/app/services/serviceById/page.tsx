import Loader from "../../../components/common/loader/Loader";
import useServiceById from "./api/useServiceById";
import Hero from "../../../components/common/hero/Hero";
import bg from "../../../assets/assets.png";
import MainCard from "../../../components/common/cards/MainCard";
import Title from "../../../components/common/title/Title";
import BgForm from "../../../components/common/bgForm/BgForm";
import MainInput from "../../../components/common/inputs/MainInput";
import SendButton from "../../../components/common/buttons/SendButton";
import MainTextArea from "../../../components/common/inputs/MainTextArea";
import { useTranslation } from "react-i18next";
import { ServiceWithChild } from "../../../types/ServiceWithChild";
import { useLocation } from "react-router-dom";
import useServiceByIdLogic from "./logic/useServiceByIdLogic";
import DetailsCard from "../../../components/common/cards/DetailsCard";
import Head from "../../../components/common/meta/Head";
import { tabTitle } from "../../../utils/tabTitle";
import HtmlRenderer from "../../../components/common/html/HtmlRender";
const ServiceDetailsPage = () => {
  const serviceId = useLocation()?.state?.serviceId;
  const {
    states: { name, phone, email, message },
    handlers: {
      handleNameChange,
      handlePhoneChange,
      handleEmailChange,
      handleMessageChnage,
      handleSubmit,
    },
    isPending,
  } = useServiceByIdLogic(serviceId);
  const { t } = useTranslation();
  const { isLoading, data } = useServiceById();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="overflow-x-hidden">
      {data?.name ? <Head title={tabTitle(data?.name)} /> : null}

      <Hero image={bg} title={data?.name || ""} />
      <div className="container mx-auto px-8 md:px-16 lg:px-24 my-6 lg:my-8">
        <Title title={data?.name || ""} />
        {data?.description && <HtmlRenderer html={data?.description} />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 lg:gap-8 xl:gap-12 my-4 md:my-6 lg:my-8">
          {!data?.is_final ? (
            data?.child_services && data?.child_services?.length ? (
              data?.child_services?.map(
                (item: ServiceWithChild, index: number) => (
                  <MainCard key={index} data={item} index={index} />
                )
              )
            ) : (
              <div className="w-full flex items-center justify-center text-lg md:text-xl lg:text-2xl xl:text-3xl text-red-600 text-center">
                <p className="text-center">{t("no data")}</p>
              </div>
            )
          ) : data?.child_services && data?.child_services?.length ? (
            data?.child_services?.map(
              (item: ServiceWithChild, index: number) => (
                <DetailsCard key={index} item={item} index={index} />
              )
            )
          ) : (
            <div className="w-full flex items-center justify-center text-lg md:text-xl lg:text-2xl xl:text-3xl text-red-600 text-center">
              <p className="text-center">{t("no data")}</p>
            </div>
          )}
        </div>

        {/* {data?.child_services && data?.child_services?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 lg:gap-8 xl:gap-12 my-4 md:my-6 lg:my-8">
            {data?.child_services?.map(
              (item: ServiceWithChild, index: number) =>
                item?.new_child_services && item?.new_child_services?.length ? (
                 
                ) : (
                  <DetailsCard key={index} item={item} index={index} />
                )
            )}
          </div>
        ) : null} */}
        <BgForm>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-center">
            <div>
              <p>{t("contact us")}</p>
              {data?.name && (
                <p className="font-bold text-md md:text-lg lg:text-xl xl:text-2xl my-2">
                  {data?.name}
                </p>
              )}
              <p>
                {t(
                  "Contact us today to explore how our company can help you achieve your financial goals and achieve sustainable growth in investments"
                )}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <MainInput
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="my-5">
                <MainInput
                  type="text"
                  placeholder="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="my-5">
                <MainInput
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="my-5">
                <MainTextArea value={message} onChange={handleMessageChnage} />
              </div>
              <div className="w-full flex justify-center">
                <SendButton disabled={isPending} />
              </div>
            </form>
          </div>
        </BgForm>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
