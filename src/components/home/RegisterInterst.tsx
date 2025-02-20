import Logo from "../common/logo/Logo";
import logo from "../../assets/darkLogo.png";
import { useTranslation } from "react-i18next";
interface RegisterInterstProps {
  email?: string;
}
const RegisterInterst: React.FC<RegisterInterstProps> = ({ email }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center">
      <Logo logo={logo} />
      <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold my-2">
        {t("Register your interest")}
      </p>
      <p className="font-medium my-2 text-center">
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
