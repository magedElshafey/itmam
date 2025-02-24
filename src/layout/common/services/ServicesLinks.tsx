import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import createSlug from "../../../utils/createSlug";
import { ServiceWithChild } from "../../../types/ServiceWithChild";
import Coins from "../../../components/common/coins/Coins";
interface ServiceLinkProps {
  services?: ServiceWithChild[];
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}
const ServicesLinks: React.FC<ServiceLinkProps> = ({
  services,
  setShowSidebar,
}) => {
  const { t } = useTranslation();
  const handleClick = () => {
    if (setShowSidebar) {
      setShowSidebar(false);
    } else {
      return;
    }
  };
  return (
    <>
      {services && services?.length
        ? services?.map((item: ServiceWithChild, index: number) => (
            <div key={index}>
              {item?.child_services && item?.child_services?.length ? (
                <h5 className="text-white my-2">{t(item?.name)} : </h5>
              ) : (
                <Link
                  onClick={handleClick}
                  to={`/services/${createSlug(item?.name)}`}
                  state={{
                    serviceId: item?.id,
                  }}
                  className="text-white my-6 block"
                >
                  {t(item?.name)}
                </Link>
              )}

              {item?.child_services && item?.child_services?.length
                ? item?.child_services?.map(
                    (subItem: ServiceWithChild, subIndex: number) => (
                      <Link
                        onClick={handleClick}
                        key={subIndex}
                        to={`/services/${createSlug(subItem?.name)}`}
                        state={{
                          serviceId: subItem?.id,
                        }}
                        className="flex items-center gap-2 mb-3 text-white w-fit duration-300 hover:text-babyBlueColor hover:underline group"
                      >
                        <Coins />
                        <span>{t(subItem?.name)}</span>
                      </Link>
                    )
                  )
                : null}
            </div>
          ))
        : null}
    </>
  );
};

export default ServicesLinks;
