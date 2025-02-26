import { useNavigate } from "react-router-dom";
interface logoProps {
  logo?: string;
}
const Logo: React.FC<logoProps> = ({ logo }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <img
      alt="logo"
      src={logo}
      className="h-auto w-[150px] cursor-pointer"
      onClick={handleClick}
      loading="eager"
    />
  );
};

export default Logo;
