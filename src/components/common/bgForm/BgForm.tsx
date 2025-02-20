import bg from "../../../assets/contactImg.png";
import bg2 from "../../../assets/contactImg-02.png"; 
import { useLocation } from "react-router-dom";
interface BgFormProps {
  children: React.ReactNode;
}
const BgForm: React.FC<BgFormProps> = ({ children }) => {
  const { pathname } = useLocation();
  const isSmallImg = pathname === "/contact" || pathname === "/";
  return (
    <div
      className={`w-full ${isSmallImg ? 'h-auto lg:h-[410px]' : 'h-[640px]'} mx-auto py-4`}
      style={{
        backgroundImage: `url(${isSmallImg ? bg : bg2})`,
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
