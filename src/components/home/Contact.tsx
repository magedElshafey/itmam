import BgForm from "../common/bgForm/BgForm"
import MainInput from "../common/inputs/MainInput"
import SendButton from "../common/buttons/SendButton";
const Contact = () => {
  return (
    <BgForm>
    <form>
      <div className="my-5">
        <MainInput type="text" placeholder="name" />
      </div>
      <div className="my-5">
        <MainInput type="text" placeholder="phone" />
      </div>
      <div className="w-full flex justify-center">
       <SendButton /> 
      </div>
    </form>
  </BgForm>
  )
}

export default Contact