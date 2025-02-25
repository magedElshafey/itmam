// import { About } from "../../types/About";
// import HtmlRenderer from "../common/html/HtmlRender";
// import { motion } from "framer-motion";

// interface VissionProps {
//   data: About;
// }

// const Vission: React.FC<VissionProps> = ({ data }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 100 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="h-[200px] lg:h-[320px] rounded-3xl cursor-pointer relative overflow-hidden"
//     >
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full"
//         style={{
//           backgroundImage: `url(${data?.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//         whileHover={{
//           scale: [1, 1.05, 1], // يتمدد وينكمش بشكل ناعم
//         }}
//         transition={{
//           duration: 4, // حركة بطيئة ومريحة
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-30 rounded-3xl text-white"
//         whileHover={{
//           scale: [1, 1.05, 1], // يتمدد وينكمش بشكل ناعم
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <div className="container mx-auto px-8 md:px-16 lg:px-24 h-full">
//           <div className="w-full h-full flex items-center justify-end">
//             <div className="flex flex-col items-center">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
//                 {data?.name}
//               </h2>
//               {data?.description && <HtmlRenderer html={data?.description} />}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Vission;
import { About } from "../../types/About";
import HtmlRenderer from "../common/html/HtmlRender";
import { motion } from "framer-motion";

interface VissionProps {
  data: About;
}

const Vission: React.FC<VissionProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-[200px] lg:h-[320px] rounded-3xl cursor-pointer relative overflow-hidden"
    >
      {/* الصورة مع التأثير */}
      <motion.img
        src={data?.image}
        alt={data?.name}
        className="absolute top-0 left-0 w-full h-full object-cover"
        whileHover={{
          scale: 1.05, // يتمدد مع الهوفر
        }}
        transition={{
          duration: 0.4, // حركة سلسة عند الهوفر
          ease: "easeInOut",
        }}
      />

      {/* الـ Overlay مع نفس التأثير */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-30 rounded-3xl text-white"
        whileHover={{
          scale: 1.05, // يتمدد بنفس مقدار الصورة
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
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
      </motion.div>
    </motion.div>
  );
};

export default Vission;

