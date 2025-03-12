import { About } from "../../types/About";
import { motion } from "framer-motion";
import HtmlRenderer from "../common/html/HtmlRender";
interface MessageProps {
  data: About[];
  hasDesc? : boolean
}
const Message: React.FC<MessageProps> = ({ data, hasDesc }) => {
  // grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-center mx-auto
  return (
    <div className="flex flex-wrap items-center justify-start md:justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12">
      {data?.map((item: About, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          whileHover={{ scale: 1.2 }}
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          className="bg-custom-gradient p-3 flex items-center justify-center rounded-3xl  text-white text-center  min-h-[180px] w-[150px] md:w-[220px] lg:w-[250px]  cursor-pointer"
        >
          <div>
          <p className={hasDesc ? "mb-3" : ""}>{item?.name}</p>
          {hasDesc && <HtmlRenderer html= {item?.description} /> }
         </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Message;
