
import { useTranslation } from "react-i18next";
interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  const { t } = useTranslation();
  return (
      <h3  className="text-center font-black mb-6 text-xl md:text-2xl lg:text-3xl xl:text-5xl">
          {t(title)}
    </h3>
  )
}

export default Title