import SocialIcon from "./SocialIcon";
import { useLocation } from "react-router-dom";
import { useSpring } from "@react-spring/web";

const Socials = [
    // {
    //     id: "twitter",
    //     href: "https://twitter.com/ryanparrots",
    // },
    {
        id: "instagram",
        href: "https://www.instagram.com/ryanpairitz/",
    },
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/ryanpairitz/",
    },
    {
        id: "tiktok",
        href: "https://www.tiktok.com/@ryanpairitz",
    },
    {
        id: "github",
        href: "https://github.com/ryanpairitz",
    },
]

const SocialsList = () => {
    const location = useLocation();
    const style = useSpring({
        to: {
            fill: location.state?.theme.primary ? location.state?.theme.primary : "#0c7a6e"
        }
    });
    return (
        <div className="icons-container">
            {Socials.map((item, index) => (
                <SocialIcon item={item} className="icon" key={index}
                    style={style} />
            ))}
        </div>
    );
};

export default SocialsList;