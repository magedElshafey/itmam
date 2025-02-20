import Loader from "../loader/Loader";
import ErrorPopup from "../popup/ErrorPoup";
import { useTranslation } from "react-i18next";
interface FetchHandlerProps {
  children: React.ReactNode;
  queryResult: any;
}
const FetchHandler: React.FC<FetchHandlerProps> = ({
  children,
  queryResult,
}) => {
  const { isLoading, isError, isSuccess } = queryResult;
  const { t } = useTranslation();
  return (
    <div className="main">
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
      {isError && (
        <ErrorPopup
          title={t("Something went wrong")}
          subTitle={t("Please try again later")}
        />
      )}
      {isSuccess && children}
    </div>
  );
};

export default FetchHandler;
