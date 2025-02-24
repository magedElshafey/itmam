import { About } from "../../types/About";
import HtmlRenderer from "../common/html/HtmlRender";
import { motion } from "framer-motion";

interface VissionProps {
  data: About;
}
const Vission: React.FC<VissionProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3, x: 100 }} 
      whileInView={{ opacity: 1, scale: 1, x: 0 }} 
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-[200px] lg:h-[320px] rounded-3xl duration-300 cursor-pointer hover:rounded-none"
      style={{
        backgroundImage: `url(${data?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-30 rounded-3xl text-white ">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 h-full">
          <div className="w-full h-full flex items-center justify-end">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {data?.name}
              </h2>
              {data?.description && <HtmlRenderer html={data?.description} />}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Vission;
