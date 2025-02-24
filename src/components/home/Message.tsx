import { About } from "../../types/About";
import { motion } from "framer-motion";
interface MessageProps {
  data: About[];
}
const Message: React.FC<MessageProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
      {data?.map((item: About, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          className="bg-custom-gradient p-3 flex items-center justify-center rounded-3xl  text-white text-center  min-h-[180px]"
        >
          <p>{item?.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Message;
