import Logo from "../common/logo/Logo";
import { useTranslation } from "react-i18next";
interface RegisterInterstProps {
  email?: string;
  darkLogo?: string; 
}
const RegisterInterst: React.FC<RegisterInterstProps> = ({ email , darkLogo }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center">
      <Logo logo={darkLogo} />
      <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold">
        {t("Register your interest")}
      </p>
      <p className="font-medium text-center">
        {t(
          "You can request our consultation by filling out this information and requesting the type of service"
        )}
      </p>
      {email && (
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="norefeerer"
          className=" lowercase text-darkPurpleColor"
        >
          {email}
        </a>
      )}
    </div>
  );
};

export default RegisterInterst;
