import Hero from "../../components/common/hero/Hero";
import assets from "../../assets/assets.png";
import Title from "../../components/common/title/Title";
import MainCard from "../../components/common/cards/MainCard";
import useAllServices from "./api/useAllServices";
import Loader from "../../components/common/loader/Loader";
const Services = () => {
  const { isLoading, data } = useAllServices();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Hero title="جميع خدماتنا" image={assets} />
      <div className="container mx-auto px-8 md:px-16 my-6 md:my-8">
        <Title title="Learn about all our services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {data?.map((item, index) => (
            <MainCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
