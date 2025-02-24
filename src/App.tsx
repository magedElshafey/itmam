import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// hooks
import useLocalizeDocumentAttributes from "./hooks/common/ui/useLocalizeDocumentAttributes";
import useSettings from "./hooks/api/useSettings";
import useServiceWithChild from "./hooks/api/useServiceWithChild";
// common layout
import Loader from "./components/common/loader/Loader";
import Head from "./components/common/meta/Head";
import FixedBtn from "./components/common/buttons/fixed/FixedBtn";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
// assets
import whiteLogo from "./assets/whiteLogo.png";
import darkLogo from "./assets/darkLogo.png";
import footerBg from "./assets/footer-bg.png";
// pages
const Home = lazy(() => import("./app/home/page"));
const About = lazy(() => import("./app/about/page"));
const Services = lazy(() => import("./app/services/page"));
const ServiceDetails = lazy(() => import("./app/services/serviceById/page"));
const Contact = lazy(() => import("./app/contact/page"));
const Privacy = lazy(() => import("./app/privacy/page"));
const Terms = lazy(() => import("./app/terms/page"));
const Policy = lazy(() => import("./app/policy/page"));
const Callus = lazy(() => import("./app/callus/page"));
const NotFound = lazy(() => import("./app/not-found/page"));
const App = () => {
  useLocalizeDocumentAttributes();
  const { isLoading, isError, data } = useSettings();
  const {
    isLoading: loadingServices,
    isError: errorServices,
    data: services,
  } = useServiceWithChild();
  if (isLoading || loadingServices) return <Loader />;
  if (isError || errorServices) return <NotFound />;
  return (
    <Suspense fallback={<Loader />}>
      <Head
        title={data?.name}
        description={data?.description}
        favicon={data?.favicon}
      />
      <FixedBtn whatsapp={data?.whatsapp} />
      <Navbar
        facebook={data?.facebook}
        instagram={data?.instagram}
        youtube={data?.youtube}
        tiktok={data?.tiktok}
        whatsapp={data?.whatsapp}
        x={data?.x}
        services={services}
        whiteLogo={data?.logo || whiteLogo}
        darkLogo={data?.logo2 || darkLogo}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home email={data?.email} darkLogo={data?.logo2 || darkLogo} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route
          path="/contact"
          element={
            <Contact email={data?.email} darkLogo={data?.logo2 || darkLogo} />
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route
          path="/call-us"
          element={
            <Callus
              phone1={data?.phone}
              phone2={data?.phone2}
              email={data?.email}
              logo={data?.logo2 || darkLogo}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer
        email={data?.email}
        location={data?.location}
        facebook={data?.facebook}
        instagram={data?.instagram}
        youtube={data?.youtube}
        tiktok={data?.tiktok}
        whatsapp={data?.whatsapp}
        x={data?.x}
        services={services}
        whiteLogo={data?.logo || whiteLogo}
        slogan={data?.footer_description}
        copyRight={data?.footer_description2}
        footer_image={data?.footer_image || footerBg}
      />
    </Suspense>
  );
};

export default App;
