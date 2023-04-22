import SocialIcon from "./SocialIcon";
import { useLocation } from "react-router-dom";
import { useSpring } from "@react-spring/web";
import { useLayoutEffect, useState } from "react";

const Socials = [
    {
        id: "twitter",
        href: "https://twitter.com/ryanparrots",
    },
    {
        id: "instagram",
        href: "https://www.instagram.com/ryanpairitz/",
    },
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/ryan-pairitz-462440222/",
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
    const [isHome, setIsHome] = useState(true);
    useLayoutEffect(() => {
        setIsHome(!location.pathname.includes("project"));
    }, [location]);
    const style = useSpring({
        to: {
            fill: isHome ? "#155243" : location.state?.theme.primary
        }
    });
    return (
        <div className="icons-container">
            {Socials.map((item, index) => (
                <SocialIcon item={item} className="icon" key={index} style={style}/>
            ))}
        </div>
    );
};

export default SocialsList;