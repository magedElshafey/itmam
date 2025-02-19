import Navbar from "./layout/navbar/Navbar"
import Footer from "./layout/Footer";
import useLocalizeDocumentAttributes from "./hooks/common/ui/useLocalizeDocumentAttributes";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/common/loader/Loader";
import FixedBtn from "./components/common/buttons/FixedBtn";
const Home = lazy(() => import("./app/home/page"));
const About = lazy(() => import("./app/about/page"));
const AssetsManagment = lazy(() => import("./app/assetsManagment/page"));
const Services = lazy(() => import("./app/services/page"));
const Consulting = lazy(() => import("./app/consulting/Consulting"));
const Contact = lazy(() => import("./app/contact/page"));
const NotFound = lazy(() => import("./app/not-found/page"));
const App = () => {
  useLocalizeDocumentAttributes();
  return (
    <div>
      <Suspense fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <Loader />
        </div>
      }>
        <FixedBtn />
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/assets-managment" element={<AssetsManagment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>


    </div>
  )
}

export default App