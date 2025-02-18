import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../../store/LanguageProvider";
const useNavbarLogic = () => {
  // states
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [activeDropDown, setActiveDropDown] = useState<number | null>(null);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { language, changeLanguage } = useLanguage();
  // refs
  const sidebarRef = useRef<HTMLDivElement>(null);
  // handlers
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const changeLanguageHandler = (language: string) => {
    changeLanguage(language);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    states: {
      showSidebar,
      activeDropDown,
      scrolling,
      language
    },
    refs: { sidebarRef },
    handlers: {
      setShowSidebar,
      setActiveDropDown,
      handleShowSidebar,
      changeLanguageHandler
    },
  };
};
export default useNavbarLogic;
