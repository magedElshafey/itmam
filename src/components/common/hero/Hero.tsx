import { Link, useLocation } from "react-router-dom";
interface HeroProps {
  title: string;
  descreption?: string;
  metaDescreption?: string;
  btns?: {
    name: string;
    path: string;
  }[];
  image: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  descreption,
  metaDescreption,
  btns,
  image,
}) => {
  const { pathname } = useLocation();
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-screen h-[500px] lg:h-[600px] overflow-hidden">
        <img src={image} alt="hero" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
          <div className="container mx-auto px-8 md:px-16 h-full">
            <div
              className={`w-full h-full flex items-center ${
                pathname === "/" ? "justify-start" : "justify-center"
              }`}
            >
              <div>
                <h1
                  data-aos="fade-up"
                  className={`text-white  ${descreption ? "mb-2" : ""}`}
                >
                  {title}
                </h1>
                {descreption && (
                  <h2
                    className={`text-babyBlueColor ${
                      metaDescreption ? "mb-3" : ""
                    }`}
                  >
                    {descreption}
                  </h2>
                )}
                {metaDescreption && (
                  <p
                    className={`text-white w-full md:w-1/2 ${
                      btns && btns?.length ? "mb-3" : ""
                    }`}
                    data-aos="fade-down"
                  >
                    {metaDescreption}
                  </p>
                )}
                {btns && btns?.length && (
                  <div className="flex items-center gap-3 flex-wrap">
                    {btns?.map((item, index: number) => (
                      <Link
                        key={index}
                        to={item?.path}
                        className="bg-white text-darkMainColor py-2 px-2  md:px-5 flex items-center justify-center rounded-xl duration-500  hover:bg-babyBlueColor hover:text-white"
                      >
                        {item?.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
