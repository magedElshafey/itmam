import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets.png";
import HtmlRenderer from "../../components/common/html/HtmlRender";
import useStaticPages from "../../hooks/api/useStaticPages";
import Loader from "../../components/common/loader/Loader";
const TermsPage = () => {
  const { isLoading, pageData } = useStaticPages("terms-and-conditions");
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Hero
        image={pageData?.image || bg}
        title={pageData?.name || "الشروظ و الأحكام"}
      />
      <div className="container mx-auto px-8 md:px-16 my-5 md:my-8">
        <HtmlRenderer html={pageData?.description || ""} />
      </div>
    </>
  );
};

export default TermsPage;
