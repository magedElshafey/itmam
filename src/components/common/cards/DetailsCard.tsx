import HtmlRenderer from "../html/HtmlRender";
import { ServiceWithChild } from "../../../types/ServiceWithChild";
import { motion } from "framer-motion";
interface DetailsCardProps {
  item: ServiceWithChild;
  index: number;
}
const DetailsCard: React.FC<DetailsCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        bounce: 0.2,
        delay: index ? index * 0.1 : 0,
      }}
      className="flex flex-col items-center justify-center gap-2"
    >
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
    </motion.div>
  );
};

export default DetailsCard;
