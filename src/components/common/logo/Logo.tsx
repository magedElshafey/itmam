import { Link } from "react-router-dom";

interface logoProps {
    logo?: string;
    style?: React.CSSProperties;
}

const Logo: React.FC<logoProps> = ({ logo, style }) => {
    return (
        <Link to="/">
            <img
                style={style}
                alt="logo"
                src={logo}
                className={`${style ? "" : "h-[30px] md:h-[50px]"
                    }`}
            />
        </Link>
    );
};

export default Logo;
