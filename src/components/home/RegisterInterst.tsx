
import Logo from "../common/logo/Logo"
import logo from "../../assets/darkLogo.png"; 
import { useTranslation } from "react-i18next";
const RegisterInterst = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center">
    <Logo logo={logo} />
    <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold my-2">
      {t("Register your interest")}
    </p>
    <p className="font-medium my-2 text-center">
      يمكنك طلب استشارتنا عن طريق ملئ هذه البيانات و طلب نوع الخدمة
    </p>
    <a
      href="mailto:magedelshafey98@gmail.com"
      target="_blank"
      rel="norefeerer"
      className=" lowercase text-darkPurpleColor"
    >
      magedelshafey98@gmail.com
    </a>
  </div>
  )
}

export default RegisterInterst