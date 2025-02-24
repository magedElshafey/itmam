import BgForm from "../../common/bgForm/BgForm";
import MainInput from "../../common/inputs/MainInput";
import SendButton from "../../common/buttons/SendButton";
import useNewsLetterLogic from "./logic/useNewsLetterLogic";
import { motion } from "framer-motion";
const Contact = () => {
  const {
    states: { name, phone },
    handlers: { handleNameChange, handlePhoneChange, handleSubmit },
    isPending,
  } = useNewsLetterLogic();
  return (
    <BgForm>
      <motion.form
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.7, ease: "easeOut" }}
        onSubmit={handleSubmit}
     
      >
        <div className="my-5">
          <MainInput
            type="text"
            placeholder="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="my-5">
          <MainInput
            type="text"
            placeholder="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="w-full flex justify-center">
          <SendButton disabled={isPending} />
        </div>
      </motion.form>
    </BgForm>
  );
};

export default Contact;
