import useLocalizeDocumentAttributes from "./hooks/common/ui/useLocalizeDocumentAttributes";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/common/loader/Loader";
import FixedBtn from "./components/common/buttons/FixedBtn";
import useSettings from "./hooks/api/useSettings";
import Footer from "./layout/Footer";
import Navbar from "./layout/navbar/Navbar";
const Home = lazy(() => import("./app/home/page"));
const About = lazy(() => import("./app/about/page"));
const AssetsManagment = lazy(() => import("./app/assetsManagment/page"));
const Services = lazy(() => import("./app/services/page"));
const Consulting = lazy(() => import("./app/consulting/Consulting"));
const Contact = lazy(() => import("./app/contact/page"));
const Privacy = lazy(() => import("./app/privacy/page"));
const Terms = lazy(() => import("./app/terms/page"));
const Policy = lazy(() => import("./app/policy/page"));
const NotFound = lazy(() => import("./app/not-found/page"));
const App = () => {
  useLocalizeDocumentAttributes();
  const { isLoading, isError, data } = useSettings();
  if (isLoading)
    return (
      <div className="w-screen h-screen flex justify-center items-center z-[25000]">
        <Loader />
      </div>
    );
  if (isError) return <NotFound />;
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <FixedBtn whatsapp={data?.whatsapp} />
      <Navbar
        facebook={data?.facebook}
        instagram={data?.instagram}
        youtube={data?.youtube}
        tiktok={data?.tiktok}
        whatsapp={data?.whatsapp}
        x={data?.x}
      />
      <Routes>
        <Route path="/" element={<Home email={data?.email} />} />
        <Route path="/about" element={<About />} />
        <Route path="/assets-managment" element={<AssetsManagment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact email={data?.email} />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer
        email={data?.email}
        phone={data?.phone}
        location={data?.location}
        facebook={data?.facebook}
        instagram={data?.instagram}
        youtube={data?.youtube}
        tiktok={data?.tiktok}
        whatsapp={data?.whatsapp}
        x={data?.x}
      />
    </Suspense>
  );
};

export default App;
