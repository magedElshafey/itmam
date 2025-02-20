import { messages } from "../../data/data";
const Message = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
      {messages?.map((item, index) => (
        <div
          key={index}
          className="bg-custom-gradient p-5 flex items-center justify-center rounded-xl duration-300 cursor-pointer text-white text-center hover:scale-105"
        >
          <p >{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Message;

