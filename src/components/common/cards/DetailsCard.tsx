import HtmlRenderer from "../html/HtmlRender";
import { ServiceWithChild } from "../../../types/ServiceWithChild";
interface DetailsCardProps {
  item: ServiceWithChild;
  index: number;
}
const DetailsCard: React.FC<DetailsCardProps> = ({ item, index }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center w-24 h-24 rounded-[50%] bg-custom-gradient text-babyBlueColor font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <p>{++index}</p>
      </div>
      <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
        {item?.name}
      </p>
      {item?.description && (
        <div className="text-center">
          <HtmlRenderer html={item?.description} />
        </div>
      )}
    </div>
  );
};

export default DetailsCard;
