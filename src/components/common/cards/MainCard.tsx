import { GoArrowUpLeft } from "react-icons/go";
import createSlug from "../../../utils/createSlug";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HtmlRenderer from "../html/HtmlRender";
import { ServiceWithChild } from "../../../types/ServiceWithChild";
import { motion } from "framer-motion";

interface MainCardProps {
  data: ServiceWithChild;
  index?: number;
}
const MainCard: React.FC<MainCardProps> = ({ data, index }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        bounce: 0.4,
        delay: index ? index * 0.2 : 0.2,
      }}
      className="w-full bg-custom-gradient p-3 rounded-3xl flex items-center text-white text-center duration-300 hover:rounded-none cursor-pointer"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p
          className={`text-md md:text-lg lg:text-xl xl:text-2xl text-center ${
            data?.description ? "mb-1" : ""
          } font-bold`}
        >
          {data?.name}
        </p>

        {data?.description ? (
          <HtmlRenderer html={data?.description?.substring(0, 100)} />
        ) : null}
        {data?.description && data?.description?.length > 100 ? "..." : null}

        <Link
          to={`/services/${createSlug(data?.name)}`}
          state={{
            serviceId: data?.id,
          }}
          className="flex items-center justify-center gap-1 bg-white py-3 px-5 rounded-3xl text-mainColor mt-2"
        >
          <span>{t("more")}</span>
          <GoArrowUpLeft />
        </Link>
      </div>
    </motion.div>
  );
};

export default MainCard;
