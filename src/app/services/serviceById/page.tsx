import Loader from "../../../components/common/loader/Loader";
import useServiceById from "./api/useServiceById";
import Hero from "../../../components/common/hero/Hero";
import bg from "../../../assets/assets.png";
import MainCard from "../../../components/common/cards/MainCard";
import Title from "../../../components/common/title/Title";
const ServiceDetailsPage = () => {
  const { isLoading, data } = useServiceById();
  if (isLoading) {
    return <Loader />;
  }
  console.log("data from service details", data);
  return (
    <>
      <Hero image={bg} title={data?.name || ""} />
      <div className="container mx-auto px-8 md:px-16 my-6 lg:my-8">
        <Title title={data?.name || ""} />
        {data?.child_services && data?.child_services?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 my-4 md:my-6 lg:my-8">
            {data?.child_services?.map((item, index) => (
              <MainCard key={index} data={item} />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ServiceDetailsPage;
