
import { footerLinks } from "../../../../data/data"
import { Nav } from "../../../../types/Nav"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Coins from "../../../../components/common/coins/Coins"
const FooterLinks = () => {
    const {t} = useTranslation()
  return (
      <>
      {footerLinks?.map((item: Nav, index: number) => (
              <div key={index}>
                <h5 className="text-white mb-4">{t(item?.name)}</h5>
                {item?.list &&
                  item?.list?.length &&
                  item?.list?.map((subItem: Nav, subIndex: number) => (
                    <Link
                      key={subIndex}
                      to={subItem?.link}
                      className="flex items-center gap-2 mb-3 text-white w-fit duration-300 hover:text-babyBlueColor hover:underline group"
                    >
                    <Coins /> 
                      <span>{t(subItem?.name)}</span>
                    </Link>
                  ))}
              </div>
            ))}
      </>
  )
}

export default FooterLinks