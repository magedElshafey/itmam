import { GoArrowUpLeft } from "react-icons/go";
import createSlug from "../../../utils/createSlug";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MainServices } from "../../../types/MainServices";
interface MainCardProps {
  data: MainServices;
  index?: number;
}
const MainCard: React.FC<MainCardProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-custom-gradient p-4 rounded-md flex items-center text-white text-center">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-center mb-3 font-bold">
          {data?.name}
        </p>
        <p className="text-center leading-relaxed">
          {data?.description?.substring(0, 100)}{" "}
          {data?.description?.length > 100 ? "..." : ""}
        </p>
        <Link
          to={`/services/${
            data?.parent_id ? createSlug(data?.name) : createSlug(data?.name)
          }`}
          state={{
            serviceId: data?.id,
          }}
          className="flex items-center justify-center gap-1 bg-white py-3 px-8 rounded-xl border border-mainColor text-mainColor mt-4"
        >
          <GoArrowUpLeft />
          <span>{t("more")}</span>
        </Link>
      </div>
    </div>
  );
};

export default MainCard;
