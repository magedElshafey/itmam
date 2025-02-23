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
  const { t } = useTranslation();
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
      className={` ${
        scrolling ? " bg-darkMainColor text-white" : "bg-white"
      } p-4 text-nowrap  rounded-3xl flex items-center justify-center duration-300 hover:bg-babyBlueColor`}
      to="/call-us"
    >
      {t("ask for consultation")}
    </Link>
  );
};

export default CallToAction;
