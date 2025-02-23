import RegisterInterst from "../../components/home/RegisterInterst";
import Contact from "../../components/home/contact/Contact";
import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets.png";
import { useTranslation } from "react-i18next";
interface ContactProps {
  email?: string;
  darkLogo?: string; 
}
const ContactPage: React.FC<ContactProps> = ({ email , darkLogo }) => {
  const { t } = useTranslation();
  return (
    <>
      <Hero image={bg} title={t("Register your interest")} />
      <div className="container mx-auto px-8 md:px-16 my-5 md:my-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          <RegisterInterst email={email} darkLogo = {darkLogo} />
          <div className="w-full md:w-1/2">
            <div className="w-full md:w-3/4 mx-auto">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
