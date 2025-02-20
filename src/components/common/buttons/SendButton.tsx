import trueIcon from "../../../assets/true.png";
import { useTranslation } from "react-i18next";
const SendButton = () => {
  const { t } = useTranslation();
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-1 bg-darkMainColor text-white py-2 px-6 rounded-lg"
    >
      <span>{t("send")}</span>
      <img alt="icon" src={trueIcon} className="w-7 h-7 object-contain" />
    </button>
  );
};

export default SendButton;
