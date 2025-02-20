import { useTranslation } from "react-i18next";
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
    <a
      onClick={handleClick}
      className={` ${
        scrolling ? " bg-darkMainColor text-white" : "bg-white"
      } p-4 text-nowrap  rounded-3xl flex items-center justify-center duration-300 hover:bg-babyBlueColor`}
      href="#contact"
    >
      {t("ask for consultation")}
    </a>
  );
};

export default CallToAction;
