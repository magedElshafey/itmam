import BgForm from "../../common/bgForm/BgForm";
import MainInput from "../../common/inputs/MainInput";
import SendButton from "../../common/buttons/SendButton";
import useNewsLetterLogic from "./logic/useNewsLetterLogic";
const Contact = () => {
  const {
    states: { name, phone },
    handlers: { handleNameChange, handlePhoneChange, handleSubmit },
    isPending,
  } = useNewsLetterLogic();
  return (
    <BgForm>
      <form onSubmit={handleSubmit}>
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
      </form>
    </BgForm>
  );
};

export default Contact;
