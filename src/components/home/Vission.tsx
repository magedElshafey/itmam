interface VissionProps {
  image: string;
  title: string;
  descreption: string;
}
const Vission: React.FC<VissionProps> = ({ image, title, descreption }) => {
  return (
    <div
      className="h-[200px] lg:h-[400px] rounded-xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-40 rounded-xl text-white ">
        <div className="container mx-auto px-8 md:px-16 h-full">
          <div className="w-full h-full flex items-center justify-end">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg mb-4 w-full md:w-1/2  text-center">
                {descreption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vission;
