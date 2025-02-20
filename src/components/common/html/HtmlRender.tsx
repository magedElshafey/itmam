import React from "react";
import { useLocation } from "react-router-dom";
type HtmlRendererProps = {
  html: string;
};

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ html }) => {
  const { pathname } = useLocation();
  return <div dangerouslySetInnerHTML={{ __html: html }} className= {pathname === "/" ? "text-babyBlueColor text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2" : ""} />;
};

export default HtmlRenderer;
