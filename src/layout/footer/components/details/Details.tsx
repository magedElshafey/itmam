import locationIcom from "../../../../assets/location.webp";
import emailIcon from "../../../../assets/email.webp";
interface DetailsProps {
  location?: string;
  email?: string;
}
const Details: React.FC<DetailsProps> = ({ location, email }) => {
  return (
    <>
      {location ? (
        <div className="flex  gap-2 mb-3">
          <img
            alt="icon"
            src={locationIcom}
            className="w-[15px] h-[15px] object-contain"
          />
          <p className="text-white">{location}</p>
        </div>
      ) : null}
      {email ? (
        <div className="flex  gap-2 mb-5">
          <img
            alt="icon"
            src={emailIcon}
            className="w-[15px] h-[15px] object-contain"
          />
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
            className=" lowercase text-white duration-300 hover:underline"
          >
            {email}
          </a>
        </div>
      ) : null}
    </>
  );
};

export default Details;
