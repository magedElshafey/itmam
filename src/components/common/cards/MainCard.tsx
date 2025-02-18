import { Card } from "../../../types/Card";
import { GoArrowUpLeft } from "react-icons/go";
import createSlug from "../../../utils/createSlug";
import { Link } from "react-router-dom";
interface MainCardProps {
  data: Card;
  index: number;
}
const MainCard: React.FC<MainCardProps> = ({ data, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="w-full bg-custom-gradient p-4 rounded-md flex items-center text-white text-center"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl text-center mb-3 font-bold">
          {data?.title}
        </p>
        <p className="text-center leading-relaxed">
          {data?.descreption?.substring(0, 100)}{" "}
          {data?.descreption?.length > 100 ? "..." : ""}
        </p>
        <Link
          to={`${data?.path}/${createSlug(data?.title)}`}
          state={{
            serviceId: data?.id,
          }}
          className="flex items-center justify-center gap-1 bg-white py-3 px-8 rounded-xl border border-mainColor text-mainColor mt-4"
        >
          <span>{data?.btnText}</span>
          <GoArrowUpLeft />
        </Link>
      </div>
    </div>
  );
};

export default MainCard;
