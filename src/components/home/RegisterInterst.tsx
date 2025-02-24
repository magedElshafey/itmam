import Logo from "../common/logo/Logo";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
interface RegisterInterstProps {
  email?: string;
  darkLogo?: string;
}
const RegisterInterst: React.FC<RegisterInterstProps> = ({
  email,
  darkLogo,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        bounce: 0.4,
      }}
      className="w-full flex flex-col items-center"
    >
      <Logo logo={darkLogo} />
      <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold">
        {t("Register your interest")}
      </p>

      {email ? (
        <>
          <p className="text-center">
            {t(
              "You can request our consultation by filling out this information and requesting the type of service"
            )}
          </p>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="norefeerer"
            className=" lowercase text-darkPurpleColor"
          >
            {email}
          </a>
        </>
      ) : null}
    </motion.div>
  );
};

export default RegisterInterst;
