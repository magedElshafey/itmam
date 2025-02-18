
import { useTranslation } from "react-i18next";
interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  const { t } = useTranslation();
  return (
      <h3 data-aos="fade-down" className="text-center font-black mb-6">
          {t(title)}
    </h3>
  )
}

export default Title