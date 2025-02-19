import bg from "../../../assets/contactImg.png";
interface BgFormProps {
  children: React.ReactNode;
}
const BgForm: React.FC<BgFormProps> = ({ children }) => {
  return (
    <div
      className={`w-full h-auto lg:h-[410px] mx-auto py-4`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      
      }}
    >
      <div className="container mx-auto px-8 md:px-16 w-full h-full flex flex-col justify-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BgForm;
