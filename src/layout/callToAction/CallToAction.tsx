import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
interface CallToActionProps {
  scrolling?: boolean;
  showSidebar?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}
const CallToAction: React.FC<CallToActionProps> = ({
  scrolling,
  showSidebar,
  setShowSidebar,
}) => {
  const { t, i18n } = useTranslation();
  const handleClick = () => {
    if (showSidebar && setShowSidebar) {
      setShowSidebar(false);
    } else {
      return;
    }
  };
  return (
    <Link
      onClick={handleClick}
      className={`min-w-[120px] ${
        scrolling ? " bg-darkMainColor text-white" : "bg-white"
      } px-4 py-2 text-nowrap  rounded-3xl flex items-center justify-center duration-300 hover:bg-babyBlueColor ${
        i18n.language === "ar" ? "text-base lg:text-md xl:text-lg" : ""
      }`}
      to="/contact"
    >
      {t("ask for consultation")}
    </Link>
  );
};

export default CallToAction;
